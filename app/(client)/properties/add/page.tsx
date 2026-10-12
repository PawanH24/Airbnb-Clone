"use client";

import { createProperty } from "@/api/property.api";
import InputField from "@/components/common/input/input-field";
import ImageUploadField from "@/components/common/upload/image-upload-field";
import { propertyFormSchema } from "@/schema/auth.schema";
import { TPropertyFormData } from "@/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Minus, Plus, Bed, MapPin, Upload, ImageIcon } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

const PropertyForm = () => {
  const {
    register,
    watch,
    setValue,
    getValues,
    handleSubmit,
    formState: { errors },
  } = useForm<TPropertyFormData>({
    defaultValues: {
      propertyName: "",
      propertyDescription: "",
      propertyType: "house",
      room: 1,
      propertyPrice: undefined,
      propertyPriceType: "per_day",
      country: "",
      city: "",
      street: "",
      zipcode: "",
      mainImage: undefined,
      galleryImage: [],
    },
    resolver: yupResolver(propertyFormSchema),
  });

  // const room = watch("room");
  const priceType = watch("propertyPriceType");

  const handleIncrement = () => {
    if (getValues("room") < 99) setValue("room", getValues("room") + 1);
  };

  const handleDecrement = () => {
    if (getValues("room") > 1) setValue("room", getValues("room") - 1);
  };

  const { mutate } = useMutation({
    mutationFn: createProperty,
    onSuccess: (response) => {
      console.log("on success", response);
    },
    onError: (error) => {
      console.log("on error", error);
    },
  });

  const onSubmit: SubmitHandler<TPropertyFormData> = (data) => {
    console.log("form submitted", data);
    mutate(data);
    console.log("property added");
  };

  return (
    <>
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="min-h-screen flex flex-col justify-center items-center py-12"
      >
        <div className="w-full max-w-3xl flex flex-col gap-6">
          <div className="w-full max-w-3xl flex flex-col justify-center border border-gray-400 rounded-2xl p-6 ">
            <div className="flex font-bold ">
              <p className="rounded-xl bg-gray-300 text-md text-gray-800 py-1 px-2 mr-2 ">
                01
              </p>

              <h1 className=" text-2xl">The essentials</h1>
            </div>

            <p className="text-xs text-gray-400 pl-11">
              Let&apos;s start with the basics about your property.
            </p>

            <div className="flex flex-col gap-2 my-5 mx-2">
              <div className="flex flex-col ">
                <label htmlFor="name" className="font-bold text-sm ">
                  Property Name
                </label>

                <InputField
                  id="propertyName"
                  type="text"
                  placeholder="e.g. The Willow House"
                  register={register}
                  name="propertyName"
                  error={errors?.propertyName?.message}
                />
              </div>

              <div className="flex flex-col gap-2">
                <label htmlFor="name" className="font-bold text-sm ">
                  Property Description
                </label>

                <textarea
                  id="description"
                  placeholder="Tell guests what makes your place special..."
                  {...register("propertyDescription")}
                  className={` border rounded-lg mx-1 px-2 pt-2 pb-8 ${errors?.propertyDescription?.message ? "border-red-500 focus:outline-red-500" : "border-gray-300 focus:outline-gray-300"} `}
                />
                <small className="text-red-500 pl-2 ">
                  {errors?.propertyDescription?.message}
                </small>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div className="flex flex-col gap-2 ">
                  <label htmlFor="propertyType" className="font-bold text-sm ">
                    Property Type
                  </label>

                  <select
                    id="property-type"
                    {...register("propertyType")}
                    className=" border border-gray-300 p-3 rounded-lg"
                  >
                    <option value="">Select a property type</option>

                    <option value="apartment">Apartment</option>

                    <option value="house">House</option>

                    <option value="condo">Condo</option>

                    <option value="townhouse">Townhouse</option>

                    <option value="townhouse">Tree house</option>
                  </select>
                </div>

                <div className="flex flex-col gap-2">
                  <label htmlFor="roomNumber" className="font-bold text-sm ">
                    Number of rooms
                  </label>
                  <div className="flex border border-gray-300 rounded-lg p-2 justify-center">
                    <button
                      type="button"
                      onClick={handleDecrement}
                      className="border border-gray-300 rounded-lg px-1.5 py-1.5"
                    >
                      <Minus size={15} />
                    </button>
                    <div className="flex gap-4 px-10 self-center">
                      <Bed size={15} className="flex self-center" />
                      <input
                        type="text"
                        placeholder="1"
                        className=" placeholder-black  max-w-5 focus:outline-none"
                        {...register("room", {
                          valueAsNumber: true,
                          min: 1,
                          max: 99,
                          onChange: (e) => {
                            const val = parseInt(e.target.value, 10);
                            if (isNaN(val)) return;
                            if (val > 99) setValue("room", 99);
                            if (val < 1) setValue("room", 1);
                          },
                        })}
                      />
                      <span className="text-gray-400">rooms</span>
                    </div>
                    <button
                      type="button"
                      onClick={handleIncrement}
                      className="border border-gray-300 rounded-lg px-1.5 py-1.5"
                    >
                      <Plus size={15} />
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl flex flex-col justify-center border border-gray-400 rounded-2xl p-6 ">
            <div className="flex font-bold ">
              <p className="rounded-xl bg-gray-300 text-md text-gray-800 py-1 px-2 mr-2 ">
                02
              </p>

              <h1 className=" text-2xl">Pricing</h1>
            </div>

            <p className="text-xs text-gray-400 pl-11">
              Set a price that works for you and your guests.
            </p>
            <div className="flex flex-col ">
              <label htmlFor="name" className="font-bold text-sm ">
                Property Name
              </label>

              <InputField
                id="propertyPrice"
                type="text"
                placeholder="0.00"
                register={register}
                name="propertyPrice"
                error={errors?.propertyPrice?.message}
              />
            </div>
            <div className="flex flex-col gap-2">
              <label className="font-bold text-sm">Price type</label>
              <div className="flex h-11.5 rounded-xl border border-gray-300 bg-gray-100 p-1">
                {(["per_day", "per_week", "per_month"] as const).map(
                  (period) => (
                    <button
                      type="button"
                      key={period}
                      onClick={() =>
                        setValue("propertyPriceType", period, {
                          shouldDirty: true,
                        })
                      }
                      className={`flex-1 rounded-lg text-xs font-semibold transition ${
                        priceType === period
                          ? "bg-white text-gray-900 shadow"
                          : "text-gray-500 hover:text-gray-800"
                      }`}
                    >
                      {period
                        .split("_")
                        .map(
                          (word) =>
                            word.charAt(0).toUpperCase() +
                            word.slice(1).toLowerCase(),
                        )
                        .join(" ")}
                    </button>
                  ),
                )}
              </div>
            </div>
          </div>
          <div className="w-full max-w-3xl flex flex-col justify-center border border-gray-400 rounded-2xl p-6 ">
            <div className="flex font-bold ">
              <p className="rounded-xl bg-gray-300 text-md text-gray-800 py-1 px-2 mr-2 ">
                03
              </p>

              <h1 className=" text-2xl">Location</h1>
            </div>

            <p className="text-xs text-gray-400 pl-11">
              Let guests know where they&apos;ll be staying.
            </p>
            <div className="grid gap-5 sm:grid-cols-2">
              <InputField
                id="country"
                type="text"
                placeholder="e.g. Nepal"
                register={register}
                name="country"
                error={errors?.country?.message}
                label="Country"
              />
              <InputField
                id="city"
                type="text"
                placeholder="Kathmandu"
                register={register}
                name="city"
                error={errors?.city?.message}
                label="City"
              />
              <InputField
                id="street"
                type="text"
                placeholder="Baneshwor"
                register={register}
                name="street"
                error={errors?.street?.message}
                label="Street Address"
              />
              <InputField
                id="zipcode"
                type="text"
                placeholder="e.g. 97201"
                register={register}
                name="zipcode"
                error={errors?.zipcode?.message}
                label="Zip Code"
              />
            </div>
            <p className="flex items-center gap-2 text-xs text-gray-400 pl-11">
              <MapPin size={15} /> Your exact address won't be shown to guests
              until they book.
            </p>
          </div>
          <div className="w-full max-w-3xl flex flex-col justify-center border border-gray-400 rounded-2xl p-6 ">
            <div className="flex font-bold ">
              <p className="rounded-xl bg-gray-300 text-md text-gray-800 py-1 px-2 mr-2 ">
                04
              </p>

              <h1 className=" text-2xl">Photos</h1>
            </div>

            <p className="text-xs text-gray-400 pl-11">
              Show off your space with a great first impression.
            </p>
            <div className="grid gap-5 my-5 mx-2 sm:grid-cols-2">
              <ImageUploadField
                name="mainImage"
                label="Main image"
                icon={<Upload size={21} />}
                uploadTitle="Click to upload a cover photo"
                uploadSubtitle="JPG, PNG or WEBP"
                register={register}
                watch={watch}
                setValue={setValue}
              />

              <ImageUploadField
                name="galleryImage"
                label="Gallery images (up to 8)"
                icon={<ImageIcon size={21} />}
                uploadTitle="Add more photos"
                uploadSubtitle="Show every angle of your space"
                multiple
                maxFiles={8}
                register={register}
                watch={watch}
                setValue={setValue}
              />
            </div>
          </div>
          <div className="w-full max-w-3xl flex flex-col justify-center border border-gray-400 rounded-2xl p-6 ">
            <div className="flex font-bold ">
              <p className="rounded-xl bg-gray-300 text-md text-gray-800 py-1 px-2 mr-2 ">
                05
              </p>

              <h1 className=" text-2xl">Amenities</h1>
            </div>

            <p className="text-xs text-gray-400 pl-11">
              Select everything guests can enjoy during their stay.
            </p>
          </div>
          <div className="flex justify-end">
            <button
              type="submit"
              className="mr-2 font-bold border border-black rounded-lg p-2 px-8 hover:bg-black hover:text-white transition"
            >
              Submit
            </button>
          </div>
        </div>
      </form>
    </>
  );
};

export default PropertyForm;
