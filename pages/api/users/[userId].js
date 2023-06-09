import User from "../../../model/user";
import Video from "../../../model/video";

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
        const video = await Video.GetByUserId(userId);
        res.status(200).json({...userData,video});
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
