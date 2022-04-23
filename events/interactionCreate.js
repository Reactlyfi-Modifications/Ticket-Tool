const Client = require('../index').Client
const discord = require('discord.js')
const config = require('../config.json')
Client.on('interactionCreate', async inter => {
    if (inter.isCommand()) {
        let slachCmds = Client.SlachCmds.get(inter.commandName)
        if (slachCmds) slachCmds.run(inter)
    }
})

Client.on('interactionCreate', async (Interaction) => {
    if (Interaction.customId === 'tic1') {

        const embed = new discord.MessageEmbed()
            .setAuthor('Closed - Ticket')
            .setDescription('✉️ This ticket will close in 5 seconds.....')
            .setColor('RED')


        Interaction.reply({ embeds: [embed] })


        const discordTranscripts = require('discord-html-transcripts');
        // or (if using typescript) import * as discordTranscripts from 'discord-html-transcripts';

        const channel = Interaction.channel; // or however you get your TextChannel

        // Must be awaited
        const attachment = await discordTranscripts.createTranscript(channel, {
            fileName: 'ReactlyFiTickets.html'
        });



        Interaction.guild.channels.cache.get(config.ticketlogs).send({ files: [attachment] })
        setTimeout(() => {
            Interaction.channel.delete()
        }, 5000)
    }


    if (Interaction.customId === 'tic2') {
        const ch = Interaction.guild.channels.cache.find(ch => ch.name === `Partner-${Interaction.user.username}`)
        if (ch) return Interaction.channel.send('You already have a ticket open.')
        Interaction.guild.channels.create(`Partner-${Interaction.user.username}`, {
            type: 'text',
            parent: config.ChannelID,
            permissionOverwrites: [
                {
                    id: Interaction.guild.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: Interaction.user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel => {


            const embedmessage = new discord.MessageEmbed()
                .setTitle(`${config.EmbedTitle} - Partner Ticket`)
                .setDescription(`Here is your Support ticket, while wating can you type your problem. Just wait a minut on a  <@&${config.staffrole}>`)
                .setFooter(config.footertext, config.logo)
                .setColor(config.color);


            const bt3 = new discord.MessageActionRow()
                .addComponents(
                    new discord.MessageButton()
                        .setCustomId('tic1')
                        .setLabel('🗑️ Close & Save Ticket')
                        .setStyle('DANGER')
                );


            Interaction.reply(`click <#${channel.id}> to view your ticket`)
            channel.send(`${Interaction.user}, Welcome to your ticket!`)
            channel.send({ embeds: [embedmessage], components: [bt3] })
        })

    }

    if (Interaction.customId === 'tic3') {
        const ch = Interaction.guild.channels.cache.find(ch => ch.name === `Buy-${Interaction.user.username}`)
        if (ch) return Interaction.channel.send('You already have a ticket open.')
        Interaction.guild.channels.create(`Buy-${Interaction.user.username}`, {
            type: 'text',
            parent: config.ChannelID,
            permissionOverwrites: [
                {
                    id: Interaction.guild.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: Interaction.user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel => {


            const embedmessage = new discord.MessageEmbed()
                .setTitle(`${config.EmbedTitle} - Buy Ticket`)
                .setDescription(`Here is your Buy ticket, while wating can you type your problem. Just wait a minut on a <@&${config.staffrole}>`)
                .setColor(config.color)
                .setFooter(config.footertext, config.logo);


            const bt3 = new discord.MessageActionRow()
                .addComponents(
                    new discord.MessageButton()
                        .setCustomId('tic1')
                        .setLabel('🗑️ Close & Save Ticket')
                        .setStyle('DANGER')
                );


            Interaction.reply(`click <#${channel.id}> to view your ticket`)
            channel.send(`${Interaction.user}, Welcome to your ticket!`)
            channel.send({ embeds: [embedmessage], components: [bt3] })
        })

    }






    if (Interaction.customId === 'tic4') {




        const ch = Interaction.guild.channels.cache.find(ch => ch.name === `Support-${Interaction.user.username}`)
        if (ch) return Interaction.channel.send('You already have a ticket open.')
        Interaction.guild.channels.create(`Support-${Interaction.user.username}`, {
            type: 'text',
            parent: config.ChannelID,
            permissionOverwrites: [
                {
                    id: Interaction.guild.id,
                    deny: ['VIEW_CHANNEL']
                },
                {
                    id: Interaction.user.id,
                    allow: ['VIEW_CHANNEL', 'SEND_MESSAGES', 'ADD_REACTIONS', 'ATTACH_FILES']
                }
            ]
        }).then(async channel => {


            const embedmessage = new discord.MessageEmbed()
                .setTitle(`${config.EmbedTitle} - Support Ticket`)
                .setDescription(`Here is your Support ticket, while wating can you type your problem. Just wait a minut on a  <@&${config.staffrole}>`)
                .setColor(config.color)
                .setFooter(config.footertext, config.logo);


            const bt3 = new discord.MessageActionRow()
                .addComponents(
                    new discord.MessageButton()
                        .setCustomId('tic1')
                        .setLabel('🗑️ Close & Save Ticket')
                        .setStyle('DANGER')
                );


            Interaction.reply(`click <#${channel.id}> to view your ticket`)
            channel.send(`${Interaction.user}, Welcome to your ticket!`)
            channel.send({ embeds: [embedmessage], components: [bt3] })
        })

    }
})
