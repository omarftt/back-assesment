import {Schema,model} from 'mongoose';

const listFavsSchema = new Schema({
    name: {
        type:String,
        require: true,
    },
    favs:[{
        type: Schema.Types.ObjectId ,
        ref: 'Fav',
        require : false,
    }]
})

export default model('ListFavs',listFavsSchema)