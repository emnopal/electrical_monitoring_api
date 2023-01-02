import express from "express";

const app = express();
app.set('view engine', 'ejs');

app.get("/", async (req, res) => {
	res.render('pages/index', {
        output: output
    });
});

app.listen(3000, () => {
	console.log("Server is up on port 3000");
});
