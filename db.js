import {MongoClient} from 'mongodb'
const connStr = process.env.ATLAS_URI

const connection = new MongoClient(connStr)