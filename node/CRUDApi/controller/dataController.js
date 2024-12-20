const { getAllData, addData, getById, updateData, deleteData } = require("../models/dataModel");

const getData = async (req, res) => {
  try {
    const data = await getAllData();
    res.status(200).json({ success: true, data });
  } catch (err) {
    res.status(500).json({ success: false, message: err.message });
  }
};

const postData = async (req, res) => {
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and email are required" });
  }
  try {
    const newData = await addData(name, email);
    return res.status(201).json({ success: true, data: newData });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const getDataById = (req, res) => {
  const id = parseInt(req.params.id);
  const dataItem = getById(id);
  if (dataItem) {
    res.status(200).json({ success: true, data: dataItem });
  } else {
    res.status(404).json({ success: false, message: "Item not found" });
  }
};

const updateDataById = async (req, res) => {
  const id = parseInt(req.params.id);
  const { name, email } = req.body;
  if (!name || !email) {
    return res.status(400).json({ success: false, message: "Name and email are required" });
  }
  try {
    const updatedData = await updateData(id, name, email);
    return res.status(200).json({ success: true, data: updatedData });
  } catch (err) {
    return res.status(500).json({ success: false, message: err.message });
  }
};

const deleteDataById = (req, res) => {
  const id = parseInt(req.params.id);
  const deletedItem = deleteData(id);
  if (deletedItem) {
    res.status(200).json({ success: true, data: deletedItem });
  } else {
    res.status(404).json({ success: false, message: "Item not found" });
  }
};

module.exports = { getData, postData, getDataById, updateDataById, deleteDataById };
