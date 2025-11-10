import { useState } from "react"
import { useNavigate } from "react-router-dom"

const useFormData=()=>{
  const navigate = useNavigate()
  const [formData, setFormData] = useState({
    email: "",
    password: "",
    validatePassword: "",
    displayName: "",
    role: "",
  })

  const handleRegisterSubmit = ()=>{
    console.log(formData)
  }

  return {handleRegisterSubmit,setFormData,formData}
}

export default useFormData