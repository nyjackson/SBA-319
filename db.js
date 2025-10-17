import {MongoClient} from 'mongodb'
const connStr = process.env.ATLAS_URI

const client = new MongoClient(connStr)

let conn;
try{
conn = await client.connect()
console.log("Connection with MongoDB Established.")
} catch(e){
console.log(e)
}
const dbName = ""
const db = connection.db(dbName)
console.log("Conneced to ", dbName)

export default db;