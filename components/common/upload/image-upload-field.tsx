"use client";

import { ImageIcon, Upload, X } from "lucide-react";
import { useState } from "react";
import type {
  UseFormRegister,
  UseFormSetValue,
  UseFormWatch,
} from "react-hook-form";

type ImageUploadFieldProps = {
  name: string;
  label: string;
  hint?: string;
  icon?: React.ReactNode;
  uploadTitle: string;
  uploadSubtitle: string;
  removeLabel?: string;
  multiple?: boolean;
  maxFiles?: number;
  register: UseFormRegister<any>;
  watch: UseFormWatch<any>;
  setValue: UseFormSetValue<any>;
};

export default function ImageUploadField({
  name,
  label,
  hint,
  icon = <Upload size={21} />,
  uploadTitle,
  uploadSubtitle,
  removeLabel = "Remove image",
  multiple = false,
  maxFiles = 1,
  register,
  watch,
  setValue,
}: ImageUploadFieldProps) {
  const [previews, setPreviews] = useState<{ id: string; url: string }[]>([]);

  const files = watch(name);
  const fileList: FileList | undefined = files;

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const selected = event.target.files;
    if (!selected || selected.length === 0) return;

    const incoming = Array.from(selected);
    const available = multiple ? Math.max(0, maxFiles - previews.length) : 1;
    const accepted = incoming.slice(0, available);

    // build a new FileList-like object preserving order
    const dataTransfer = new DataTransfer();
    accepted.forEach((file) => dataTransfer.items.add(file));

    setValue(name, multiple ? dataTransfer.files : accepted[0], {
      shouldDirty: true,
      shouldValidate: true,
    });

    setPreviews((current) => {
      const next = accepted.map((file) => ({
        id: `${file.name}-${file.size}-${file.lastModified}`,
        url: URL.createObjectURL(file),
      }));
      return multiple ? [...current, ...next] : next;
    });

    event.target.value = "";
  };

  const handleRemove = (index: number) => {
    setPreviews((current) => {
      const removed = current[index];
      if (removed) URL.revokeObjectURL(removed.url);
      const next = current.filter((_, i) => i !== index);
      return next;
    });

    if (multiple && fileList) {
      const remaining = Array.from(fileList).filter((_, i) => i !== index);
      const dataTransfer = new DataTransfer();
      remaining.forEach((file) => dataTransfer.items.add(file));
      setValue(name, dataTransfer.files, { shouldDirty: true });
    } else {
      setValue(name, undefined, { shouldDirty: true });
    }
  };

  return (
    <div className="flex flex-col gap-2">
      <label className="font-bold text-sm">{label}</label>

      {previews.length > 0 && !multiple ? (
        <div className="relative h-[190px] overflow-hidden rounded-xl">
          <img
            src={previews[0].url}
            alt="Upload preview"
            className="h-full w-full object-cover"
          />
          <button
            type="button"
            aria-label={removeLabel}
            onClick={() => handleRemove(0)}
            className="absolute right-3 top-3 rounded-full bg-white p-1.5 text-gray-800 shadow"
          >
            <X size={15} />
          </button>
        </div>
      ) : (
        <label className="flex h-[190px] cursor-pointer flex-col items-center justify-center rounded-xl border border-dashed border-gray-400 bg-gray-50 text-center transition hover:border-gray-600 hover:bg-gray-100 has-[:disabled]:cursor-not-allowed has-[:disabled]:opacity-50">
          <input
            type="file"
            accept="image/*"
            multiple={multiple}
            disabled={multiple && previews.length >= maxFiles}
            onChange={handleChange}
            className="sr-only"
          />
          <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-gray-200 text-gray-700">
            {icon}
          </span>
          <span className="mt-3 text-[13px] font-semibold text-gray-800">
            {uploadTitle}
          </span>
          <span className="mt-1 text-[11px] text-gray-400">
            {uploadSubtitle}
          </span>
        </label>
      )}

      {multiple && previews.length > 0 && (
        <div className="mt-2 grid grid-cols-4 gap-3 sm:grid-cols-6">
          {previews.map((preview, index) => (
            <div
              key={preview.id}
              className="relative aspect-square overflow-hidden rounded-lg"
            >
              <img
                src={preview.url}
                alt={`Gallery preview ${index + 1}`}
                className="h-full w-full object-cover"
              />
              <button
                type="button"
                aria-label={`${removeLabel} ${index + 1}`}
                onClick={() => handleRemove(index)}
                className="absolute right-1 top-1 rounded-full bg-white p-1 text-gray-800 shadow"
              >
                <X size={12} />
              </button>
            </div>
          ))}
        </div>
      )}

      {hint && <p className="mt-1 text-[11px] text-gray-400">{hint}</p>}
    </div>
  );
}
