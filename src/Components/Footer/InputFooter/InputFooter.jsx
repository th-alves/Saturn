import React from "react";

const InputFooter = () => {
  return (
    <form className="flex flex-col items-center">
      <input
        className="p-2 rounded-md my-4 w-full outline-none text-black"
        type="email"
        name="email"
        id="email"
        placeholder="seuemail@gmail.com"
      />
      <button
        type="submit"
        className="bg-sky-700 hover:bg-sky-800 w-full py-2 rounded-md shadow-lg"
      >
        Ficar por dentro!
      </button>
    </form>
  );
};

export default InputFooter;
