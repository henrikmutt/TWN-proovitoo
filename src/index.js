const cors = require("cors")

//middleware
app.use(
    cors({
        origin: "http://localhost:5175/",
        methods: ["GET", "POST"],

    })
);