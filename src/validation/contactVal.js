import {object,string} from 'yup'

const contactVal = object(
    {
        name:string().required(),
        email:string().required(),
        subject:string().required(),
        message:string().required()
    }
)

export default contactVal




