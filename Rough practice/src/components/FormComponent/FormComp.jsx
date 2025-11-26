import React from 'react'
import { useForm } from "react-hook-form"
import './FormComp.css'

const FormComp = () => {
    const {
        register,
        handleSubmit,
        watch,
        formState: { errors },
    } = useForm()

    function afterSubmit(data) {
        console.log("Submitting the form", data);

    }

    return (
        <div className='formStyle'>
            <h3>Try this Form</h3>
            <div className="mt-3">
                <form onSubmit={handleSubmit(afterSubmit)}>
                    <div className='formRow'>
                        <label>Name:
                            <br />
                            <input autoComplete='off'
                                className={errors.name ? "error-box" : ""}
                                {...register("name",
                                    {
                                        required: {
                                            value: true,
                                            message: "Name is required"
                                        },
                                        maxLength: 20,
                                        minLength: {
                                            value: 3,
                                            message: "Minimum length is 3"
                                        }
                                    })} />

                            <div className="errorBox">
                                {errors.name && <p className='error-msg'>{errors.name.message}</p>}
                            </div>
                        </label>
                    </div>
                    <div className='formRow'>
                        <label>Age:
                            <br />
                            <input autoComplete='off'
                                {...register("age", { min: 18, max: 99 })} />
                        </label>
                    </div>
                    <div className="submit">
                        <input type='submit' />
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormComp
