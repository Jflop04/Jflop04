const express = require('express');
const cors = require('cors');
const app = express();
const mysql = require('mysql2/promise');
const port = 3001;
const bluebird = require('bluebird');
let connection; // variable para almacenar la conexión a la DB

// configura el servidor para recibir datos en formato json
app.use(express.json());
app.use(cors({ origin: true }));

app.set('port', process.env.PORT || port)

app.get("/get-products", async (request, response) => {
    const [rows, fields] = await connection.execute("SELECT * FROM products");
    console.log({ data: rows })
    response.json({ data: rows });
})

app.get("/get-user", async (req, res) => {
    const email = req.query.email;
    const [rows, fields] = await connection.execute(`SELECT * FROM users where email='${email}'`);
    console.log("Hola")
    res.json(rows[0])
})

app.post("/add-product", async (req, res) => {
    try {
        console.log(req.body)
        const { name, price, stock, description } = req.body;
        await connection.execute(`INSERT INTO products (name, price, stock, description) VALUES('${name}',${price}, ${stock}, '${description}')`);
        res.json({ status: "ok" })
    }
    catch (error) {
        console.log(error);
        res.json(error)
    }

})

app.put("/update-product", (req, res) => {
    const product = req.body;
    console.log(product.name)
    res.json(product)
})
app.delete("/delete-product", (req, res) => {
    const product = req.body;
    console.log(product.name)
    res.json(product)
})


app.listen(port, async () => {
    connection = await mysql.createConnection({
        host: 'localhost',
        user: 'root',
        password: '12345678',
        database: 'shop',
        Promise: bluebird
    });
    console.log("Server running on port: " + port);
});