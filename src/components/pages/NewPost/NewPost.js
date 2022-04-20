import React from 'react'
import { useState } from 'react'
import { useForm, FormProvider } from 'react-hook-form'
import { createPost } from '../../../services/PostsService'
import { useNavigate } from "react-router-dom"
import { useAuthContext } from "../../../contexts/AuthContext"
import InputGroup from '../../InputGroup/InputGroup'

const NewPost = () => {
    const [isSubmitting, setIsSubmitting] = useState(false)
    const [errors, setErrors] = useState(false)
    const navigate = useNavigate()
    const { user, getUser } = useAuthContext()

    const methods = useForm();

    const onSubmit = methods.handleSubmit((data) => {
        const { description , title} = data

        if (!description || !title) {
            setErrors(true)
        } else {
            createPost({...data, user})
            .then((post) => {
                getUser()
                navigate('/profile')
            })
            .catch(err => {
                setErrors(err?.response?.data?.errors)
            })
            .finally(() => {
                setIsSubmitting(false)
            })
        }
    });

    return(
        <div>
             <FormProvider {...methods}>
      <div className="mt-4">
        <h1 className="mb-4">Upload your song</h1>
        {errors && <div className="alert alert-dark" role="alert">Check all fields!</div>}
        <form onSubmit={onSubmit}>
          <InputGroup
            label="Title"
            id="title"
            register={methods.register}
            type="text"
          />
          <InputGroup
            label="Description"
            id="description"
            register={methods.register}
            type="text"
          />
          <InputGroup
            label="image"
            id="image"
            register={methods.register}
            type="text"
          />
          <InputGroup
            label="Genre"
            id="genre"
            register={methods.register}
            type="text"
          />
         
          <button className={`btn btn-${isSubmitting ? 'secondary' : 'primary'}`}>{isSubmitting ? 'Creating Post...' : 'Submit'}</button>
        </form>
      </div>
    </FormProvider>

        </div>
    )
}

export default NewPost