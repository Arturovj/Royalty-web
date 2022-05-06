import React from "react";
import { useState } from "react";
import "./NewPost.scss";
import { useForm, FormProvider } from "react-hook-form";
import { createPost } from "../../../services/PostsService";
import { useNavigate } from "react-router-dom";
import { useAuthContext } from "../../../contexts/AuthContext";
import InputGroup from "../../InputGroup/InputGroup";
import toast from "react-hot-toast";

const NewPost = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errors, setErrors] = useState(false);
  const navigate = useNavigate();
  const { user, getUser } = useAuthContext();

  const methods = useForm();

  const onSubmit = methods.handleSubmit((data) => {
    // const { description , title} = data

    const bodyFormData = new FormData();

    const { image, ...rest } = data;

    Object.keys(rest).forEach((key) => {
      bodyFormData.append(key, rest[key]);
    });

    if (image[0]) {
      bodyFormData.append("image", image[0]);
    }

    if (!data.description || !data.title || !image) {
      setErrors(true);
    } else {
      toast.success("Successfully Uploaded!");
      createPost(bodyFormData)
        .then((post) => {
          getUser();
          navigate("/profile");
        })
        .catch((err) => {
          setErrors(err?.response?.data?.errors);
        })
        .finally(() => {
          setIsSubmitting(false);
        });
    }
  });

  return (
    <>
      

      <div>
      {/* <div className="background-register">
        <div className="shape"></div>
        <div className="shape"></div>
      </div> */}
        <FormProvider {...methods}>
          <div className="mt-4">
            
            {errors && (
              <div className="alert alert-dark" role="alert">
                Check all fields!
              </div>
            )}
            <form  className='register-form' onSubmit={onSubmit}>
            <h1 className="mb-4">Upload your song</h1>
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
                label="Genre"
                id="genre"
                register={methods.register}
                type="text"
              />

              <InputGroup
                label="User Image"
                id="image"
                register={methods.register}
                type="file"
                placeholder="Upload Image"
              />

              <button
                className={`register-btn btn-${isSubmitting ? "secondary" : "primary"}`}
              >
                {isSubmitting ? "Creating Post..." : "Submit"}
              </button>
            </form>
          </div>
        </FormProvider>
      </div>
    </>
  );
};

export default NewPost;
