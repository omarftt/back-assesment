import {Schema,model} from 'mongoose';

const favsSchema = new Schema({
    title: {
        type:String,
        require: true,
    },
    description: {
        type:String,
        require: false,
        default: "",
    },
    link: {
        type:String,
        require: false,
    },
})

export default model('Fav',favsSchema)