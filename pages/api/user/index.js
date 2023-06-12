import User from "../../../model/user";
import { validateToken } from "../../../middleware/auth";
import { hash } from "bcryptjs";
const Ajv = require("ajv");

const ajv = new Ajv({ allErrors: true, $data: true });

const userValidationSchema = {
  type: "object",
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
      if (!ajv.validate(userValidationSchema, req.body)) {
        return res.status(400).json({ errors: ajv.errors });
      }
      req.body.password = await hash(req.body.password, 12);
      await User.RegisterUser(req.body)
        .then(() =>
          res.status(201).json({ success: true, msg: "Registration success!!" })
        )
        .catch((err) =>
          res.status(400).json({ error: err, msg: "Something wrong!!" })
        );
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
};
