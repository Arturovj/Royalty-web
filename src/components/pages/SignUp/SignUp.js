import React, { useState } from 'react';
import './SignUp.scss'
import { useForm } from "react-hook-form"
import { yupResolver} from "@hookform/resolvers/yup"
import InputGroup from '../../InputGroup/InputGroup';
import * as yup from "yup";
import { register as registerRequest } from '../../../services/AuthService'
import { useNavigate } from 'react-router-dom';


const schema = yup.object({
  email: yup.string().email().required(),
  name: yup.string().required(),
  password: yup.string().min(9, 'Password need to be 9 characters length').required(),
}).required();




export default function SignUp() {
  const [backErrors, setBackErrors] = useState({})
  const [isSubmitting, setIsSubmitting] = useState(false)
  const navigate = useNavigate()
  const { register, handleSubmit, formState:{ errors}} = useForm({
    resolver: yupResolver(schema)
  });

const onSubmit = data => {
  setBackErrors({})
  setIsSubmitting(true)

  registerRequest(data)
  .then((user) => {
    navigate('/login')
  })
  .catch(err => {
    setBackErrors(err?.response?.data?.errors)
  })
  .finally(() => {
    setIsSubmitting(false)
  })

};

return( 
  <div className='SignUp'>


<div className="background-register">
        <div className="shape"></div>
        <div className="shape"></div>
    </div>



    <form className='register-form' onSubmit={handleSubmit(onSubmit)}>
      
      
      <InputGroup
        label="Email"
        id="email"
        register={register}
        error={backErrors?.email || errors.email?.message}
        type="email"
        placeholder="EMAIL"
      />
     
     
       <InputGroup
        label="Name"
        id="name"
        register={register}
        error={backErrors?.name || errors.name?.message}
        placeholder="NAME"
      />
       <InputGroup
        label="Password"
        id="password"
        register={register}
        error={backErrors?.password || errors.password?.message}
        type="password"
        placeholder="PASSWORD"
      />


        <button className={`register-btn btn-${isSubmitting} ? 'secondary' : 'primary'`}>{isSubmitting ? 'Creating user...' : 'Submit'}</button>
    </form>

  </div>
)
 
}
