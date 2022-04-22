import {Schema,model} from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    email: {
        type:String,
        required: true,
    },
    password: {
        type:String,
        required: true,
        default:"",
    },
    ownList: [{
        type: Schema.Types.ObjectId ,
        ref: 'ListFavs',
        required : false,
    }]
})


export default model('User',userSchema)