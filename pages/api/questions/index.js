import Question from "../../../model/question";
import { validateToken } from "../../../middleware/auth";


export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "GET":
      try {
        const users = await Question.GetAll();
        const newData = users.map(({ password, token, ...rest }) => rest);
        res.status(200).send(newData);
      } catch (error) {
        res.status(500).send(error);
      }
      break;
    case "POST":
      try {
        await Question.AddQuestion(req.body);
        res
          .status(201)
          .json({ success: true, msg: "Question Assigned Success!!" });
      } catch (err) {
        res.status(500).json({ error: err, msg: "Something wrong!!" });
      }
      break;
    default:
      res.status(405).json({ success: false, msg: "Bad Request" });
      break;
  }
};
