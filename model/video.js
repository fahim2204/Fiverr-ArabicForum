import pool from "../lib/dbConnect.js";

export default {
  GetAll: async () => {
    const [rows] = await pool.query("SELECT * FROM assign_video");
    return rows;
  },

  GetByUserId: async (id) => {
    const [rows] = await pool.query("SELECT * FROM assign_video WHERE fkUserId = ?", [id]);
    return rows[0];
  },

  GetByUsername: async (username) => {
    const [rows] = await pool.query("SELECT * FROM assign_video WHERE username = ?", [
      username,
    ]);
    return rows[0];
  },

  AssignVideo: async (user) => {
    const [result] = await pool.query("INSERT INTO assign_video SET ?", user);
    return result.insertId;
  },

  Update: async (id, user) => {
    await pool.query("UPDATE assign_video SET ? WHERE id = ?", [user, id]);
  },


  Delete: async (id) => {
    await pool.query("DELETE FROM assign_video WHERE id = ?", [id]);
  },
};
