
const all = {
    "queryType": "groupBy",
    "dataSource": "socion_grouped",
    "granularity": "Month",
    "dimensions": [
        "event_type",
        "month"
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
/* 
const all = {
    "queryType": "groupBy",
    "dataSource": "socion_eventCounts",
    "granularity": "Month",
    "dimensions": [
        "month"
    ],
    "aggregations": [
        {
            "type": "longSum",
            "name": "attestation_count",
            "fieldName": "sum_generate_attestation_count"
        },{
            "type": "longSum",
            "name": "session_count",
            "fieldName": "sum_session_completed_count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
} */

const downloadContentReq = {
    "queryType": "groupBy",
    "dataSource": "socion_grouped",
    "granularity": "Month",
    "dimensions": [
        "event_type",
        "month"
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
    "granularity": "Month",
    "dimensions": [
        "event_type",
        "month"
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
    "granularity": "Month",
    "dimensions": [
        "event_type",
        "month"
    ],
    "filter":
      { "type": "selector", "dimension": "event_type", "value": "Generate Attestation" },
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


