module.exports = {
  config: {
    name: "goiadmin",
    version: "1.0.0",
    author: "Siegfried Samá",
    countDown: 0,
    role: 0,
    description: {
      en: "Automatically responds when admin is tagged or name is mentioned"
    },
    category: "events",
  },

  onStart: async function () {},

  onChat: async function ({ api, event }) {
    const { threadID, messageID, body, mentions } = event;
    if (!body && (!mentions || Object.keys(mentions).length === 0)) return;

    const GOD_UID = "100070646281323";

    const tagReplies = [
      "busy po owner ko",
      "may ginagawa po owner ko, kaya wag mo sya imention",
      "busy po mag code admin admin",
      "bat mo mo minent owner ko?"
    ];

    const taggedAdminIDs = Object.keys(mentions || {});
    const isAdminTagged = taggedAdminIDs.some(id => id === GOD_UID);

    if (isAdminTagged) {
      const reply = tagReplies[Math.floor(Math.random() * tagReplies.length)];
      return api.sendMessage(reply, threadID, messageID);
    }
  }
};
