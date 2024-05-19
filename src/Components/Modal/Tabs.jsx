import { useState } from "react";

const LoginPage = () => {
  const [tab, setTab] = useState("login");

  return (
    <div>
      <div className="tabs flex mb-4">
        <button
          className={`tab w-1/2 py-2 px-4 ${
            tab === "login" ? "bg-sky-700 text-white" : "bg-white text-sky-700"
          }`}
          onClick={() => setTab("login")}
        >
          Login
        </button>
        <button
          className={`tab w-1/2 py-2 px-4 ${
            tab === "register"
              ? "bg-sky-700 text-white"
              : "bg-white text-sky-700"
          }`}
          onClick={() => setTab("register")}
        >
          Criar Conta
        </button>
      </div>

      {tab === "login" && (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[90vw] md:w-[600px]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Usuário:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="username"
              autoComplete="username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Senha:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="Entrar"
            />
          </div>
        </form>
      )}

      {tab === "register" && (
        <form className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 w-[90vw] md:w-[600px]">
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Nome:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="text"
              name="name"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Email:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
              type="email"
              name="email"
              autoComplete="username"
            />
          </div>
          <div className="mb-6">
            <label className="block text-gray-700 text-sm font-bold mb-2">
              Senha:
            </label>
            <input
              className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
              type="password"
              name="password"
              autoComplete="current-password"
            />
          </div>
          <div className="flex items-center justify-between">
            <input
              className="bg-sky-700 hover:bg-sky-900 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline cursor-pointer"
              type="submit"
              value="Criar Conta"
            />
          </div>
        </form>
      )}
    </div>
  );
};

export default LoginPage;
