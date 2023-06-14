import User from "../../model/user";
import { validateToken } from "../../middleware/auth";
import { hash } from "bcryptjs";

import multer from "multer";

const Ajv = require("ajv");

const ajv = new Ajv({ allErrors: true, $data: true });

const userValidationSchema = {
  type: "anyOf",
  properties: {
    fullName: {
      type: "string",
      minLength: 3,
    },
    username: {
      type: "string",
      minLength: 3,
    },
    password: {
      type: "string",
      minLength: 6,
    },
  },
  required: ["fullName", "username", "password"],
  additionalProperties: true,
};

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

  switch (method) {
    case "GET":
      try {
        const users = await User.GetUsernameAndId();
        // const filteredUser = users.map(({ username, id }) => ({
        //   username,
        //   id,
        // }));
        res.status(200).send(users);
      } catch (error) {
        res.status(500).send(error);
      }
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
