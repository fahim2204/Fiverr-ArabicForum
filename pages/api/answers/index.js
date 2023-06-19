import Question from "../../../model/question";
import { validateToken } from "../../../middleware/auth";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        await Question.AddAnswer(req.body.answer, req.body.id);
        res
          .status(201)
          .json({ success: true, msg: "Question Answer Success!!" });
      } catch (err) {
        res.status(500).json({ error: err, msg: "Something wrong!!" });
      }
      break;
    default:
      res.status(405).json({ success: false, msg: "Bad Request" });
      break;
  }
};
