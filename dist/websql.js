const db = openDatabase('ma_base2', '1.0', 'database pour l\'essai', 2000000);
db.transaction(function (tx) {
    tx.executeSql(
        "CREATE TABLE produits(id INT PRIMARY KEY)",
        [],
        function success(tx) {
            console.log(tx)
        },
        function unsuccess(tx) {
            console.log(tx)
        }
    );

    tx.executeSql(
        "INSERT INTO produits(id) VALUES (?)",
        [parseInt(Math.random() * 1000)],
        function success(tx) {
            console.log('success', tx)
        },
        function unsuccess(tx, e) {
            console.log('unsuccess', tx, e)
        }
    );
})

var id = 1;
db.readTransaction(function (t) {
    t.executeSql(
        'SELECT * FROM produits WHERE id=?', [id],     
        function success(t, data) {

             for (var i = 0; i < data.rows.length; i++) {
                console.log(data.rows.item(i));
            }
        }, function unscuccess(t, e) { console.log(t, e); });
});
