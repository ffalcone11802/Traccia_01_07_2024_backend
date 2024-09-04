const express = require("express")
const cors = require('cors')
const cookieParser = require("cookie-parser")
const mongoose = require("mongoose")
const collectionRoutes = require("./routes/collections")
const recommendationRoutes = require("./routes/recommendations")
const userRouter = require("./routes/users")
const {login} = require("./controllers/userController")

const path = "dbURI"

const app = express()
app.use(express.json())
app.use(cors())
app.use(cookieParser())

app.use("/api/collections", collectionRoutes)
app.use("/api/recommendations", recommendationRoutes)
app.use("/api/users", userRouter)
app.post("/api/login", login) // ... or /api/users/login ...

mongoose.connect(path).then(() => {
  console.log("database connected")
  app.listen(3000, () => {
      console.log("listening on port 3000")
  })
}).catch((err) => {
    console.log(err)
})