let users = [{ id: 1, name: "Kunj Maheshwari" }];

const getUsers = (req, res) => res.json(users);
const addUser = (req, res) => {
  const { name } = req.body;
  if (!name) return res.status(400).json({ error: "Name is required" });
  const newUser = { id: users.length + 1, name };
  users.push(newUser);
  res.status(201).json(newUser);
};
const deleteUser = (req, res) => {
  const userId = parseInt(req.params.id);
  users = users.filter(user => user.id !== userId);
  res.status(200).json({ message: "User deleted successfully" });
};

module.exports = { getUsers, addUser, deleteUser };