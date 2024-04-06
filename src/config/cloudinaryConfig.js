import { v2 as cloudinary } from "cloudinary";
import multer from "multer";
import { CloudinaryStorage } from "multer-storage-cloudinary";
import dotenv from "dotenv";
dotenv.config();

// const { CLOUDINARY_NAME, CLOUDINARY_KEY, CLOUDINARY_SECRET, FOLDER_NAME } =
//   process.env;

  cloudinary.config({ 
    cloud_name: 'dvnqhhw5m', 
    api_key: '354821882472991', 
    api_secret: 'GXcoIfk_3SUQ8lOI9-N7tjYmcYA' 
  });

// multer : store

const storage = new CloudinaryStorage({
  cloudinary,
  allowedFormats: ["jpg", "jpeg", "png"],
  params: {
    folder: "images",
  },
});

const uploadImage = multer({ storage });

export { uploadImage, cloudinary };
