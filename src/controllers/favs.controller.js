import ListFavs from '../models/listFavs.model';
import Fav from '../models/favs.model';


export const createFav = async (req,res) => {

    const currentList = await ListFavs.findById(req.params.listId);

    const {title,description,link} = req.body
    const newFav = new Fav({
        title:title,
        description:description, 
        link:link
    })
    const favSaved = await newFav.save()

    currentList.favs.push(favSaved)
    await currentList.save()

    res.status(201).json(favSaved)
}
