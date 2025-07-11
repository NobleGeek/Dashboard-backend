import mongoose from 'mongoose';
import { DB_NAME } from '../constaints.js';


const connectDB = async()=>{
  try{
    const connectionInstance = await mongoose.connect(`mongodb+srv://ADARSH:mongoDB@cluster0.3ffpyq9.mongodb.net/${DB_NAME}`)
    console.log(`\n MongoDB Connected !! DB Host : ${connectionInstance.connection.host}`)

  } catch (error){
    console.log("MongoDB ERROR : ", error)
    process.exit(1)
    throw error
  }
} 

export default connectDB