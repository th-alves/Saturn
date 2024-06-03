import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";

const LoginPage = () => {
  const [tab, setTab] = useState("login");
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    console.log(data);
  };

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
            tab === "register" ? "bg-black text-white" : "bg-white text-black"
          }`}
          onClick={() => setTab("register")}
        >
          Criar Conta
        </button>
      </div>

      <div className="w-screen md:w-full max-w-md mx-auto">
        {tab === "login" && (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <div>
              <p className="text-xs italic mb-5">
                Digite seu email e senha para acessar sua conta.
              </p>
            </div>
            <div className="mb-4">
              <label
                className="block text-black text-sm mb-1"
                htmlFor="username"
              >
                Email
              </label>
              <input
                className={`shadow ${
                  errors.emailLogin ? "border-red-500" : "border-gray-300"
                } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="emailLogin"
                type="email"
                placeholder="email@example.com"
                {...register("emailLogin", {
                  required: true,
                  validate: (value) => validator.isEmail(value),
                })}
              />
              {errors?.emailLogin?.type === "required" && (
                <p className="text-red-400 mt-1 ml-1 italic text-sm">
                  Digite seu email.
                </p>
              )}
              {errors?.emailLogin?.type === "validate" && (
                <p className="text-red-400 mt-1 ml-1 italic text-sm">
                  Email inválido.
                </p>
              )}
            </div>
            <div className="mb-6">
              <label
                className="block text-black text-sm mb-1"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                id="password"
                type="password"
                placeholder="•••••••"
                minLength={6}
                maxLength={15}
                required
              />
            </div>
            <div className="mb-6 flex items-center justify-between text-sm">
              <div className="flex items-center gap-2">
                <input
                  className="leading-tight"
                  type="checkbox"
                  id="remember"
                />
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
                onClick={() => handleSubmit(onSubmit)()}
                className="bg-black hover:bg-blue-900 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                type="submit"
              >
                Entrar
              </button>
            </div>
          </form>
        )}

        {tab === "register" && (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <p className="text-xs italic mb-4">
              Preencha o formulário abaixo para registrar uma nova conta.
            </p>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="name"
              >
                Nome
              </label>
              <input
                className={`shadow ${
                  errors.name ? "border-red-500" : "border-gray-300"
                } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="name"
                type="text"
                placeholder="Seu nome"
                {...register("name", { required: true })}
              />
              {errors?.name?.type === "required" && (
                <p className="text-red-400 mt-1 ml-1 italic text-sm">
                  Digite seu nome.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className={`shadow ${
                  errors.email ? "border-red-500" : "border-gray-300"
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
                <p className="text-red-400 mt-1 ml-1 italic text-sm">
                  Digite seu email.
                </p>
              )}
              {errors?.email?.type === "validate" && (
                <p className="text-red-400 mt-1 ml-1 italic text-sm">
                  Email inválido.
                </p>
              )}
            </div>
            <div className="mb-4">
              <label
                className="block text-gray-700 text-sm font-bold mb-1"
                htmlFor="password"
              >
                Senha
              </label>
              <input
                className={`shadow ${
                  errors.password ? "border-red-500" : "border-gray-300"
                } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                id="password"
                type="password"
                placeholder="•••••••"
                {...register("password", { required: true, minLength: 5 })}
              />
              {errors?.password?.type === "required" && (
                <p className="text-red-400 mt-1 ml-1 italic text-sm">
                  Digite sua senha.
                </p>
              )}
              {errors?.password?.type === "minLength" && (
                <p className="text-red-400 mt-1 ml-1 italic text-sm">
                  Sua senha precisa ter pelo menos 5 caracteres.
                </p>
              )}
            </div>

            <div className="flex items-center justify-between">
              <button
                onClick={() => handleSubmit(onSubmit)()}
                className="bg-black hover:bg-blue-900 text-white font-bold w-full py-2 px-4 rounded focus:outline-none focus:shadow-outline"
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
