const snoowrap = require('snoowrap');
const vader = require('vader-sentiment');
require('dotenv').config()

let CLIENT_ID = process.env.CLIENT_ID;
let CLIENT_SECRET = process.env.CLIENT_SECRET;
let REFRESH_TOKEN = process.env.REFRESH_TOKEN;

const r = new snoowrap({
    userAgent: 'web:mvptest:v0.1',
    clientId: CLIENT_ID,
    clientSecret: CLIENT_SECRET,
    refreshToken: REFRESH_TOKEN
});

function getUserCommentsSentiment(username, limit = 10){
    return r.getUser(username).getComments({ limit: limit})
        .then(listing => {
            let analyzedComments = [];
            //listing is an array of comment objects
            for (let i = 0; i < listing.length; i++){
                let commentObj = {}
                commentObj.comment = listing[i].body;
                commentObj.intensity = vader.SentimentIntensityAnalyzer.polarity_scores(listing[i].body);
                commentObj.reddit_id = listing[i].id;
                commentObj.subreddit = listing[i].subreddit_name_prefixed;
                analyzedComments.push(commentObj)
            }
            return analyzedComments;
        })
}

module.exports = getUserCommentsSentiment;