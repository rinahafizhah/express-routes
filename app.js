const express = require("express")

const app = express()

app.use("/books", require("./routes/books"))

app.listen(3000, () => console.log(3000))