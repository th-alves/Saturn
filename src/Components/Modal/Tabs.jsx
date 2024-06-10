import { useState } from "react";
import { useForm } from "react-hook-form";
import validator from "validator";
import { Fade } from "react-awesome-reveal";
import "animate.css";

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
            <Fade cascade damping={0.1}>
              <div>
                <p className="text-xs italic mb-5">
                  Digite seu email e senha para acessar sua conta.
                </p>
              </div>
              <div className="mb-4">
                <label className="block text-black text-sm mb-1">Email</label>
                <input
                  className={`shadow ${
                    errors.emailLogin
                      ? "border-red-500 animate__animated animate__shakeX"
                      : "border-gray-300"
                  } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  type="email"
                  placeholder="email@example.com"
                  {...register("emailLogin", {
                    required: true,
                    validate: (value) => validator.isEmail(value),
                  })}
                />
                {errors?.emailLogin?.type === "required" && (
                  <p className="text-red-400 mt-1 ml-1 italic text-sm animate__shakeX">
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
                <label className="block text-black text-sm mb-1">Senha</label>
                <input
                  className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 mb-3 leading-tight focus:outline-none focus:shadow-outline"
                  type="password"
                  placeholder="•••••••"
                  minLength={6}
                  maxLength={15}
                  required
                />
              </div>
              <div className="mb-6 flex items-center justify-between text-sm">
                <div className="flex items-center gap-2">
                  <input className="leading-tight" type="checkbox" />
                  <label>Lembrar de mim</label>
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
            </Fade>
          </form>
        )}

        {tab === "register" && (
          <form
            onSubmit={(e) => e.preventDefault()}
            className="bg-white shadow-md px-8 pt-6 pb-8 mb-4"
          >
            <Fade cascade damping={0.1}>
              <p className="text-xs italic mb-4">
                Preencha o formulário abaixo para registrar uma nova conta.
              </p>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Nome
                </label>
                <input
                  className={`shadow ${
                    errors.nameRegister
                      ? "border-red-500 animate__animated animate__shakeX "
                      : "border-gray-300"
                  } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  type="text"
                  placeholder="Seu nome"
                  {...register("nameRegister", { required: true })}
                />
                {errors?.nameRegister?.type === "required" && (
                  <p className="text-red-400 mt-1 ml-1 italic text-sm">
                    Digite seu nome.
                  </p>
                )}
              </div>
              <div className="mb-4">
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Email
                </label>
                <input
                  className={`shadow ${
                    errors.emailRegister
                      ? "border-red-500 animate__animated animate__shakeX "
                      : "border-gray-300"
                  } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  type="email"
                  placeholder="email@example.com"
                  {...register("emailRegister", {
                    required: true,
                    validate: (value) => validator.isEmail(value),
                  })}
                />
                {errors?.emailRegister?.type === "required" && (
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
                <label className="block text-gray-700 text-sm font-bold mb-1">
                  Senha
                </label>
                <input
                  className={`shadow ${
                    errors.passwordRegister
                      ? "border-red-500 animate__animated animate__shakeX "
                      : "border-gray-300"
                  } appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline`}
                  type="password"
                  placeholder="•••••••"
                  {...register("passwordRegister", {
                    required: true,
                    minLength: 5,
                  })}
                />
                {errors?.passwordRegister?.type === "required" && (
                  <p className="text-red-400 mt-1 ml-1 italic text-sm">
                    Digite sua senha.
                  </p>
                )}
                {errors?.passwordRegister?.type === "minLength" && (
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
            </Fade>
          </form>
        )}
      </div>
    </div>
  );
};

export default LoginPage;
