const { Collection } = require('discord.js');
const currency = new Collection();

module.exports = {
	name: 'messageCreate',
	async execute(client, message) {
        if (message.author.bot) return;
	    currency.add(message.author.id, 1);
	},
};
