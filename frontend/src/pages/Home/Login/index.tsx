import { useContext, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../../AuthContext";
import BaseButtom from "../../../components/BaseButtom";
import { getTokenData } from "../../../utils/auth";
import { requestBackendLogin } from "../../../utils/requests";
import { saveAuthData } from "../../../utils/storage";
import "./styles.css";

type FormData = {
  username: string;
  password: string;
};

const Login = () => {
  const navigate = useNavigate();
  const [hasError, setHasError] = useState<boolean>(false);
  const { setAuthContextData } = useContext(AuthContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = (formData: FormData) => {
    requestBackendLogin(formData)
      .then((response) => {
        setHasError(false);
        saveAuthData(response.data);
        setAuthContextData({
          authenticated: true,
          tokenData: getTokenData(),
        });
        navigate("/movies", { replace: true });
      })
      .catch(() => setHasError(true));
  };

  return (
    <div className="container-login">
      <h1>LOGIN</h1>
      {hasError && (
        <div className="alert alert-danger">
          Ocorreu um erro ao efetuar o login
        </div>
      )}
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="mb-4">
          <input
            {...register("username", {
              required: "Campo obrigatório",
              pattern: {
                value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                message: "Email inválido",
              },
            })}
            type="text"
            className={`form-control base-input ${
              errors.username && "is-invalid"
            }`}
            placeholder="Email"
            name="username"
          />
          <div className="invalid-feedback d-block">
            {errors.username?.message}
          </div>
        </div>
        <div className="mb-5">
          <input
            {...register("password", {
              required: "Campo obrigatório",
            })}
            type="password"
            className={`form-control base-input ${
              errors.username && "is-invalid"
            }`}
            placeholder="Senha"
            name="password"
          />
          <div className="invalid-feedback d-block">
            {errors.password?.message}
          </div>
        </div>
        <div>
          <BaseButtom text="FAZER LOGIN" />
        </div>
      </form>
    </div>
  );
};

export default Login;
