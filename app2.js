const express = require("express")
const cors = require("cors")
const axios = require("axios")
const app = express()
const index = require("./index")

app.use(cors());


//api for getting bar data acc to event type
app.get('/v1/api/getBarData', (req, res) => {
    event_type = req.query.event_type;
    dimension = req.query.dimension;
    program_name = req.query.program_name;
    request = index.generateReqforBar(program_name, dimension, event_type)
    axios.post("http://localhost:8082/druid/v2", request)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                element['event']['timestamp'] = element['timestamp']

                element['event']['year'] = new Date(element['timestamp']).getFullYear()
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

//api for getting stacked data
app.get('/v1/api/getStackedData', (req, res) => {
    event_type = req.query.event_type;
    dimension = req.query.dimension;
    program_name = req.query.program_name;
    request = index.generateReqforStacked(program_name, dimension, event_type)
    axios.post("http://localhost:8082/druid/v2", request)
        .then((response) => {
            var dataArr = []
            response.data.forEach(element => {
                element['event']['timestamp'] = element['timestamp']
                element['event']['year'] = new Date(element['timestamp']).getFullYear()
                dataArr.push(element['event'])
            });
            res.send({ "data": dataArr })
        }).
        catch((err) => {
            console.log(err)
            res.send("error")
        })
})

//api for multiline
app.get('/v1/api/getMultiLineData', (req, res) => {
    event_type = req.query.event_type;
    dimension = req.query.dimension;
    program_name = req.query.program_name;
    request = index.generateReqforStacked(program_name, dimension, event_type)
    axios.post("http://localhost:8082/druid/v2", index.generateReqForMultiLine(program_name, dimension, event_type))
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

app.get('/getAlltopics', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql", {
        query: `SELECT topic_name from socionDataWithLocation where program_name='Lorem Ipsum Fixed'`
    }).then((response) => {
        res.send(response.data)
    })
})

app.listen(3000, () => {
    console.log("Server listening on 3000")
})