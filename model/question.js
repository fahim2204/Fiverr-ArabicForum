import pool from "../lib/dbConnect.js";

export default {
  GetAll: async () => {
    const [rows] = await pool.query("SELECT * FROM questions");
    return rows;
  },

  GetByQuestionId: async (id) => {
    const [rows] = await pool.query("SELECT * FROM questions WHERE id = ?", [
      id,
    ]);
    return rows[0];
  },

  GetByQuestionByInstructorIdAnswered: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM questions WHERE fkUserId = ? AND isAnswered = 1",
      [id]
    );
    return rows;
  },

  GetByQuestionByInstructorIdPending: async (id) => {
    const [rows] = await pool.query(
      "SELECT * FROM questions WHERE fkUserId = ? AND isAnswered = 0",
      [id]
    );
    return rows;
  },

  AddQuestion: async (question) => {
    const [result] = await pool.query("INSERT INTO questions SET ?", question);
    return result.insertId;
  },

  Update: async (id, user) => {
    await pool.query("UPDATE questions SET ? WHERE id = ?", [user, id]);
  },

  Delete: async (id) => {
    await pool.query("DELETE FROM questions WHERE id = ?", [id]);
  },
};
