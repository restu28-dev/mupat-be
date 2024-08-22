const multer = require(`multer`);

const imageFilter = (req, file, cb) => {
  if (file.mimetype.startsWith("image")) {
    cb(null, true);
  } else {
    cb("Please upload only images.", false);
  }const multer = require("multer");

  
  var storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, __basedir + "/resource/static/assets/upload");
    },
    filename: (req, file, cb) => {
      cb(null, `${Date.now()}-bezkoder-${file.originalname}`);
    },
  });
  
  var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
  module.exports = uploadFile;
};

var uploadFile = multer({ storage: storage, fileFilter: imageFilter });
module.exports = uploadFile;