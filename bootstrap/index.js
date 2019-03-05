const mongoose = require('mongoose');

export function bootDbConnection() {
    let dev_db_url = 'mongodb://wajeed786:wajeed786@ds257314.mlab.com:57314/prmsdb';
    const mongoDB = process.env.MONGODB_URI || dev_db_url;

    mongoose.connect(mongoDB).then((success) => console.log('connection established successfully')
        , (error) => console.log('connection failed ')
    ).catch((e) => console.log('connection failed exception ', e));
}

