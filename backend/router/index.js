import express from "express";
import { urlModel } from "../db.js";
import { nanoid } from "nanoid";
const urlRouter = express.Router();
const PORT = 3000;
urlRouter.post("/shorturls", async (req, res)=>{
    const url = req.body.url;
    const validity = req.body.validity;
    const customShortcode = req.body.shortcode;
    // console.log(url + "   "+ validity + "   "+ customShortcode + "   ");
    const shortId = nanoid(6);
    urlModel.create({
        orginalUrl : url,
        id : shortId
    })
    const shortUrl = `http://localhost:${PORT}/${shortId}`;
    res.json({ shortUrl });

})
urlRouter.get("/:shortId", async (req, res) => {
  const { shortId } = req.params;
    console.log("short Id", shortId);
  try {
    const originalUrlDoc = await urlModel.findOne({ id: shortId });
    console.log("asdfaf", originalUrlDoc)
    if (originalUrlDoc) {
      res.redirect(originalUrlDoc.orginalUrl);
    } else {
      res.status(404).json({ error: "URL not found" });
    }
  } catch (err) {
    res.status(500).json({ error: "Server error" });
  }
});



export { urlRouter };