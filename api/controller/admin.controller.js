export const getAdmin = (req, res) => {
  if (req.query.password === process.env.ADMIN_PASSWORD) {
    if (req.query.name === process.env.ADMIN_NAME) {
      const session_number = Math.floor(Math.random() * 900000) + 100000;

      res.status(200).json({
        message: "Admin logged in successfully",
        session_number: session_number,
        name: req.query.name,
      });
    } else {
      res.status(400).json({ message: "Invalid name" });
    }
  } else {
    res.status(400).json({ message: "Invalid password" });
  }
};
