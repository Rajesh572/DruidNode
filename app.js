const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const axios = require("axios")
const app = express()
const requests = require("./configs")

app.use(cors());

app.get("/getData/api/getGrouped", (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.all)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({"data":dataArr})
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

app.get("/getData/api/getDownloadContentData", (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.downloadContentReq)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({"data":dataArr})
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})


app.get("/getData/api/getGenerateAttestationData", (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.generateAttestationReq)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({"data":dataArr})
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

app.get("/getData/api/getSessionCompletedData", (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.sessionCompletedReq)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({"data":dataArr})
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})


app.get('/health', (req, res) => {
    res.send("HEALTH OK");
})


app.listen(3000, () => {
    console.log("Server listening on 3000")
})