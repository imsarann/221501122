import mongoose, { model, Schema } from "mongoose"
mongoose.connect("mongodb+srv://Saran:Saran%402004@cluster0.ggqxf.mongodb.net/shortUrl");

const urlSchema = new Schema({
    orginalUrl : String,
    id : String
})

const urlModel = new model("URL", urlSchema);
export { urlModel };