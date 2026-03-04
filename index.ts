const axios = require("axios")
const config = require('dotenv')
const express = require('express')

const app = express()

const TELEGRAM_URI = `https://api.telegram.org/bot${process.env.TELEGRAM_API_TOKEN}/sendMessage`
app.use(express.json())
app.use(
    express.urlencoded({
        extended: true
    })
)

