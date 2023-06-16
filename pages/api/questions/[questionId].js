import Question from "../../../model/question";
import { validateToken } from "../../../middleware/auth";

export default async (req, res) => {
  const { method } = req;
  const { questionId } = req.query;

  switch (method) {
    case "GET":
      try {
        const video = await Question.GetByQuestionId(questionId);
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
        await Question.Delete(questionId);
        res
          .status(200)
          .json({ success: true, msg: "Question deleted successfully" });
      } catch (err) {
        res.status(500).json({ error: err.message });
      }

      break;
    default:
      res.status(405).json({ success: false, msg: "Bad Request" });
      break;
  }
};
