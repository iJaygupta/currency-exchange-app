
exports.prepareData = (conn) => {
    return new Promise((res, rej) => {
        let query = "CREATE SCHEMA IF NOT EXISTS crownstack;USE crownstack; CREATE TABLE IF NOT EXISTS `currency` ( `id` int NOT NULL AUTO_INCREMENT,`display_name` varchar(200) DEFAULT NULL, `slug` varchar(45) DEFAULT NULL, `created_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,`updated_at` timestamp NULL DEFAULT CURRENT_TIMESTAMP,  PRIMARY KEY (`id`)) ENGINE=InnoDB AUTO_INCREMENT=5 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci; REPLACE INTO currency(id, display_name, slug) VALUES (1, 'Indian Rupee', 'INR') ,(2, 'Australian Dollar', 'AUD') , (3, 'Canadian Dollar', 'CAD'), (4, 'Japanese Yen', 'JPY');";
        return conn.query(query, function (err, data) {
            if (err) {
                console.log("Error :", err);
                return rej(err)
            }
            return res(data)
        })
    })
}
