import Users from "../models/user"
import { registerSchema } from "../schema/auth";
import bcryptjs from "bcryptjs"
import jwt from "jsonwebtoken"


export const Signup = async (req, res) => {
    try {
        const { username, email, password } = req.body
        const { error } = registerSchema.validate(req.body, { abortEarly: false })

        if (error) {
            const messages = error.details.map((message) => message.message)
            return res.status(400).json({ messages })
        }

        const data = await Users.findOne({ email });
        if (data) {
            return res.status(400).json({
                message: "Email da ton tai",
            })
        }

        const hashedPassword = await bcryptjs.hash(password, 10)
        const user = await Users.create({
            username,
            email,
            password: hashedPassword
        })

        res.status(200).json({...user.toObject(), password: undefined})
    } catch (error) {
        res.status(400).json({message: error.message})
    }
}

export const Signin = async (req, res) => {
    try {
        const {email, password} = req.body;

        const data = await Users.findOne({email})

        if(!data) {
            return res.status(404).json({
                message: "Tai khoan khong hop le",
            })
        }

        const checkPassword = await bcryptjs.compare(password , data.password);

        if(!checkPassword) {
            return res.status(404).json({
                message : "Not Found",
            })
        }

        const token = jwt.sign({id:data._id}, "key", {expiresIn: "1h"});

        res.status(200).json({
           user: {...data.toObject() ,password: undefined},token
        })
        
    } catch (error) {
        res.status(400).json({
            message: error.message,
        })
    }
}