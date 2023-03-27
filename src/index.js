const express = require('express')
const app = express()
const bodyParser = require("body-parser");
const port = 3000
app.use(express.urlencoded());

// Parse JSON bodies (as sent by API clients)
app.use(express.json());


app.use(bodyParser.urlencoded({ extended: false }))

app.use(bodyParser.json())
// your code goes here

app.get("/", (req, res) => {
    res.send("Hello json");
});

function calculate(url, num1, num2) {
    var outputData = {};

    if (isNaN(parseInt(num1)) || isNaN(parseInt(num2))) {
        return {
            status: "Error",
            message: "Invalid data types",
        };
    }
    if (url === "add") {
        outputData = {
            status: "success",
            message: "The Addition of two Numbers",
            result: num1 + num2,
        };
    } else if (url === "sub") {
        return (outputData = {
            status: "success",
            message: "The Substraction of two Numbers",
            result: num1 - num2,
        });
    } else if (url === "multiply") {
        outputData = {
            status: "success",
            message: "The Multiplication of two Numbers",
            result: num1 * num2,
        };
    } else if (url === "divide") {
        if (num2 === 0) {
            outputData = {
                status: "Error",
                message: "Cannot divide by zero",
                result: "------",
            };
        } else {
            outputData = {
                status: "success",
                message: "The dividion of two Numbers",
                result: num1 / num2,
            };
        }
    }
    if (num1 < -1000000 || num2 < -1000000 || outputData.result < -1000000) {
        outputData.message = "Underflow";
    } else if (num1 > 1000000 || num2 > 1000000 || outputData.result > 1000000) {
        outputData.message = "overflow";
    }

    return outputData;
}

// post Methods

app.post("/add", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const output = calculate(req.url, num1, num2);
    res.json(output);
});

app.post("/sub", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const output = calculate(req.url, num1, num2);
    res.json(output);
});

app.post("/multiply", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const output = calculate(req.url, num1, num2);
    res.json(output);
});

app.post("/divide", (req, res) => {
    const num1 = req.body.num1;
    const num2 = req.body.num2;
    const output = calculate(req.url, num1, num2);
    res.json(output);
});


app.listen(port, () => console.log(`App listening on port ${port}!`))

module.exports = app;