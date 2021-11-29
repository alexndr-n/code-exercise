require('dotenv').config();
const express = require("express");
const router = express.Router();
const { Transaction } = require("../../database/models")
const sequelize = require('sequelize')

router.get("/:id", async (req, res) => {
  try {
    const transactions = await Transaction.findAll({ where: { UserId: req.params.id }, raw: true})
    res.send(transactions)
  } catch (error) {
    console.log(error)
    res.status(500)
  }
})

router.get("/balance/:id", async (req, res) => {
    try {
        const transactions = await Transaction.findAll({ where: { UserId: req.params.id }, raw: true})
        const balance = transactions.reduce( function(a, b){
          return a + b['cent_amount'];
        }, 0);
        res.send({balance})
    } catch (error) {
        console.log(error)
        res.status(500)
    }
})

router.post("/", async (req, res) => {
  try {
    const transaction = await Transaction.create(req.body)
    res.send(transaction)
  } catch (error) {
    console.log(error)
    res.status(400).send('error')
  }
})

module.exports = router;