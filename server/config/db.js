import mongoose from "mongoose";

export default function db(uri) {
    mongoose.connect(uri, {
        useNewUrlParser: true
    }).then(() => {
        console.log("Connected to MongoDB");
    }).catch((error) => {
        console.log(`${error} did not connect`);
    });
}