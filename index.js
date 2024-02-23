import express from "express";
import { PORT, mongodbUrl } from "./config.js";
import { mongodbconnection } from "./conection.js";
import { router } from "./Routes/router.js";
import path from "path";
const __dirname = path.resolve();


const app = express();
app.use(express.static(path.join(__dirname, 'views')));
mongodbconnection(mongodbUrl).then((result) => {
    result = "MongoDB Connected";
    console.log(result)
}).catch((err) => {
    console.log("error: ", err)
});

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/url", router);

// app.set("view engine", "ejs");//telling express that i am using ejs as a view engine
// app.set("views", path.resolve("./views"))//tell the express that where are the views files
//app.use(express.static(path.join(__dirname, 'views')));
// app.use(express.static(path.join(__dirname, 'views', 'assets')));

app.set('view engine', 'ejs');
app.set('views', path.resolve('./views')); // Assuming your EJS files are in a 'views' directory
// Serve static files from the 'assets' directory
// Serve static files from the 'public' directory
app.get("/", async (req, res) => {
    res.render("home");
})

app.listen(PORT, (req, res) => {
    try {
        console.log(`Server running on PORT ${PORT}`)
    } catch (error) {
        console.log("Error: ", error)
    }
})

