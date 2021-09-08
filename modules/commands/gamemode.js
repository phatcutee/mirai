module.exports.config = {
	name: "gamemode",
	version: "1.0.0",
	hasPermssion: 0,
	credits: "Hieu2004XZ",
	description: "Lệnh Minecraft for fun, không có tác dụng gì cả",
	commandCategory: "other",
	usages: "[s/c/a,...]",
	cooldowns: 5,
};

module.exports.run = async ({ api, event, args }) => {
	switch (args[0]) {
		case: "survival":
		case: "0";
		case: "s"; {
			return api.sendMessage("Set own game mode to Survival Mode", threadID, messageID);
		}
		case: "creative":
		case: "1":
		case: "c": {
			return api.sendMessage("Set own game mode to Creative Mode", threadID, messageID);
		}
		case: "adventure":
		case: "2":
		case: "a": {
			return api.sendMessage("Set own game mode to Adventure Mode", threadID, messageID);
		}
		case: "spectator":
		case: "3": {
			return api.sendMessage("Set own game mode to Spectator Mode", threadID, messageID);
		}
		default: {
			return global.utils.throwError(this.config.name, threadID, messageID);
		}
	}
}