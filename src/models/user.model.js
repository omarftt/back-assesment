import {Schema,model} from 'mongoose';
import bcrypt from 'bcryptjs'

const userSchema = new Schema({
    email: {
        type:String,
        require: true,
    },
    password: {
        type:String,
        require: true,
        default:"",
    },
    ownList: [{
        type: Schema.Types.ObjectId ,
        ref: 'ListFavs',
        require : false,
    }]
})


export default model('User',userSchema)