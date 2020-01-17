const express = require("express")
const bodyparser = require("body-parser")
const cors = require("cors")
const axios = require("axios")
const app = express()

app.use(cors());

app.get('/getData', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql", {
        "query": "SELECT * from SocionData"
    }).then((response) => {
        data = response.data;
        res.send({ data });
    }).
        catch((err) => {
            console.log(err)
            res.send("ERROR")
        })
})

//for pie and bar charts , returns topicname,programname and date)
app.get('/getData/api/id1', (req, res) => {

    axios.post("http://localhost:8082/druid/v2/sql", {
        "query": `select topic_name,program_name,"date" FROM SocionData`
    }).then((response) => {
        data = response.data;
        res.send({ data });
    }).
        catch((err) => {
            console.log(err)
            res.send("ERROR")
        })
})


//for sunburst returns topicname,programname,sessionname and date
app.get('/getData/api/id2', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql", {
        "query": `select topic_name,program_name,session_name,"date" FROM SocionData`
    }).then((response) => {
        data = response.data;
        res.send({ data });
    }).
        catch((err) => {
            console.log(err)
            res.send("ERROR")
        })
})

//for all
app.get('/getData/api/id3', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql", {
        "query": `select * FROM SocionData`
    }).then((response) => {
        data = response.data;
        res.send({ data });
    }).
        catch((err) => {
            console.log(err)
            res.send("ERROR")
        })
})

app.get('/getData/api/wiki', (req, res) => {
    axios.post("http://localhost:8082/druid/v2/sql", {
        "query": `select * FROM wikipedia LIMIT 3000`
    }).then((response) => {
        data = response.data;
        res.send({ data });
    }).
        catch((err) => {
            console.log(err)
            res.send("ERROR")
        })
})


app.listen(3000, () => {
    console.log("Server listening on 3000")
})