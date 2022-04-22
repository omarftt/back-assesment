import User from '../models/user.model';
import jwt from 'jsonwebtoken';
import config from '../config';
import bcrypt from 'bcryptjs';

export const signUp = async (req,res) => {

    const {email,password} = req.body
    const existedEmail = await User.findOne({email})
    if(existedEmail){
        return res.status(400).json({message:"Email already exists"})
    }

    const encryptPassword = await bcrypt.hash(password, 8);

    const newUser = new User({
        email,
        password : encryptPassword
    })
    const userSaved = await newUser.save()
    const token = jwt.sign({id:userSaved._id},config.SECRET,{expiresIn:86400})

    res.status(200).json(token)

}


export const signIn = async (req,res) => {
    const {email,password} = req.body

    if (!email || !password) {
        return res.status(400).json({message: "Enter an email and password"})
    }

    const user = await User.findOne({email})
    if(!user){
        return res.status(400).json({message:"User not found"})
    }

    const matchPassword = await bcrypt.compare(password,user.password)

    if(!matchPassword){
        return res.status(400).json({message:"Password incorrect"})
    }

    const token = jwt.sign({id:user._id},config.SECRET,{expiresIn:86400})

    res.status(200).json(token)
}