import ListFavs from '../models/listFavs.model';
import User from '../models/user.model';

export const createListFavs = async (req,res) => {

    try{
        const {name,user} = req.body
        const emailToSearch = user.email
        const currentUser = await User.findOne({email:emailToSearch})

        const newListFavs = new ListFavs({
            name:name
        })
        const listFavsSaved = await newListFavs.save()

        currentUser.ownList.push(listFavsSaved)
        await currentUser.save()
        res.status(201).json(listFavsSaved)
        
    } catch(err){   
        console.log(err)
        res.status(500).json({message:err.message})
    }
    
}

export const getListFavs = async (req,res) => {
    try{
        const {user} = req.body
        const emailToSearch = user.email
        const currentUser = await User.findOne({email:emailToSearch})
        const listFavs = await ListFavs.find({_id: {$in: currentUser.ownList}}).populate('favs')
        console.log(listFavs)

        res.json({message:listFavs})
    }  catch(error){
        res.status(500).json({message:error})
    }   
    
}

export const getListFavById = async (req,res) => {
    try{
        const listFav = await ListFavs.findById(req.params.listId)
        res.status(200).json(listFav)
    } catch(error){
        res.status(500).json({message:error})
    }
}

export const deleteFavById = async (req,res) => {
    try{
        const listFav = await ListFavs.findByIdAndDelete(req.params.listId)
        res.status(200).json({message:"Fav deleted "} )
    } catch(error){
        res.status(500).json({message:error})
    }
}
