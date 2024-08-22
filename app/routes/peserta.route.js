module.exports = (app) => {

    const peserta = require("../controllers/peserta.controller")

    let router = require("express").Router()

    

    router.post("/", peserta.create)

    router.get("/", peserta.readAll)

    router.get("/:id", peserta.readById)

    router.put("/:id", peserta.update)

    router.delete("/:id", peserta.delete)

  

    app.use("/api/peserta" , router)
}
