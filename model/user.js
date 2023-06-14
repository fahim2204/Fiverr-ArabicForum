import pool from "../lib/dbConnect.js";

export default {
  GetAll: async () => {
    const [rows] = await pool.query("SELECT * FROM users");
    return rows;
  },
  GetUsernameAndId: async () => {
    const [rows] = await pool.query("SELECT id, username FROM users");
    return rows;
  },

  GetByUserId: async (id) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE id = ?", [id]);
    return rows[0];
  },

  GetByUsername: async (username) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE username = ?", [
      username,
    ]);
    return rows[0];
  },

  GetByToken: async (token) => {
    const [rows] = await pool.query("SELECT * FROM users WHERE token = ?", [
      token,
    ]);
    return rows[0];
  },

  RegisterUser: async (user) => {
    const [result] = await pool.query("INSERT INTO users SET ?", user);
    return result.insertId;
  },

  Update: async (id, user) => {
    await pool.query("UPDATE users SET ? WHERE id = ?", [user, id]);
  },

  UpdatePassword: async (id, password) => {
    await pool.query("UPDATE users SET password = ? WHERE id = ?", [
      password,
      id,
    ]);
  },

  Delete: async (id) => {
    await pool.query("DELETE FROM users WHERE id = ?", [id]);
  },
};
