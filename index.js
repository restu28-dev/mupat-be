const express = require("express")
const cors = require("cors")

const app = express();


app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const db = require("./app/models")
db.sequelize.sync()

// routes
app.get("/test", (req, res) => {
    res.json({ message: "App started" });
});

// secured routes
require("./app/routes/peserta.route")(app)
require("./app/routes/halaman_admin.route.js")(app)
require("./app/routes/kategori.route")(app)
require("./app/routes/peserta.route.js")(app)
require("./app/routes/produk.route")(app)
require("./app/routes/transaksi.route")(app)  
require("./app/routes/web.js")(app)
require("./app/routes/transaksi_diantar.route.js")(app)
require("./app/routes/transaksi_dijemput.route.js")(app)
require("./app/routes/detail_transaksi.route.js")(app)
const PORT = process.env.PORT || 8003;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}.`);
});