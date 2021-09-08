module.exports.config = {
name: "chill",
	version: "1.0.1",
	hasPermssion: 0,
	credits: "VanHung",
	description: "chill",
	commandCategory: "Không cần dấu lệnh",
	usages: "noprefix",
	cooldowns: 5,
};
module.exports.handleEvent = function({ api, event }) {
	const fs = global.nodemodule["fs-extra"];
	var { threadID, messageID } = event;
	if (event.body.indexOf("chill")==0 || (event.body.indexOf("Chill")==0)) {
		var msg = {
				body: "Nhạc Chill mot chut ",
				attachment: fs.createReadStream(__dirname + `/noprefix/denvau.mp3`)
			}
			return api.sendMessage(msg, threadID, messageID);
		}
	}
	module.exports.run = function({ api, event, client, global }) {

}