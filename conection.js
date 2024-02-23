import mongoose from "mongoose";
export async function mongodbconnection(url) {
    mongoose.connect(url)
}
// module.exports = {
//     mongodbconnection
// }