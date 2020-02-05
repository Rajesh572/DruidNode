const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const axios = require("axios")
const app = express()
const requests = require("./configs")
const index = require("./index")

app.use(cors());

app.get("/getData/api/getGrouped", (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.all)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
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
            element['event']['timestamp'] = element['timestamp']
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
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
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

app.get("/getData/api/get/SessionCompletedData", (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.sessionCompletedReq)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})


app.get('/health', (req, res) => {
    res.send("HEALTH OK");
})

app.get('/getFiltered', (req, res) => {

    dimension = req.query.dimension;
    filterval = req.query.filterval;
    request = index.generateReq(dimension, filterval)

    axios.post("http://localhost:8082/druid/v2", request)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

app.get('/getUniqueByMonth', (req, res) => {
    dimension = req.query.dimension;
    filterval = req.query.filterval;
    request = index.generateUniqueRecReq(dimension, filterval)
    axios.post("http://localhost:8082/druid/v2", request)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})


app.get('/getCountForAttestation', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql",
        {
            query: `SELECT count(*) as "value" from socionDataWithLocation where "event_type"='Generate Attestation'`
        }).then((response) => {
            res.send(response.data)
        })
})


app.get('/getCountForSessionCompleted', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql",
        {
            query: `SELECT count(*) as "value" from socionDataWithLocation where "event_type"='Session Completed'`
        }).then((response) => {
            res.send(response.data)
        })
})

app.get('/getCountForDownload', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql",
        {
            query: `SELECT count(*) as "value" from socionDataWithLocation where "event_type"='Download Content'`
        }).then((response) => {
            res.send(response.data)
        })
})


app.get('/getCountForUniqueTrainee', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql",
        {
            query: `SELECT count(DISTINCT(user_id)) as "value" from socionDataWithLocation where "role"='TRAINEE'`
        }).then((response) => {
            res.send(response.data)
        })
})


app.get('/getCountForUniqueTrainer', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql",
        {
            query: `SELECT count(DISTINCT(user_id)) as "value" from socionDataWithLocation where "role"='TRAINER'`
        }).then((response) => {
            res.send(response.data)
        })
})

app.get('/getData/api/getDownloadDataForBar', (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.generateDownloadReqForBar)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

app.get('/getData/api/getDownloadDataForMultiLine', (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.generateDownloadReqForMultiLine)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
            element['event']['date'] = element['timestamp']
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})


app.get('/getData/api/getAttestationDataForBar', (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.generateAttestationReqForBar)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

app.get("/getData/api/getSessionDataForBar",(req,res)=>{
    axios.post("http://localhost:8082/druid/v2", requests.generateSessionReqForBar)
    .then((response) => {
        var dataArr = []
        response.data.forEach(element => {
            dataArr.push(element['event'])
        });
        res.send({ "data": dataArr })
    }).
    catch((err) => {
        console.log(err)
        res.send("error")
    })  
})

app.get("/getData/api/getSessionData", (req, res) => {
    axios.post("http://localhost:8082/druid/v2", requests.sessionCompletedReq)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
            element['event']['timestamp'] = element['timestamp']
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

app.get('/getAllTopicNames', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql",
        {
            query: `select DISTINCT(topic_name) from socionDataWithLocation where "event_type"='Download Content'`
        }).then((response) => {
            res.send(response.data)
        })
})

app.listen(3000, () => {
    console.log("Server listening on 3000")
})