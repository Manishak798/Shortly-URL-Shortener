import express from "express";
import shortid from "shortid";
import { URL as NodeURL } from 'url'; // Import URL from the 'url' module
import URL from "../Models/schema.js";
export const handlegenerateShortUrl = async (req, res) => {
    const body = req.body;
    try {
        if (!body.url) return res.status(400).json({ error: " url is required" })

        let genratedURL = '';
        const newUrl = shortid();
        const myurl = "http://localhost:5555/url/";
        await URL.create({
            ShortID: newUrl,
            redirectURL: body.url,
            visitHistory: []
        })
        // console.log(URL.find(redirectURL) + newUrl);
        console.log(newUrl);
        genratedURL = myurl + newUrl;
        console.log(genratedURL);
        return res.render("home", { genratedURL: genratedURL });
        // return res.json({ id: newUrl });
    } catch (error) {
        console.log("error: ", error);
    }

}
// Helper function to normalize the input URL
const normalizeURL = (url) => {
    try {
        // Parsing the URL
        const parsedURL = new NodeURL(url);
        // If the protocol is not present, assume HTTPS
        if (!parsedURL.protocol) {
            return "https://" + url;
        }
        return url;
    } catch (error) {
        console.error("Error while normalizing URL:", error);
        return null;
    }
};

export const handleshorturl = async (req, res) => {
    const shortId = req.params.shortId;
    const parsedURL = new NodeURL(url);
    // If the protocol is not present, assume HTTPS
    if (!parsedURL.protocol) {
        return "https://" + body.url;
    }
    return body.url;
    try {
        if (!shortId) return res.status(400).json({ msg: "shortid is required!!" })
        const result = await URL.findOneAndUpdate({ ShortID: shortId }, {

            $push: {
                visitHistory: {
                    timestamps: Date.now()
                }
            }
        })
        if (!result || !result.redirectURL) {
            return res.status(404).json({ error: "URL not found" });
        }
        res.redirect(result.redirectURL);
    } catch (error) {
        console.log("error", error);
    }
}

export const handleurlanalaytics = async (req, res) => {
    const shortId = req.params.shortId;
    try {
        const result = await URL.findOne({ ShortID: shortId })
        // const totalClicks = result.visitHistory ? result.visitHistory.length : 0;
        return res.json({
            totalClicks: result.visitHistory.length,
            analytics: result.visitHistory
        })
    } catch (error) {
        console.log("error: ", error)
    }
}

export const handleallUrl = async (req, res) => {
    try {
        res.render("home");
    } catch (error) {
        console.log("error", error)
    }
}