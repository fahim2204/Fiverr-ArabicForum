import pool from "../lib/dbConnect.js";

export default {
  GetAll: async () => {
    const [rows] = await pool.query("SELECT * FROM questions");
    return rows;
  },

  GetByUserId: async (id) => {
    const [rows] = await pool.query("SELECT * FROM questions WHERE fkUserId = ?", [id]);
    return rows;
  },

  GetByUsername: async (username) => {
    const [rows] = await pool.query("SELECT * FROM questions WHERE username = ?", [
      username,
    ]);
    return rows[0];
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
