// npm i mongoose
import dotenv from 'dotenv';
import mongoose from 'mongoose';

dotenv.config();

const USERNAME = process.env.DB_USERNAME;
const PASSWORD = process.env.DB_PASSWORD;

const URL = `mongodb://${USERNAME}:${PASSWORD}@ac-jitwtdi-shard-00-00.25fjzcs.mongodb.net:27017,ac-jitwtdi-shard-00-01.25fjzcs.mongodb.net:27017,ac-jitwtdi-shard-00-02.25fjzcs.mongodb.net:27017/?ssl=true&replicaSet=atlas-ht1pop-shard-0&authSource=admin&retryWrites=true&w=majority&appName=IM`;
const Connection = async () =>{
    try{
      await  mongoose.connect(URL, {useUnifiedTopology: true});
      console.log('DataBase Connected US Successfully');
    } catch (error) {
        console.log('DataBase Connected UNSuccessfully', error.message);

    }
}
export default Connection;