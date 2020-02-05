
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

const downloadContentReq = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Month",
    "dimensions": [
        "topic_name",
        "month"
    ],
    "filter": {
        "type": "and",
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
    "dataSource": "socionDataWithLocation",
    "granularity": "Month",
    "dimensions": [
        "topic_name",
        "month"
    ],
    "filter": {
        "type": "and",
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
    "dataSource": "socionDataWithLocation",
    "granularity": "Month",
    "dimensions": [
        "topic_name",
        "month"
    ],
    "filter":
        { "type": "selector", "dimension": "event_type", "value": "Generate Attestation" },
    "aggregations": [
        {
            "type": "count",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

const generateAttestationReqForLine = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Day",
    "dimensions": [

    ],
    "filter":
        { "type": "selector", "dimension": "event_type", "value": "Generate Attestation" },
    "aggregations": [
        {
            "type": "count",
            "name": "value",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}


const generateSessiomReqForLine = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Day",
    "dimensions": [
    ],
    "filter":
        { "type": "selector", "dimension": "event_type", "value": "Session Completed" },
    "aggregations": [
        {
            "type": "count",
            "name": "value",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}


const generateDownloadReqForLine = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Day",
    "dimensions": [
    ],
    "filter":
        { "type": "selector", "dimension": "event_type", "value": "Download Content" },
    "aggregations": [
        {
            "type": "count",
            "name": "value",
            "fieldName": "count"
        }
    ],
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

const generateDownloadReqForBar = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Month",
    "dimensions": [
        "month"
    ],
    "aggregations": [
        {
            "type": "count",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "filter": {
        "type": "selector",
        "dimension": "event_type",
        "value": "Download Content"
    },
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

const generateDownloadReqForMultiLine = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Month",
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
        "type": "or",
        "fields": [
            { "type": "selector", "dimension": "program_name", "value": "Lorem Ipsum Fixed" }

        ]
    },
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

const generateAttestationReqForBar = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Month",
    "dimensions": [
        "month"
    ],
    "aggregations": [
        {
            "type": "count",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "filter": {
        "type": "selector",
        "dimension": "event_type",
        "value": "Generate Attestation"
    },
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}


const generateSessionReqForBar = {
    "queryType": "groupBy",
    "dataSource": "socionDataWithLocation",
    "granularity": "Month",
    "dimensions": [
        "month"
    ],
    "aggregations": [
        {
            "type": "count",
            "name": "count",
            "fieldName": "count"
        }
    ],
    "filter": {
        "type": "selector",
        "dimension": "event_type",
        "value": "Session Completed"
    },
    "intervals": [
        "2018-10-07T00:00:00.000Z/2020-10-30T00:00:00.000Z"
    ]
}

module.exports = {
    all, downloadContentReq, generateSessionReqForBar,
    sessionCompletedReq, generateAttestationReq, generateDownloadReqForBar, generateDownloadReqForMultiLine
    , generateAttestationReqForLine, generateSessiomReqForLine, generateDownloadReqForLine, generateAttestationReqForBar
}

