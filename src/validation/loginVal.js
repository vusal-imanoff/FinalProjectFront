import * as yup from 'yup';
import {object,string} from 'yup'

const loginVal = object(
    {
        email:yup.string().email().matches(/^(?!.*@[^,]*,)/).required(),
        password:string().required().min(3),
    }
)

export default loginVal




