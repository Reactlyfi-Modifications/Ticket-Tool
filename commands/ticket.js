const Discord = require('discord.js');
const config = require('../config.json')
module.exports.run = async (Client, message, args, prefix) => {

    const TicketEmbed = new Discord.MessageEmbed()
        .setAuthor(`${config.EmbedTitle}  - Ticket system`)
        .setColor(config.color)
        .setDescription(`Velkommen til ${config.EmbedTitle} Ticket System, du har nu følgene valg mugligheder`)
        .addField('- Generel Support:', `Har du brug for Generel Support om noget på discorden, eller bare et andet spørgsmål, så opret en ticket her!`)
        .addField('- Køb Ticket:', `Har du brug for Køb Support, eller bare et andet spørgsmål, så opret en ticket her!`)
        .addField('- Partner Support:', `Har du brug for Partner Support, eller bare et andet spørgsmål, så opret en ticket her!`)

        const embedlinks = new Discord.MessageActionRow().addComponents(
            new Discord.MessageButton()
                .setCustomId('tic2')
                .setLabel('🌎 Partner Ticket')
                .setStyle('SECONDARY'),
    
                new Discord.MessageButton()
                .setCustomId('tic3')
                .setLabel('💸 Køb Support')
                .setStyle('SECONDARY'),

                new Discord.MessageButton()
                .setCustomId('tic4')
                .setLabel('✉️ Generel Support')
                .setStyle('SECONDARY'),
        )

    
    
        message.channel.send({ embeds: [TicketEmbed], ephemeral: true, components: [embedlinks] })



}



module.exports.help = {
    name: "ticket",
    aliases: ['t']
}