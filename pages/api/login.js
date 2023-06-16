import User from "../../model/user";
import { validateToken } from "../../middleware/auth";
import { compare } from "bcryptjs";
const jwt = require("jsonwebtoken");

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        const user = await User.GetByUsername(req.body.username);

        if (!user) {
          return res
            .status(401)
            .json({ errors: { username: "User not found" } });
        }

        const checkPass = await compare(req.body.password, user.password);

        if (!checkPass) {
          return res
            .status(401)
            .json({ errors: { password: "Password doesn't match" } });
        }

        // console.log(isTokenExpired(user.token));
        // const token = user.token ? user.token : generateJWT(user);
        const token = generateJWT(user);

        // delete req.body.password;

        const updatedUser = await User.Update(user.id, { token });

        return res.status(200).json({
          success: true,
          msg: "Login success!!",
          token: token,
        });
      } catch (err) {
        return res.status(400).send(err);
      }

    default:
      res.status(405).json({ success: false, msg: "Bad Request" });
      break;
  }

  function generateJWT(user) {
    return jwt.sign({ username: user.username }, "2204", {
      expiresIn: "60days",
    });
  }
  const isTokenExpired = (token) => {
    try {
      const decodedToken = jwt.verify(token, "2204");
      return false; // Token is valid
    } catch (err) {
      if (err instanceof jwt.TokenExpiredError) {
        return true; // Token has expired
      } else {
        return false; // Token is invalid for some other reason
      }
    }
  };
  
  
};
