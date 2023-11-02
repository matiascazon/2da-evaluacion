import React, { useEffect, useState } from 'react'

const useForm = (validate,initialForm) => {
    const [form,setForm] = useState(initialForm)
    const [errors,setErrors] = useState({})
    const [loading,setLoading] = useState(false)

    const handleChange = (e) => {
        const {name,value} = e.target

        setForm({
            ...form,
            [name] : value
        })
    }

    const handleBlur = (e) => {
        handleChange(e)
        setErrors(validate(form))
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        setErrors(validate(form))

        if(Object.keys(errors).length === 0){
            setLoading(true)
            setTimeout(() => {
                setLoading(false)
                setForm(initialForm)
                return alert("Formulario enviado")
            },3000)
        }else{
            return alert("error")
        }

        setErrors(validate(form))

    }

    useEffect(() => {
        setErrors(validate(form))
    },[loading])

    return {
        form,
        errors,
        loading,
        handleBlur,
        handleChange,
        handleSubmit
    }

}

export default useForm
