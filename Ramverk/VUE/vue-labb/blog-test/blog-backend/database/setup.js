const db = require('./connection')
require('../models/User')
require('../models/Post')
require('../models/Comment')

db.sync()