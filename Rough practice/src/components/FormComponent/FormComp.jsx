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

    return (
        <div className='formStyle'>
            <h3>Try this Form</h3>
            <div className="mt-3">
                <form>
                    <div className='formRow'>
                        <label>Name:
                            <input autoComplete='off' {...register("name", { required: true, maxLength: 20, minLength: 3 })} />

                        </label>
                    </div>
                    <div className='formRow'>
                        <label>Age:
                            <input autoComplete='off' {...register("age", {maxLength: 2})} />
                        </label>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default FormComp
