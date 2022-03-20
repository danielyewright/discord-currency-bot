const { SlashCommandBuilder } = require('@discordjs/builders');
const { Collection } = require('discord.js');
const currency = new Collection();
const { Users } = require('../dbObjects.js');

Reflect.defineProperty(currency, 'getBalance', {
	value: id => {
		const user = currency.get(id);
		return user ? user.balance : 0;
	},
});

module.exports = {
	data: new SlashCommandBuilder()
		.setName('balance')
		.setDescription('Show user balance'),
	async execute(interaction) {
        const target = interaction.options.getUser('user') ?? interaction.user;
        const user = await Users.findOne({ where: { user_id: target.id } });
        console.log(user);
		return await interaction.reply(`${target.tag} has 💰${currency.getBalance(user)}`);
	},
};
