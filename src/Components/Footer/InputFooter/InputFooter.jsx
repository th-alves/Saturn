import React from "react";
import validator from "validator";
import { useForm } from "react-hook-form";

const InputFooter = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };
  return (
    <form
      onSubmit={(e) => e.preventDefault()}
      className="flex flex-col items-center"
    >
      <input
        className={`shadow ${
          errors.email ? "border-red-500 text-red-400" : "border-gray-300"
        } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
        id="email"
        type="email"
        placeholder="email@example.com"
        {...register("email", {
          required: true,
          validate: (value) => validator.isEmail(value),
        })}
      />
      {errors?.email?.type === "required" && (
        <p className="text-red-400 mt-1 italic text-sm">Digite seu email.</p>
      )}
      {errors?.email?.type === "validate" && (
        <p className="text-red-400 mt-1 italic text-sm">Email inválido.</p>
      )}
      <button
        onClick={() => handleSubmit(onSubmit)()}
        className="bg-sky-700 hover:bg-sky-800 w-full mt-2 py-2 rounded-md shadow-lg"
      >
        Ficar por dentro!
      </button>
    </form>
  );
};

export default InputFooter;
