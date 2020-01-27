
const all = {
    "queryType": "groupBy",
    "dataSource": "socion_grouped",
    "granularity": "Day",
    "dimensions": [
        "event_type",
        "topic_name",
        "date","month"
    ],
    "aggregations": [
        {
            "type": "longSum",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

const downloadContentReq = {
    "queryType": "groupBy",
    "dataSource": "socion_grouped",
    "granularity": "Day",
    "dimensions": [
        "event_type",
        "topic_name",
        "date","month"
    ],
    "filter":{"type":"and",
    	"fields": [
      { "type": "selector", "dimension": "event_type", "value": "Download Content" }]
    },
    "aggregations": [
        {
            "type": "longSum",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

const sessionCompletedReq = {
    "queryType": "groupBy",
    "dataSource": "socion_grouped",
    "granularity": "Day",
    "dimensions": [
        "event_type",
        "topic_name",
        "date","month"
    ],
    "filter":{"type":"and",
    	"fields": [
      { "type": "selector", "dimension": "event_type", "value": "Session Completed" }]
    },
    "aggregations": [
        {
            "type": "longSum",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

const generateAttestationReq = {
    "queryType": "groupBy",
    "dataSource": "socion_grouped",
    "granularity": "Day",
    "dimensions": [
        "event_type",
        "topic_name",
        "date","month"
    ],
    "filter":{"type":"and",
    	"fields": [
      { "type": "selector", "dimension": "event_type", "value": "Generate Attestation" }]
    },
    "aggregations": [
        {
            "type": "longSum",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

module.exports = {all,downloadContentReq,sessionCompletedReq,generateAttestationReq}


