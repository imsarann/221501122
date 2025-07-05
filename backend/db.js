import mongoose, { model, Schema } from "mongoose"
mongoose.connect("MONGO DB LINK");

const urlSchema = new Schema({
    orginalUrl : String,
    id : String
})

const urlModel = new model("URL", urlSchema);
export { urlModel };