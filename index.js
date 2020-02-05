function generateReqforBar(program_name, dimension, event_type) {

    var Req = {
        queryType: "groupBy",
        dataSource: "socionDataWithLocation",
        granularity: "Month",
        dimensions: [
            dimension
        ],
        filter:
        {
            type: "and",
            fields: [
                { type: "selector", dimension: "program_name", value: program_name },
                { type: "selector", dimension: "event_type", value: event_type }
            ]
        },
        aggregations: [
            {
                type: "longSum",
                name: "count",
                fieldName: "count"
            }
        ],
        intervals: [
            "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
        ]
    }
    return Req
}

function generateReqforStacked(program_name, dimension, event_type) {

    var Req = {
        queryType: "groupBy",
        dataSource: "socionDataWithLocation",
        granularity: "Month",
        dimensions: [
            dimension, "topic_name"
        ],
        filter:
        {
            type: "and",
            fields: [
                { type: "selector", dimension: "program_name", value: program_name },
                { type: "selector", dimension: "event_type", value: event_type }
            ]
        },
        aggregations: [
            {
                type: "longSum",
                name: "count",
                fieldName: "count"
            }
        ],
        intervals: [
            "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
        ]
    }
    return Req
}

function generateReqForMultiLine(program_name, dimension, event_type) {
    var Req = {
        "queryType": "groupBy",
        "dataSource": "socionDataWithLocation",
        "granularity": "Day",
        "dimensions": [
            "topic_name"
        ],
        "aggregations": [
            {
                "type": "count",
                "name": "count",
                "fieldName": "count"
            }
        ],
        "filter": {
            "type": "and",
            "fields": [
                { "type": "selector", "dimension": "program_name", "value": program_name },
                { "type": "selector", "dimension": "event_type", "value": event_type }

            ]
        },
        "intervals": [
            "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
        ]
    }
    return Req;

}



module.exports = { generateReqforBar, generateReqforStacked, generateReqForMultiLine }