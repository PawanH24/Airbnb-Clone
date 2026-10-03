"use client";

import { createProperty } from "@/api/property.api";
import InputField from "@/components/common/input/input-field";
import { propertyFormSchema } from "@/schema/auth.schema";
import { TPropertyFormData } from "@/types/auth.types";
import { yupResolver } from "@hookform/resolvers/yup";
import { useMutation } from "@tanstack/react-query";
import { Minus, Plus, Bed } from "lucide-react";
import { SubmitHandler, useForm } from "react-hook-form";

const PropertyForm = () => {
  const {
    register,
    watch,
    setValue,
    handleSubmit,
    formState: { errors },
  } = useForm<TPropertyFormData>({
    defaultValues: {
      propertyName: "",
      propertyDescription: "",
      propertyType: "house",
      room: 1,
    },
    resolver: yupResolver(propertyFormSchema),
  });

  const room = watch("room");

  const handleIncrement = () => {
    if (room < 99) setValue("room", room + 1);
  };

  const handleDecrement = () => {
    if (room > 1) setValue("room", room - 1);
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
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="h-screen flex justify-center items-center"
    >
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
      <button type="submit">Submit</button>
    </form>
  );
};

export default PropertyForm;
