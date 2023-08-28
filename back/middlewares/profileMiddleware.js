// 프로필 사진 기능 테스트용 파일입니다.

import multer from "multer";
// import storage from "../utils/uploads/storage";
// import FileAppender from "../utils/uploads/upload";

const upload = multer({ storage });

async function handleImageUpload(additionalReq, res, next) {
  /**  파일업로드 */
  const fileStrategy = "VALUE";

  const appender = new FileAppender(fileStrategy, additionalReq);

  try {
    await new Promise((resolve, reject) => {
      upload.single("profileImage")(additionalReq, res, function (err) {
        if (err instanceof multer.MulterError) {
          return reject(err);
        } else if (err) {
          return reject(err);
        }

        if (additionalReq.file) {
          const fileUrl = additionalReq.file.filename;

          appender.replacePlaceholder(additionalReq.file, {
            fieldname: additionalReq.file.fieldname,
            originalname: additionalReq.file.originalname,
            encoding: additionalReq.file.encoding,
            mimetype: additionalReq.file.mimetype,
            size: additionalReq.file.size,
            path: fileUrl,
          });
        }

        resolve();
      });
    });

    next();
  } catch (error) {
    next(error);
  }
}

module.exports = { handleImageUpload };