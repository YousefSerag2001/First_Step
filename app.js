const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(bodyParser.json())

let Orders = []

app.get("/orders" , function(req,res){
    res.json({Orders:Orders , Message:"Done"})
})


app.post("/orders" , function(req,res){
    Orders.push(req.body)
    res.json({Message:"Done Order Added Successfully"})
})


app.put("/orders" , async function(req,res){
    let { id , price } = req.body
    await Orders.find((ordr,index)=>{
        if(ordr.id === id) {
            Orders[index] = {id:ordr.id, price:price, description:ordr.description}
            return true
        }

    })
    res.json({Message:"Done Order Updated Successfully"})
})


app.delete("/orders" , async function(req,res){
     let { price } = req.body
    await Orders.find((ordr,index)=>{
        if(ordr.price === price) {
           Orders.splice(Orders[index],1)
            return true
        }
    })
    res.json({Message:"Done Order Updated Successfully"})
})


app.listen(2020)