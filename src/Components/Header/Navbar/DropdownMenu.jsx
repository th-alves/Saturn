import React from "react";

const DropdownMenu = () => {
  return (
    <div className="p-4 rounded-2xl md:absolute top-16 bg-white border border-zinc-400">
      <ul className="flex flex-col gap-4">
        <li className="p-2 hover:bg-black rounded-lg hover:text-white">
          <a href="#">Todos os produtos</a>
        </li>
        <li className="p-2 hover:bg-black rounded-lg hover:text-white">
          <a href="#">Itens populares</a>
        </li>
        <li className="border-t-[1px] p-2 hover:bg-black rounded-lg hover:text-white">
          <a href="#">Drop novo!</a>
        </li>
      </ul>
    </div>
  );
};

export default DropdownMenu;
