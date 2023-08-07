/* Create a Backend For Counter Web App with Api Endpoint for Managing Counter Using Express
• 7' send counter data as {counter:counter}
• '/increment' — increment counter by 1 and send in response latest data as {counter:counter}
• '/decrement' — decrement counter by 1 and send in response latest data as {counter:counter}
Note: Using Express is Mandatory for this Question */

import express from "express"

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended: true}))

class Counter{
    state = 0;
    getCounter(){
        return this.state
    }
    increment(){
        this.state++
    }
    decrement(){
        this.state--
    }
}

const counter = new Counter()

app.get("/", (req, res) => {
    res.status(200).json({counter: counter.state})
})

app.get('/increment', (req, res) => {
    counter.increment()
    res.status(200).json({counter: counter.state})
})

app.get("/decrement", (req, res) => {
    counter.decrement()
    res.status(200).json({counter: counter.state})
})

app.listen(3002, () => console.log("listning of port 3002"))