const { authJwt } = require("../middlewares");
const controller = require("../controllers/entry.controller");

module.exports = function(app) {
    app.use(function(req, res, next) {
        res.header(
            "Access-Control-Allow-Headers",
            "x-access-token, Origin, Content-Type, Accept"
        );
        next();
    })

    app.get("/api/getEntries", controller.getEntries);

    app.get("/api/getEntryById/:entryId", controller.getEntryById);

    app.post("/api/createEntry", 
    [authJwt.verifyToken],
    controller.createEntry);

    app.post("/api/updateEntry",
    [authJwt.verifyToken],
    controller.updateEntry);
}