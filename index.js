const { Client, GatewayIntentBits } = require('discord.js');

const client = new Client({
  intents: [
    GatewayIntentBits.Guilds,
    GatewayIntentBits.GuildMessages,
    GatewayIntentBits.MessageContent
  ]
});

client.once('ready', () => {
  console.log(`${client.user.tag} is online!`);
});

client.on('messageCreate', message => {
  if (message.content === '!ping') {
    message.reply('Pong!');
  }
});

client.login('MTQ3OTc2Mjc2MzIyMzAxMTQ4Mg.GRr7sg.XTfo8U2p2cAKKiqoKoFRZ30jZNiDbN6g_f2up4');
