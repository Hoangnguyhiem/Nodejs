import jwt  from "jsonwebtoken"
import User from "../models/user" 

const checkPermisson = async (req, res, next) => {
    const token = req.headers.authorization?.split(" ")[1];
    if(!token) {
        return res.status(401).json({
            message: "Not Author"
        })
    }

    const data = jwt.verify(token, "key");
    console.log(data)
    const user = await User.findById(data.id)
    if(!user) {
        return res.status(400).json({
            message: "Not Found"
        })
    }
    next()
}

export { checkPermisson };