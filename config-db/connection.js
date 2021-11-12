
   const Pool = require('pg').Pool

    const connection = new Pool({
        user: 'postgres',
        host: '49.0.198.122',
        database: 'DBWeblottery',
        password: 'password',
        port: 5432,
    });
    
    connection.connect().then(res => {
        console.log('Connected')
    }).catch(err => {
        console.log("Connect failed")
    })
    
    module.exports = connection

