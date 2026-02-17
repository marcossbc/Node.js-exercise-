// import  jwt from "jsonwebtoken";

// import user from "../modules/User.js";

// export const protected = async (req,res,next) => {
//     const authHeader = req.headers.authorization?.split(" ")[1];

//     console.log("tokan info", authHeader)
//     if(!authHeader){
//         return res.status(401).json({message: "no token provided"})
//     }

//     try{
//         const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);

//         req.user = await user.findById(decoded.id).select("-password");
//         next()
//         console.log("decoded info", decoded)

//     }catch(err){
//         res.status(401).json({message: "invalid token"})

//     }


// }

import jwt from "jsonwebtoken"
import user from "../modules/User.js"

 export const protactedRoute = async (req,res,next) => {
    const authHeader = req.headers.authorization?.split(" ")[1];
    console.log("tokan info", authHeader)
    if(!authHeader){
        return res.status(401).json({message :"wax tokan ah lama heln"})
       
    }
    try{
        const decoded = jwt.verify(authHeader, process.env.JWT_SECRET);
        req.user = await user.findById(decoded.id).select("-password");
        next()
        // console.log("decoded info", decoded)

    }catch(err){
        res.status(401).json({message:"invalid token "})

    }
}
