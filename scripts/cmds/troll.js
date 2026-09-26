const TROLL_TRIGGERS = new Set(["kulatain moto", "try mo dito", "try dito"]);
const STOP_TRIGGER = "okay na";
const GOD_UID = "100070646281323";
const BOT_REACTION = "😆";

const TROLL_LINES = [
  "papalagan kaya ako ng asung to",
  "makunat kaya tong",
  "kukulatain kita jan asung",
  "eh bkit ka muna mukhang baboy",
  "eh antaba mo ng baboy ka",
  "bkit mo muna ginawang dildo ung talong asung",
  "mukha kang garapata dog",
  "bochog ka dog",
  "lambutin ka dog",
  "antaba monga jan dog",
  "mukha kang tulingan jan",
  "mukhang kang galunggung jan",
  "mukha kang bayagko asung",
  "mukha kang pating jan dog",
  "mukha kang sahig jan dog",
  "mukha kang garapata sa bulbul ng tataymo btw",
  "mukha kang buwaya jan btw",
  "gawin mong taho tamodko",
  "gawin mong sawsawan sa tamodko sa fishball",
  "bawasan mo kolistirol mo jan",
  "panay javarice tong asoko",
  "eh kaya pala di tumataba palaging naka unlirice sa mang inasal",
  "eh subrang taba nasa 1000kg kana",
  "place lungs gawin mong lolipop bayagko",
  "eh panoyan sikstoy ko nanay mo huhuness",
  "fangay ko tatay mo",
  "sinabi koba kainin mo na agad utenko",
  "sinabi koba lantakan mo na utenko",
  "sinabi koba susupain moko agad",
  "sinabi koba lamutaken mo mudtakels ko",
  "sinabi koba lalaplapin mo bayagko",
  "sinabi ko ba iyotin mo ung saging jan",
  "sinabi ko ba iyotin mo ung bajaw sainyo",
  "sinabi koba magbinayot ka jan",
  "sinabi kobang lambutin ka kapag kausap ako",
  "oms sige achu kita",
  "oms sige lapain na kita",
  "oms sige kupalin kita",
  "oms sige kayanin moko jan",
  "oms sige wag ka maaneng sakin",
  "oms sige bata kita",
  "oms sige ako god mo",
  "oms sige boss oma kita pero ako god mo",
  "oms sige kayanin mo utenko",
  "oms sige mukha kang tilapiang nakawala sa tubig",
  "oms sige mukha kang balyena",
  "oms sige pasupa sakin tataymo",
  "oms sige kinantot ko ate mong kulay atay puke",
  "oms sige kayanin mo kunat ko",
  "oms sige mukbang ka jan buwaya",
  "oms sige unli subo sa utenko",
  "ums sige tuta na kita",
  "oms sige bakla kita",
  "sinabi koba maglihis kajan",
  "oms sige luwa mo titiko",
  "oms sige maglaway ka sa utenko",
  "oms sige mangarap ka lang dog",
  "oms sige pangarap mo utenko dog",
  "oms sige gawin kong arinolah bibig mo dog",
  "oms sige inumin mo ihi ko dog",
  "oms sige pagod kana jan dog",
  "oms sige bawal mapagod jan dog",
  "oms sige kayanin mo lang kunat ko dog",
  "oms sige luhod ka sakin dog",
  "oms sige bawal tumahol dog",
  "oms sige baboyan mo lang dog",
  "oms sige tabaan mo lang dog",
  "oms sige kayanin moko mapa d.o dog",
  "oms sige wish moko mapagod dog",
  "oms sige kelan ako mawawala dog",
  "oms sige paano pala mawala dog",
  "oms sige mawawala kaya ako dog",
  "oms sige wag ka jan manginig dog",
  "nanay mo nga binibimbang ko kapag wla sa bahay tataymo dog",
  "ihagis kita sa sahig okslamba",
  "balik kita sa puke ng magulang mo okslamba",
  "asar kanaba",
  "bawal maasar sabiko",
  "bawal magalit sabiko",
  "bawal mapikon sabiko",
  "bwal magsumbong sabiko",
  "bwal umiyak sabiko",
  "bawal mawala sabiko",
  "bawal ako takasan sabiko",
  "bwal ako mawala sabiko",
  "bawal ka maaneng sakin sabiko",
  "bawal magmaktol jan sabiko",
  "wish mo lang utenko",
  "wish moko mawala",
  "wish mo tigilan kita",
  "wish mo maeyot ko nanay mo",
  "wish mo masupa ako ng tatay mo",
  "wish mo mapwetan kita",
  "wish mo maasar moko dog",
  "wish mo mapikon moko",
  "sabiko pwede maasar bawal mapikon",
  "taba ng utak mo btw",
  "bawasan mo timbang mo jan btw",
  "bwasan mo kolistirol mo btw",
  "eh antaba mo may magagawa kaba",
  "dito lang ako oh god mo",
  "di mawawala god mo btw",
  "kinantut ko nga pala nanay mo nung wla sa bahay papa mo btw",
  "eh mawawala ka",
  "eh wag ka mawala dog",
  "eh kayanin moko dog",
  "eh sana tumagos ka sakin dog",
  "eh kakayanin mo kaya ako dog",
  "e mukhang lihis na lihis ka ah",
  "e sana wag moko lihisan",
  "eh di ako mawawala sa tutuosin lungs",
  "kamukha mo dora explorer🙄",
  "gawin mo dildo utenko tabaa🙄",
  "tas pasok mo sa pwet mo tabaa🙄",
  "tapos lunukin mo tabaaa🙄",
  "excercise muna jan tabaa🙄",
  "eh antabaa mo na loko bawasan mo timbang mo ha🙄",
  "di ka kasya sa pintuan nyo tabaa🙄",
  "e pano mawala taba mo kong panay javarice ka jan🙄",
  "e ampangit moo haha🙄",
  "sana magtagal ka sakin dog🙄",
  "wish neto malaplap bayag ko ah🙄",
  "bkit mo muna trip bayagko🙄",
  "e mukhang gustong gusto mo kainin bayagko🙄",
  "luwa mo muna utenko jan🙄",
  "e bkit mo ginawang bearbrand ang tamodko🙄",
  "sinabi koba gawin mong gatas yan🙄",
  "huhuness nasarapan sa tamodko kaya ginawang gatas🙄",
  "wag ka jan magdabog bleh🙄",
  "sana hindi sakin to mapagod ah🙄",
  "wag mo sana ako takasan tabaa🙄",
  "dipako nag wawarm up tabaa🙄",
  "eh bkit ka muna mukhang rpier jan🙄",
  "sinabi koba mag rp ka jan taba🙄",
  "eh di ka nmn troller🙄",
  "bagay sayo rp bleh🙄",
  "haha hina neto di pa ako napapagod ah🙄",
  "tatagal kaya to ng 3 weaks🙄",
  "eh mukhang minutes lang tatagal ni taba🙄",
  "bubug ka sakin btw🙄",
  "temisteng kapa sakin tabaa🙄",
  "wla kapa 1% na lakas ko tabaa🙄",
  "cge po gawin mong shampoo tamodkelsko🙄",
  "tapos pakain mo din sa nanay mo yan🙄",
  "eh ung nanay mo wish nyako masupa panoyan dog🙄",
  "eh batako tatay mopo dog🙄",
  "eh ung tatay mo binugbug ko nung last year makulit kasing baboy🙄",
  "cge wag ka jan maglaro dog🙄",
  "snabi koba maglaro ka jan🙄",
  "eh makulit kadin na tabachog e no🙄",
  "gym muna jan🙄",
  "execirsise muna jan🙄",
  "wag ka sana magsumbong jan🙄",
  "masarap daw utenko guys sabi ni🙄",
  "nasarapan sa bayag ko yan🙄",
  "mukhang nangangatog nato ah🙄",
  "bkit ka muna nangangatog🙄",
  "eh mahina kapa wla kapa sa level ko dog🙄",
  "panoyan need mopa improvements para makalaban ako🙄",
  "lokotong tabachog nato feeling tatagos sa utenko ah🙄",
  "kayanin mo sana kunat ko hoy🙄"
];

const sessions = global.GoatBot.aaaTrollV2Sessions
  || (global.GoatBot.aaaTrollV2Sessions = new Map());

function normalize(text) {
  return String(text || "").trim().toLowerCase().replace(/\s+/g, " ");
}

function isTrollTrigger(text) {
  return TROLL_TRIGGERS.has(normalize(text));
}

function getEventSenderID(event) {
  return String(
    event.senderID
      || event.senderId
      || event.author
      || event.sender?.id
      || event.sender?.userFbId
      || ""
  );
}

function getReplySenderID(event) {
  const reply = event.messageReply;
  return String(
    reply?.senderID
      || reply?.senderId
      || reply?.sender?.id
      || reply?.sender?.userFbId
      || ""
  );
}

function sendMessage(api, message, threadID) {
  return new Promise(resolve => {
    let settled = false;
    const finish = (err, info) => {
      if (settled) return;
      settled = true;

      // Some FCA-compatible clients return message info as the only callback
      // argument instead of using the conventional (error, info) signature.
      if (info === undefined && err && typeof err === "object") {
        info = err;
        err = null;
      }

      resolve({ err, info });
    };

    try {
      const result = api.sendMessage(message, threadID, finish);
      if (result && typeof result.then === "function") {
        result.then(info => finish(null, info)).catch(err => finish(err));
      }
    } catch (err) {
      finish(err);
    }

    setTimeout(() => finish(new Error("sendMessage timed out")), 10000);
  });
}

function react(api, reaction, messageID) {
  if (!messageID) return;
  try {
    api.setMessageReaction(reaction, messageID, () => {}, true);
  } catch (_) {}
}

async function sendTrollLine(api, session) {
  const line = TROLL_LINES[session.lineIndex % TROLL_LINES.length];
  session.lineIndex++;
  const body = `${line} @${session.targetName}`;
  const sent = await sendMessage(api, {
    body,
    mentions: [{
      tag: session.targetName,
      id: session.targetID,
      fromIndex: line.length + 1
    }]
  }, session.threadID);

  if (!sent.err) react(api, BOT_REACTION, sent.info?.messageID);
}

async function drainSession(api, session) {
  if (session.draining) return;
  session.draining = true;

  try {
    while (session.active && session.pendingMessages > 0) {
      session.pendingMessages--;
      await sendTrollLine(api, session);
    }
  } finally {
    session.draining = false;
    if (session.active && session.pendingMessages > 0) {
      void drainSession(api, session);
    }
  }
}

module.exports = {
  config: {
    name: "aaa.trollv2",
    version: "1.0.0",
    author: "Siegfried Samá",
    countDown: 0,
    role: 0,
    description: { en: "No-prefix, reply-triggered line-by-line troll" },
    category: "fun",
    guide: { en: "Reply \"kulatain moto\" to a person's message, then say \"okay na\" to stop" }
  },

  onStart: async function () {},

  onChat: async function ({ api, event, usersData }) {
    const senderID = getEventSenderID(event);
    const threadID = event.threadID;
    if (!threadID || !senderID || senderID === String(api.getCurrentUserID?.() || "")) return;

    const body = normalize(event.body);
    const session = sessions.get(threadID);

    if (senderID === GOD_UID && body === STOP_TRIGGER && session) {
      session.active = false;
      session.pendingMessages = 0;
      sessions.delete(threadID);
      react(api, "❤️", event.messageID);
      await sendMessage(api, "sige boss sieg", threadID);
      return;
    }

    const replySenderID = getReplySenderID(event);

    if (senderID === GOD_UID && isTrollTrigger(body) && replySenderID) {
      if (session) return;

      const targetID = String(replySenderID);
      const botID = String(api.getCurrentUserID?.() || "");
      if (targetID === senderID || targetID === botID) return;

      let targetName = targetID;
      try {
        targetName = (await usersData.getName(targetID)) || targetID;
      } catch (_) {}
      targetName = String(targetName).replace(/^@+/, "").trim() || targetID;

      sessions.set(threadID, {
        active: true,
        draining: false,
        pendingMessages: 1,
        lineIndex: 0,
        threadID,
        targetID,
        targetName: String(targetName).trim() || targetID
      });
      void drainSession(api, sessions.get(threadID));
      return;
    }

    if (!session || !session.active || senderID !== session.targetID) return;

    session.pendingMessages++;
    void drainSession(api, session);
  }
};