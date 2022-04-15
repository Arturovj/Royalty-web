import React, { useState } from "react";
import "./Login.scss";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import InputGroup from "../../InputGroup/InputGroup";
import * as yup from "yup";
import { login } from "../../../services/AuthService";
import { useNavigate } from "react-router-dom";

const schema = yup.object({
    email: yup.string().email().required(),
    password: yup.string().min(8).required(),
  })
  .required();

function Login() {
  const [error, setError] = useState();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const navigate = useNavigate();
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const onSubmit = (data) => {
    setError(undefined);
    setIsSubmitting(true);

    login(data)
      .then((response) => {
        console.log(response);
        navigate('/profile')
      })
      .catch((err) => {
        setError(err?.response?.data?.message);
      })
      .finally(() => setIsSubmitting(false));
  };

  return (
    <div className="Login">
      <h1>Login</h1>
      <div className="background-login">
        <div className="shape"></div>
        <div className="shape"></div>
      </div>
      <form className='login-form' onSubmit={handleSubmit(onSubmit)}>
      
      <InputGroup
        label="Email"
        id="email"
        register={register}
        error={errors.email?.message}
        type="email"
        placeholder="EMAIL"
      />
       <InputGroup
        label="Password"
        id="password"
        register={register}
        error={error || errors.password?.message}
        type="password"
        placeholder="PASSWORD"
      />


        <button className={`login-btn btn-${isSubmitting} ? 'secondary' : 'primary'`}>{isSubmitting ? 'Login...' : 'Submit'}</button>
    </form>

      
    </div>
  );
}

export default Login;

