import Video from "../../../model/user";
import { validateToken } from "../../../middleware/auth";

export default async (req, res) => {
  const { method } = req;
  const { userId } = req.query;

  switch (method) {
    case "GET":
      try {
        const video = await Video.GetByUserId(userId);
        if (!video) {
          res.status(404).json({});
          return;
        }
        res.status(200).json(video);
      } catch (error) {
        res.status(500).send(error);
      }
      break;
    case "DELETE":
      try {
        await Video.Delete(userId);
        res
          .status(200)
          .json({ success: true, msg: "User deleted successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

      break;
    default:
      res.status(405).json({ success: false, msg: "Bad Request" });
      break;
  }
};
