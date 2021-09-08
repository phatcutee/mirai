module.exports.config = {
name: "uwu",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "Phatcutee",
	description: "nghe trinh uwu :v",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("uwu")==0 || (event.body.indexOf("Uwu")==0)) {
		var msg = {
				body: "iu quíu :v ",
				attachment: fs.createReadStream(__dirname + `/noprefix/auwu.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}