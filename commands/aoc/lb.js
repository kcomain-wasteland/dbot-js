const axios = require('axios');
const commando = require('discord.js-commando');

module.exports = class Leaderboard extends commando.Command {
    constructor(client) {
        super(client, {
            name: 'lb',
            group: 'aoc',
            memberName: "lb",
            description: 'Shows the metalcupcake5 leaderboard on AoC',
            details: "Every year there's an event called [Advent of Code](https://adventofcode.com)" +
                "",
            examples: ['aoc lb']
        });
    }

    async run(msg, args){
        return msg.reply('work in progress :)')
    }
};

