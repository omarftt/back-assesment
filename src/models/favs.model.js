import {Schema,model} from 'mongoose';

const favsSchema = new Schema({
    title: {
        type:String,
        required: true,
    },
    description: {
        type:String,
        required: false,
        default: "",
    },
    link: {
        type:String,
        required: false,
    },
})

export default model('Fav',favsSchema)