'use strict';

const commando = require('discord.js-commando')
const config = require('./config.json')
const chalk = require('chalk')
const path = require('path')

const bot = new commando.Client({
    owner: config.owner,
    commandPrefix: config.prefix
})

bot
    .on('error', (err) => {console.log(chalk.red(`Error: ${err}`))})
    .on('warn', (warn) => {console.log(chalk.yellow(`Warning: ${warn}`))})
    .on('debug', (dbg) => {console.log(chalk.grey(`Debug: ${dbg}`))})
    .on('ready', () => {console.log(`Ready event fired. 
    Client should be logged in as 
    User: ${bot.user.username}#${bot.user.discriminator}
      ID: ${bot.user.id} `)
    })
    .on('disconnected', () => {console.warn('Bot disconnected...')})
    .on('reconnecting', () => {console.warn('Bot reconnecting...')})

bot.registry
    .registerDefaults()
    .registerGroups([
        ['aoc', "Advent of Code"]
    ])
    .registerCommandsIn(path.join(__dirname, 'commands'))

// noinspection JSIgnoredPromiseFromCall
bot.login(config.token)
