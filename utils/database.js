import mongoose from "mongoose";

let isConnected = false;

export const connectToDatabase = async () => { 

    mongoose.set('strictQuery', true)

    if (isConnected) {
        console.log("Mongoose is already connected")
        return
    }
    
    try {
        await mongoose.connect(process.env.MONGODB_URI,{
            db_name: "Promptopia",
            useNewUrlParser: true,
            useUnifiedTopology: true
        })

        isConnected = true
        console.log("Mongodb is connected")
    } catch (error) {
        console.log(`Error: ${error}`)
    }

}
