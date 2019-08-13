const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const HOST = process.env.HOST || "localhost:27017";

mongoose.connect(`mongodb://${HOST}/redditcomments`, { useNewUrlParser: true });

const redditComment = new Schema({
  reddit_id: String,
  subreddit: String,
  comment: String,
  intensity: {
    pos: Number,
    neg: Number,
    neu: Number,
    compound: Number
  },
  toxic: { type: Boolean, default: null },
  positive: { type: Boolean, default: null }
});

const RedCom = mongoose.model("RedCom", redditComment);

function insertCommentsFromUser(arr) {
  return RedCom.insertMany(arr);
}

function updateCommentUserInput(id, obj) {
  return RedCom.update({reddit_id: id}, obj, {new:true})
}

module.exports = {
  insertCommentsFromUser,
  updateCommentUserInput
}
