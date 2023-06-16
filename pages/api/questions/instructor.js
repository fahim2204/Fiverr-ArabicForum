import Question from "../../../model/question";

export default async (req, res) => {
  const { method } = req;

  switch (method) {
    case "POST":
        const instructorId = req.body.instructorId;
        const mode = req.body.mode;
        if(mode === 0){
            try {
              const question = await Question.GetByQuestionByInstructorIdPending(instructorId);
              if (!question) {
                res.status(404).json({});
                return;
              }
              res.status(200).json(question);
            } catch (error) {
              res.status(500).send(error);
            }
        }else{
            try {
              const question = await Question.GetByQuestionByInstructorIdAnswered(instructorId);
              if (!question) {
                res.status(404).json({});
                return;
              }
              res.status(200).json(question);
            } catch (error) {
              res.status(500).send(error);
            }

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
