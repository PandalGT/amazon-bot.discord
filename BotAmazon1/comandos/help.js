const message = require("../eventos/message");
const { MessageEmbed } = require('discord.js');
const Discord = require("discord.js");

module.exports = async (client, message, args) => { 

    const embed = new MessageEmbed() 
    .setTitle(`${message.guild.name} Lista de comandos`)
    .setColor('PINK')
    .addField(`[🔗] Invite`, `| https://discord.com/api/oauth2/authorize?client_id=773268183859068938&permissions=8&scope=bot |`, true)
    .addField(`[⏫] Amazon`, `| >amazon |`, true);
    message.channel.send(embed);
    message.delete();
}