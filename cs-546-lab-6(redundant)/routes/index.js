const aboutRoutes = require("./about");
const eduRoutes = require("./educations");
const storiesRoutes = require("./stories");

const constructorMethod = (app) => {
    app.use("/about", aboutRoutes);
    app.use("/education", eduRoutes);
    app.use("/story", storiesRoutes);

    app.use("*", (req, res) => {
        res.status(404).json({error: "Not found"});
    });
};

module.exports = constructorMethod;