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

module.exports = {
	name: 'messageCreate',
	async execute(client, message) {
        if (message.author.bot) return;
	    //currency.add(message.author.id, 1);
	},
};
