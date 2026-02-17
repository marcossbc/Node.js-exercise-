import user from "../modules/User.js";
import { generateToken } from "../utils/generateToken.js";


 export const registers = async (req, res, next) => {
    let { name, email, password, role, profile } = req.body;

    try{
        email = email.toLowerCase();
        const existingUser = await user.findOne({
            email
        })
        if(existingUser) {
            return res.status(401).json({message:"email horey ayaa loo isticamley wlle"})
        }

          const newUser = await user.create({ name, email, password, role, profile });
        
            const token = generateToken(newUser._id);
            res.status(201).json({ token });

    }catch(err) {
        console.log(err)
        next()

    }

}


export const logine = async (req,res, next) => {
    
    let {email, password} = req.body;

    try{
        email = email.toLowerCase();
        const existingUser = await user.findOne({
            email
        })
        if(!existingUser || !(await existingUser.comparePassword(password))) {
            return res.status(401).json({message:"email ama passwordkaage wlle waa khalad"})
        }

         const token = generateToken(existingUser._id);
            res.json({ token });

    }catch(err){
        console.log(err)
        next()

    }

}
