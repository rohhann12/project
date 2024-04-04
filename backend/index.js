const express = require('express');
const app = express();
const adminRouter = require("./routes/admin")
const userRouter = require("./routes/user");
const bodyParser = require('body-parser');
// Middleware for parsing request bodies
app.use(bodyParser.json());
app.use(express.json());
app.use("/admin", adminRouter)
app.use("/user", userRouter)


const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
