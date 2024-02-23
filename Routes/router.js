import express from "express";
import { handlegenerateShortUrl, handleshorturl, handleurlanalaytics, handleallUrl } from "../Controller/controler.js"
export const router = express.Router();

router.post("/", handlegenerateShortUrl);
router.get("/:shortId", handleshorturl);
router.get("/analytics/:shortId", handleurlanalaytics)
router.get("/", handleallUrl);
// module.exports = router;