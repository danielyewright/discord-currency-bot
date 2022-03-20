const { SlashCommandBuilder } = require('@discordjs/builders');
const { Collection } = require('discord.js');
const currency = new Collection();
const { Users } = require('../dbObjects.js');

Reflect.defineProperty(currency, 'add', {
	value: async (id, amount) => {
		const user = currency.get(id);

		if (user) {
			user.balance += Number(amount);
			return user.save();
		}

		const newUser = await Users.create({ user_id: id, balance: amount });
		currency.set(id, newUser);

		return newUser;
	},
});

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
		return await interaction.reply(`${target.tag} has 💰${currency.getBalance(target.id)}`);
	},
};