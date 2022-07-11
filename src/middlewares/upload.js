const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
  limits: {
    fileSize: 1000000,
  },

  fileFilter(req, file, cb) {
    if (!file.originalname.match(/\.(jpg|jpeg|png)$/)) {
      return cb(new Error('This file type is not supported'));
    }
    cb(null, true);
  },

  filename(req, file, cb) {
    cb(null, req.userId ? req.userId + path.extname(file.originalname) : Date.now() + path.extname(file.originalname));
  },
});

console.log("dirctory", __dirname, '/avatars');
const upload = multer({ storage });
module.exports = upload;