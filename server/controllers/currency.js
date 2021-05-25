
const connection = require("../lib/mysql").mysqlConnection();



exports.getCurrencyList = (request, response) => {
    let sqlQuery = `SELECT * FROM CURRENCY`
    return connection.query(sqlQuery, function (err, data) {
        if (err) {
            return response.status(500).json({
                'status': `failed`,
                'data': err
            })
        }
        return response.status(200).json({
            'status': `success`,
            'data': data
        })
    })
}
