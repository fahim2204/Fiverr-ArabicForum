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

      cb(null, newFilename);
    },
  }),
});

export default async (req, res) => {
  const { method } = req;
  const { userId } = req.query;

  switch (method) {
    case "GET":
      try {
        const user = await User.GetByUserId(userId);
        if (!user) {
          res.status(404).json({});
          return;
        }
        const { password, token, ...userData } = user;
        res.status(200).json(userData);
      } catch (error) {
        res.status(500).send(error);
      }
      break;
    case "DELETE":
      try {
        await User.Delete(userId);
        res
          .status(200)
          .json({ success: true, msg: "User deleted successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
