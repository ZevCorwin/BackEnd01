const mongoose = require('mongoose');
const { propfind } = require('../app');

class MongoDB {
    constructor() {
        this._connect();
    }

    _connect() {
        let URL = process.env.DATABASE_DEV_URL || 'mongodb://localhost:27017/baithi';
        const ENV = process.env.NODE_ENV || 'development';
        if (ENV === 'production') {
            URL = process.env.DATABASE_PROD_URL;
        }
        
        mongoose.connect(URL, { useNewUrlParser: true })
            .then(() => {
                console.log('Database connection successful');
            })
            .catch(err => {
                console.error('Database connection error', err);
            });
    }
}

module.exports = new MongoDB();