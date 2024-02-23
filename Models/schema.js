import mongoose from "mongoose";

const urlSchema = new mongoose.Schema({
    ShortID: {
        type: String,
        required: true,
        unique: true,
    },
    redirectURL: {
        type: String,
    },
    visitHistory: [{
        timestamps: { type: Number },
    }]
}, { timestamps: true });

const URL = mongoose.model("url", urlSchema)
export default URL;