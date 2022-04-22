import {Schema,model} from 'mongoose';

const listFavsSchema = new Schema({
    name: {
        type:String,
        required: true,
    },
    favs:[{
        type: Schema.Types.ObjectId ,
        ref: 'Fav',
        required : false,
    }]
})

export default model('ListFavs',listFavsSchema)