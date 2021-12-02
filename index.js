

const { Client, intent } = require('discord.js');
const { token } = require ('./data/config.json')
const client = new Client({ intents: [Intents.FLAGS.GUILDS] });


client.login (token);