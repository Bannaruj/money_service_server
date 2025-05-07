const { PrismaClient } = require("@prisma/client");


const multer = require("multer");
const path = require("path");
const fs = require("fs");

const prisma = new PrismaClient();

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "images/users");
  },
  filename: (req, file, cb) => {
    cb(
      null,
      "user_" +
      Math.floor(Math.random() * Date.now()) +
      path.extname(file.originalname)
    );
  },
});

exports.uploadUser = multer({
  storage: storage,
  limits: {
    fileSize: 1000000,
  },
  fileFilter: (req, file, cb) => {
    const fileTypes = /jpeg|jpg|png/;
    const mimeType = fileTypes.test(file.mimetype);
    const extname = fileTypes.test(path.extname(file.originalname));
    if (mimeType && extname) {
      return cb(null, true);
    }
    cb("Error: Images Only");
  },
}).single("userImage");

exports.createUser = async (req, res) => {
  try {
    //? -----
    const result = await prisma.user_tb.create({
      //?  .create ใช้สำหรับเพิ่ม (insert) ข้อมูล
      data: {
        userFullname: req.body.userFullname,
        userName: req.body.userName,
        userBirthDate: req.body.userBirthDate,
        userPassword: req.body.userPassword,
        userImage: req.file
          ? req.file.path.replace("images\\users\\", "")
          : "",
      },
    });
    res.status(201).json({
      message: "OK",
      info: result,
    });
  } catch (error) {
    res.status(500).json({
      message: `พบปัญหาในการทำงาน: ${error}`,
    });
    console.log(`Error: ${error}`);
  }
};

exports.checkLogin = async (req, res) => {
  try {
    //? ----
    const result = await prisma.user_tb.findFirst({
      where: {
        userName: req.params.userName,
        userPassword: req.params.userPassword,
      },
    });
    if (result) {
      res.status(200).json({
        message: "Ok",
        info: result,
      });
    } else {
      res.status(404).json({
        message: "OK",
        info: result,
      });
    }
  } catch (error) {
    res.status(500).json({
      message: `พบปัญหาในการทำงาน: ${error}`,
    });
    console.log(`Error: ${error}`);
  }
};
