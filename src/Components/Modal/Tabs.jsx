import { useState } from "react";

const LoginPage = () => {
  const [tab, setTab] = useState("login");

  return (
    <div>
      <div className="tabs flex mb-4">
        <button
          className={`tab w-1/2 py-2 px-4 ${
            tab === "login" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => setTab("login")}
        >
          Login
        </button>
        <button
          className={`tab w-1/2 py-2 px-4 ${
            tab === "register"
              ? "bg-black text-white"
              : "bg-white text-black"
          }`}
          onClick={() => setTab("register")}
        >
          Criar Conta
        </button>
      </div>

      <div className="w-screen md:w-full max-w-md mx-auto">
        {tab === "login" && (
          <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <div>
              <p className="text-xs italic mb-5">
                Digite seu email e senha para acessar sua conta.
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm mb-2"
                for="username"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="username"
                type="text"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm mb-2"
                for="password"
              >
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="•••••••"
              />
            </div>
            <div className="mb-6 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input className="leading-tight" type="checkbox" id="remember"/>
                <label htmlFor="remember">Lembrar de mim</label>
              </div>
              <a
                className="font-medium underline underline-offset-4 hover:text-gray-500"
                href="#"
              >
                Esqueceu a senha?
              </a>
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black hover:bg-blue-900 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Entrar
              </button>
              
            </div>
          </form>
        )}

        {tab === "register" && (
          <form className="bg-white shadow-md px-8 pt-6 pb-8 mb-4">
            <p className="text-xs italic mb-4">
                Preencha o formulário abaixo para registrar uma nova conta.
              </p>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="name"
              >
                Nome
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="name"
                type="text"
                placeholder="Seu nome"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="email"
              >
                Email
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="email"
                type="text"
                placeholder="email@example.com"
              />
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="password"
              >
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="•••••••"
              />
            </div>
            <div className="mb-6">
              <label
                className="block text-gray-700 text-sm font-bold mb-2"
                for="confirm-password"
              >
                Confirmar Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="confirm-password"
                type="password"
                placeholder="•••••••"
              />
            </div>
            <div className="flex items-center justify-between">
              <button
                className="bg-black hover:bg-blue-900 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="button"
              >
                Criar Conta
              </button>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
