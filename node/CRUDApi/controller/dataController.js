const e = require("express");
const {getAllData, addData} = require("../models/dataModel")

const getData = (req, res)=>{
    const data = getAllData();
    res.status(200).json({success:true,data});
}

const postData = (req, res) =>{
  const {name, email} = req.body;
  if(!name || !email){
    return res.status(400).json({success:false})
  }
  else{
    const newData = addData(name,email);
    return res.status(201).json({success:true, data:newData});
  }
}

module.exports = {getData, postData}