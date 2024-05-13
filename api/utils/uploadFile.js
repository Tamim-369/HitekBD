import multer from "multer";
import path from "path";

// Set up multer to handle file uploads
const upload = multer({
  storage: multer.diskStorage({
    destination: function (req, file, cb) {
      cb(null, "api/uploads/"); // Specify the destination folder
    },
    filename: function (req, file, cb) {
      const extname = path.extname(file.originalname);
      // Generate a unique filename using the current timestamp
      cb(null, Date.now() + "-" + file.originalname);
    },
  }),
});

export default upload;
