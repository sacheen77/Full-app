exports.getUsers = (req, res) => {
  res.json([
    { id: 1, name: "sacheen" },
    { id: 2, name: "patil" }
  ]);
};
