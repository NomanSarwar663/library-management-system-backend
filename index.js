const http = require("http");
const express = require("express");
const { app } = require("./app");
const server = http.createServer(app);
const cors = require("cors");

const { API_PORT } = process.env;
const port = process.env.PORT || API_PORT;

const authRoutes = require("./routes/auth.routes");
const bookRoutes = require("./routes/book.routes");
const bookActionRoutes = require("./routes/bookAction.routes");

app.use(express.json());
app.use(cors());

app.use(authRoutes);
app.use(bookRoutes);
app.use(bookActionRoutes);

server.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
