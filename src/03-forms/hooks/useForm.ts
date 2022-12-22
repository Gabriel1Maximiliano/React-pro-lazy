
import React, { useState } from 'react'

export const useForm = <T>(InitialValues:T) => {

    const [formData, setFormData] =   useState(InitialValues)

   

    const handleFromData = (ev:React.ChangeEvent<HTMLInputElement>) => {
        ev.preventDefault();
       setFormData({
        ...formData,
        [ev.target.name]:ev.target.value
       })
    }


    const onSubmit = (ev:React.FormEvent<HTMLFormElement>) => {
        ev.preventDefault();
      console.log(formData)   
    }
  return {
    //properties
    ...formData,
    setFormData,
    //methods
    onSubmit,
    handleFromData

  }
}

