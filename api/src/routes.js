module.exports.load = (app) => {
    app.get("/clients", (req, res) => {
        res.send(require("../clients.mock.js"));
    });
};

