const Discord = require("discord.js");
const steem = require("steem");
const config = require("./../config.json");

const bot = new Discord.Client();

var content = require("./content.js");

bot.login(config.token)

exports.stream = function() {
 steem.api.streamOperations("irreversible", function(err,result) {
  try{
   if(result[0] === "comment" && result[1].parent_author === "") {
    let data = JSON.parse(result[1].json_metadata),
        tag = data.tags,
        app = data.app;
    
    if(typeof tag != "undefined") {
      tags = tag.map(v => v.toLowerCase());
    }
    
    if(typeof app != "undefined" && app.startsWith(config.app)) {
      author = result[1].author,
      permlink = result[1].permlink;
    
      for(v in config.authors) {
       if (author === v) {
        console.log(tags)

        for(w in config.altTags) {
         if(tags.indexOf(w) != (-1)) {
           content.getContent(author, permlink,config.altTags[w]);        
         }
        }
        return content.getContent(author, permlink,config.authors[v]);
       }
      }
      return content.getContent(author, permlink,config.principalChan);
    }
   }
  }catch(err){
    console.log(err);
  } 
 });
}




