const { Collection } = require('discord.js');
const currency = new Collection();
const { Users } = require('../dbObjects.js');

module.exports = {
	name: 'ready',
	once: true,
	async execute(client) {
		const storedBalances = await Users.findAll();
	    storedBalances.forEach(b => currency.set(b.user_id, b));
	    console.log(`Logged in as ${client.user.tag}!`);
	},
};
