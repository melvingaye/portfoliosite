
import {sendContactInfo} from '../apis/requests'

export function useContact(){
    const [values, setValues] = useState({name: '', phone: '', email: '', content: ''})

    const handleChange = e => {
       const {name, value} = e.target
       setValues({...values, [name]: value})


    }

    const handleSubmit = e =>{
        e.preventDefault();
        sendContactInfo(values)
    }

    return {handleChange, handleSubmit, values}
}