function generateReq(dimension,filterval) {

    var Req = {
        queryType: "groupBy",
        dataSource: "socion_grouped",
        granularity: "Month",
        dimensions: [
            "event_type",
            dimension
        ],
        filter:
            { type: "selector", dimension: "event_type", value: filterval },
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
module.exports = {generateReq}