const axios = require("axios");

const enabledThreads = new Map();

const prefix = () => global.GoatBot?.config?.prefix || "/";

module.exports = {
  config: {
    name: "simv2",
    version: "1.1.0",
    author: "Siegfried Samá",
    countDown: 0,
    role: 0,
    shortDescription: "Auto-reply sa lahat ng mensahe gamit ang SimSimi",
    longDescription: "Kapag naka-on, awtomatikong sumasagot ang bot gamit ang SimSimi API sa bawat mensaheng natanggap sa GC.",
    category: "fun",
    guide: {
      en: "{pn} on — i-activate ang simv2 sa GC na ito\n{pn} off — i-deactivate\n{pn} status — tingnan kung naka-on o off"
    }
  },

  onStart: async function ({ event, args, message }) {
    const { threadID } = event;
    const sub = (args[0] || "").toLowerCase();

    if (sub === "on") {
      enabledThreads.set(threadID, true);
      return message.reply(
        "✅ SIMV2 ON!\n" +
        "automatic nako nagrereply"
      );
    }

    if (sub === "off") {
      enabledThreads.set(threadID, false);
      return message.reply(
        "🔕 SIMV2 OFF.\n" +
        "di na ako sasagot"
      );
    }

    if (sub === "status") {
      const state = enabledThreads.get(threadID) ? "🟢 ON" : "🔴 OFF";
      return message.reply(
        `📊 SIMV2 STATUS: ${state}\n\n` +
        `Gamitin ang:\n• simv2 on — i-activate\n• simv2 off — i-deactivate`
      );
    }

    return message.reply(
      "📖 SIMV2 — Auto-reply gamit SimSimi\n\n" +
      "• simv2 on — i-activate\n" +
      "• simv2 off — i-deactivate\n" +
      "• simv2 status — tingnan ang status"
    );
  },

  onChat: async function ({ api, event }) {
    const { threadID, senderID, messageID, body } = event;

    if (!enabledThreads.get(threadID)) return;

    // ignore empty messages or messages starting with the bot prefix
    if (!body || !body.trim()) return;
    if (body.trim().startsWith(prefix())) return;

    // ignore the bot's own messages
    const botID = String(api.getCurrentUserID());
    if (String(senderID) === botID) return;

    try {
      const res = await axios.get("https://urangkapolka.vercel.app/api/simsimi", {
        params: { query: body.trim() }
      });

      const reply = res.data?.result?.reply;
      if (!reply) return;

      await api.sendMessage(reply, threadID, null, messageID);
    } catch (err) {
      console.error("[simv2] SimSimi API error:", err.message);
    }
  }
};
