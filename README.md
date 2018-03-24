# Dlive-Bot (0.1.0)

**A Discord bot that interacts with the Steem blockchain API - This bot is an adaptation of [DiscoSteem-Bot](https://github.com/planetenamek/DiscoSteem-Bot) specially made for [Dlive](https://dlive.io)**

## Function of the bot

**To make it simple, here is the result of the **$help** command from Dlive-Bot, you will find all the features supported for the moment.**

- **$last-post** followed by the author of your choice, displays the link to the author's latest article.
- **$created** takes two parameters separated by spaces. the first one is the tag you want to display 
and the second one is the number (min = 1, max = 15) of items to display. 
***This option is reserved for the administrator and anyone who has permission to edit a channel.***
- **search** does an article search based on the parameters you specify. ***- Ex: $search planetenamek fr 30 -*** will search in my last 30 articles and return all articles containing the tag **FR**
- **$bal** displays the wallet of the Steem account of your choice. ***- Ex: $bal planetenamek -*** will display my wallet.
***Each command ($...) that requires a parameter must be separated by a space***

### StreamOperation

The stream function has been adapted to meet Dlive needs. You can retrieve live files according to the authors and tags you specified in the config.json file.

There is no limit of authors or tags, you can add 1 or more authors and 1 or more tags, the bot will send the requested content directly to the Discord rooms that you have specified in the config.json file

- Exemple

```{ 
  "token"  : "YOUR TOKEN DISCORD",
  "prefix" : "$",
  "authors" : {"author1" : "CHAN ID", "author2" : "CHAN ID"} ,
  "altTags" : {"tag1" : "CHAN ID", "tag2" : "CHAN ID"},
  "app" : "dlive",
  "principalChan" : "CHAN ID"
}
```

## Install 
You will need a Node JS environment 

- npm install
- npm install pm2 --save (recommanded)

## Configuration

- Create a bot by following this link --> https://discordapp.com/developers/applications/me
- Invitez le bot sur votre serveur en suivant ce lien --> https://discordapp.com/oauth2/authorize?&client_id=YOUR-ID-DISCORD-APP&scope=bot&permissions=0
- Go to the config.json file to add your Discord API application key and configure the ids of your Discord channels.

## Run 

- pm2 start app.js


