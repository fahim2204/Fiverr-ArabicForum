import User from "../../../model/user";
import { validateToken } from "../../../middleware/auth";
import { hash } from "bcryptjs";

import multer from "multer";

export const config = {
  api: {
    bodyParser: false,
  },
};

const upload = multer({
  storage: multer.diskStorage({
    destination: "./public/image/instructor",
    filename: (req, file, cb) => {
      const username = req.body.username; // Assuming the username is sent in the request body
      const timestamp = Date.now(); // Get current timestamp
      // const randomId = uuidv4(); // Generate a unique random ID

      const fileExtension = file.originalname.split(".").pop(); // Get the file extension
      // const newFilename = `${username}-${timestamp}-${randomId}.${fileExtension}`;
      const newFilename = `${username}-${timestamp}.${fileExtension}`;
      req.body.profilePic = newFilename;
      // console.log("New File Name>>",newFilename)

      cb(null, newFilename);
    },
  }),
});

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await User.GetAll();
        const newData = users.map(({ password, token, ...rest }) => rest);
        res.status(200).send(newData);
      } catch (error) {
        res.status(500).send(error);
      }
      break;
    case "POST":
      upload.array("profilePic")(req, res, async (err) => {
        if (err) {
          res
            .status(501)
            .json({ error: `Sorry something happened! ${err}` });
        } else {
          try {
            req.body.password = await hash(req.body.password, 12);
            await User.RegisterUser(req.body);
            res
              .status(201)
              .json({ success: true, msg: "Registration success!!" });
          } catch (err) {
            res.status(400).json({ error: err, msg: "Something wrong!!" });
          }
        }
      });
      break;
    default:
      res.status(405).json({ success: false, msg: "Bad Request" });
      break;
  }
};
