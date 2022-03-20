# Discord currency bot

A common feature of Discord bots is a currency system.

**Install dependencies**

`npm install`

**Available scripts**

- `npm start` - Start in production
- `npm run dev` - Start in development
- `npm run lint` - Lint files
- `npm run deploy-commands` - Registers slash(/) commands

**Database**

Execute `node dbInit.js` to create the database tables. Unless you make a change to the models, you'll never need to touch the file again. If you change a model, you can execute `node dbInit.js --force` or `node dbInit.js -f` to force sync your tables. It's important to note that this **will** empty and remake your model tables.
