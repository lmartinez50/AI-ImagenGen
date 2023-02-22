import mongoose from "mongoose";

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    // Connect to MongoDB
    mongoose.connect('mongodb://127.0.0.1:27017/local', {
        useNewUrlParser: true,
        useUnifiedTopology: true 
    }).then(() => console.log("Connected to MongoDB")).catch(console.error);

    //mongoose.connect(url)
        //.then(() => console.log('MongoDB connected'))
        //.catch((error) => console.log(err))

}

export default connectDB;