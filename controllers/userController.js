const User = require("../models/userModel")
const Item = require("../models/itemModel")
const bcrypt = require("bcrypt")


const addUser = async(req, res) => {
  try{
    const user = await User.findOne({username: req.body.username})
    if(user){
      res.status(200).json({err: "Username already used, try with a different one"})
    }else{
      const user = await User.create(req.body)
      res.status(200).json(user)
    }
  }
  catch(e){
    res.json(e)
  }
}


const login = async(req, res) => {
  const {username, password} = req.body
  const user = await User.findOne({username: username})
  if(user){
    const validation = bcrypt.compare(password, user.password)
    if(validation){
      res.status(200).json(user)
      // ... possibly send token to the client ...
    }
    else{
      res.status(401).json({err: `Wrong password for ${username}`})
    }
  }
  else{
    res.status(404).json({err: "Can't find user with the provided username"})
  }
}


const addItem = async(req, res) => {
  const item = await Item.findById(req.body.id)
  if(item){
    const user = await User.findOne({username: req.body.username})
    if(user){
      const objId = user.items.find(i => i == req.body.id)
      // If the item with the provided id is already present ...
      if(objId){
        res.status(200).json({err: "Item already present, try with a different one"})
      // ... and if not
      }else{
        user.items.push(item)
        await user.save()
        res.status(200).json(item)
      }
    }
    else{
      res.status(404).json({err: "Can't find user with the provided username"})
    }
  }else{
    res.status(404).json({err: "Can't find item with the provided id"})
  }
}


module.exports = {
  addUser,
  login,
  addItem
}