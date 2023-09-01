import multer from "multer";
import path from "path";

const upload = multer({
  storage: multer.diskStorage({
    destination(req, file, cb) {
      console.log(req);
      console.log("-----hello world");
      cb(null, "uploads/");
    },
    filename(req, file, cb) {
      /**확정자 이름*/
      const ext = path.extname(file.originalname);
      console.log("profile image profile image");
      cb(null, path.basename(file.originalname, ext) + Date.now() + ext);
    },
  }),
  limits: { fieldSize: 2 * 1024 * 1024 },
});

export default upload;
