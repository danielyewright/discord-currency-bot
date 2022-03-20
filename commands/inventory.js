const { SlashCommandBuilder } = require('@discordjs/builders');
const { Users } = require('../dbObjects.js');

module.exports = {
	data: new SlashCommandBuilder()
		.setName('inventory')
		.setDescription('Show user inventory')
        .addUserOption(option => option.setName('user').setDescription('User to get inventory items')),
	async execute(interaction) {
        const target = interaction.options.getUser('user') ?? interaction.user;
        const user = await Users.findOne({ where: { user_id: target.id } });
        console.log(target.id);
        const items = await user.getItems();
    
        if (!items.length) return interaction.reply(`${target.tag} has nothing!`);
    
        return interaction.reply(`${target.tag} currently has ${items.map(i => `${i.amount} ${i.item.name}`).join(', ')}`);
	},
};
