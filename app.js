
const express = require("express")
const app = express()
const PORT = 3700
const bookRoutes = require("./routes/BookRoute")


app.use("/api/v1",bookRoutes)

app.listen(PORT, ()=>{
    console.log(`App Listening to: ${PORT}`)
})
