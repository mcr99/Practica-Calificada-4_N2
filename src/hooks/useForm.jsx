import { useState } from "react"


function useForm () {
    const [form, setForm] = useState({search:""})
    function handleChange(e) {
        setForm({...form, search: e.target.value})
    }
    
    return{form, handleChange}
}

export default useForm