// import multer from 'multer';

// import { CloudinaryStorage } from 'multer-storage-cloudinary';
// import cloudinary from '../utils/cloudinary';



// const storage = new CloudinaryStorage({
//     cloudinary: cloudinary,
//     params: {
//         folder: 'DUGSIIYE',
//         allowed_formats: ['jpg', 'png', 'jpeg']
//     }
// })

// export const upload = multer({storage})

import multer from 'multer';


const storage = multer.memoryStorage()

export const upload = multer({
    storage,
    limits: {fileSize: 10 * 1024 * 1024}
})