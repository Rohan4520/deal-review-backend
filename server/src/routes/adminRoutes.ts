import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  const { secret } = req.body;

  if (secret === process.env.ADMIN_SECRET) {
    return res.json({ success: true });
  }

  return res.status(401).json({ message: "Invalid secret" });
});

export default router;
