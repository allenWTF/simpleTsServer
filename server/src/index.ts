import app from "./NetworkLayer";
const PORT = 3000;

app.listen(PORT, () => {
    console.log("REST server started on port " + PORT);
});