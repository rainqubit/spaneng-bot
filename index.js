'use strict';

const Cleverbot = require("cleverbot.io");
let input = process.argv.slice(2).join(' ');

let bot = new Cleverbot('0B5pKj1Ho9rWxjwA', '5F66xld8ynqiggW9u9f6Tod4HaiZAbCV');
bot.setNick('Sinobu');

bot.create(function (err, session) {
	bot.ask("Hi", function (err, response){
		console.log(session + ':', response)
		document.write(session + ':', response)
	});
});