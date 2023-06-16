import User from "../../model/user";
import { validateToken } from "../../middleware/auth";


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
