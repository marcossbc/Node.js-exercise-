import cloudinary from "../utils/cloudinary.js";
import user from "../modules/User.js";
export const uploadImage = async (req,res, next) => {
    if(!req.file){
        return res.status(400).json({message: "No file uploaded"})


    }

    const stream = cloudinary.uploader.upload_stream(
        {folder:"DUGSIIYE", resource_type: "auto"},
      async (error, result) => {
            if(error){
                return next(error)
            }
            await user.findByIdAndUpdate(req.user._id, {profile: result.secure_url})
            res.status(200).json({
                 success:true,
                fileUploaded: result.secure_url
            })
        }
    )

    stream.end(req.file.buffer)
}