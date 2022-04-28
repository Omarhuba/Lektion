const {NODE_ENV} = require('./')
let databaseConfig;


switch(NODE_ENV){
    case 'development':
        databaseConfig = {
            dialect: 'sqlite3',
            storage: './database/dev.sqlite'
        }; break;
        case 'production':
            databaseConfig ={
                dialect: 'postgres',
                dialectOptions: {
                    ssl: {
                        require: true,
                        rejectUnauthorized: false
                    }
                }
            }; break;
            default:
                throw new Error('invalid environment')
}

module.exports = databaseConfig