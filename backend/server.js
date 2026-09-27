//Below code is only for testing ai, like
//ai is properly working or not:

/*    
require("dotenv").config()
const app=require("./src/app")
const connectToDB = require("./src/config/database")
const dns = require("dns")
dns.setServers([
    "1.1.1.1",
    "8.8.8.8",
])
const invokeGeminiAi = require("./src/services/ai.service")

connectToDB()
invokeGeminiAi()

app.listen(3000,()=>{
    console.log("Server is running on port : 3000")
})
*/










//below code is only for testing ai like it generate technical qn, behavioural qn, skill gaps and preparation plan in terminal or not:

/*
require("dotenv").config()
const app=require("./src/app")
const connectToDB = require("./src/config/database")
const {resume, selfDescription, jobDescription} = require("./src/services/temp")
const generateInterviewReport  = require("./src/services/ai.service")

const dns = require("dns")
dns.setServers([
    "1.1.1.1",
    "8.8.8.8",
])

connectToDB()
generateInterviewReport( {resume, selfDescription, jobDescription} )

app.listen(3000,()=>{
    console.log("Server is running on port : 3000")
}) */



    







    
require("dotenv").config()
const app=require("./src/app")
const connectToDB = require("./src/config/database")

const dns = require("dns")
dns.setServers([
    "1.1.1.1",
    "8.8.8.8",
])

connectToDB()

app.listen(3000,()=>{
    console.log("Server is running on port : 3000")
})
    