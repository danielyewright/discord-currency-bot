const { SlashCommandBuilder } = require('@discordjs/builders');
const { Collection, Formatters } = require('discord.js');
const { CurrencyShop } = require('../dbObjects.js');
const currency = new Collection();

module.exports = {
	data: new SlashCommandBuilder()
		.setName('shop')
		.setDescription('Display the shop'),
	async execute(interaction) {
        const items = await CurrencyShop.findAll();
	    return await interaction.reply(Formatters.codeBlock(items.map(i => `${i.name}: 💰${i.cost}`).join('\n')));
	},
};