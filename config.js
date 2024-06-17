const fs = require('fs-extra')
if (fs.existsSync('config.env')) require('dotenv').config({ path: __dirname+'/config.env' })


//═══════[Required Variables]════════\\
global.owner = process.env.OWNER_NUMBER.split(",")
global.mongodb = process.env.MONGODB_URI || "mongodb://mongo:425aa3ee42A-22FEBG56F4GE6efGEAh-@roundhouse.proxy.rlwy.net:20833"
global.port= process.env.PORT || 5000
global.email = 'ibraahadams@gmail.com'
global.github = 'https://github.com/ibrahimaitech/BLACK-PANTHER-XMD'
global.location = 'Kenya/Bungoma'
global.gurl = 'https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y' // add your username
global.sudo = process.env.SUDO || '254739937062,254710772666'
global.devs = '254739937062,254710772666';
global.website = 'https://whatsapp.com/channel/0029VaZuGSxEawdxZK9CzM0Y' //wa.me/+91000000000000
global.THUMB_IMAGE = process.env.THUMB_IMAGE || 'https://telegra.ph/file/85fbb117198be75c500ef.jpg'
module.exports = {
  botname:   process.env.BOT_NAME === undefined ? '𝗕𝗟𝗔𝗖𝗞-𝗣𝗔𝗡𝗧𝗛𝗘𝗥-𝗠𝗗' : process.env.BOT_NAME,
  ownername: process.env.OWNER_NAME === undefined ? '254739937062,254710772666' : process.env.OWNER_NAME,
  sessionName:  process.env.SESSION_ID === undefined ? false : process.env.SESSION_ID,
  author:  process.env.PACK_INFO.split(";")[0] === undefined ? 'excel' : process.env.PACK_INFO.split(";")[0],
  auto_read_status :  process.env.AUTO_READ_STATUS === undefined ? false : process.env.AUTO_READ_STATUS,
  packname:  process.env.PACK_INFO.split(";")[1] === undefined ? '𝑰𝒃𝒓𝒂𝒉𝒊𝒎-𝑨𝒅𝒂𝒎𝒔' : process.env.PACK_INFO.split(";")[1],
  autoreaction:  process.env.AUTO_REACTION  === undefined ? false : process.env.AUTO_REACTION ,
  antibadword :  process.env.ANTI_BAD_WORD === undefined ? 'nbwoed' : process.env.ANTI_BAD_WORD,
  alwaysonline:  process.env.ALWAYS_ONLINE === undefined ? 𝒕𝒓𝒖𝒆 : process.env.ALWAYS_ONLINE,
  antifake : process.env.FAKE_COUNTRY_CODE === undefined ? '971' : process.env.FAKE_COUNTRY_CODE,
  readmessage:  process.env.READ_MESSAGE === undefined ? false : process.env.READ_MESSAGE,
  auto_status_saver: process.env.AUTO_STATUS_SAVER === undefined ? 𝒕𝒓𝒖𝒆 : process.env.AUTO_STATUS_SAVER,
  HANDLERS:  process.env.PREFIX === undefined ? ['.'] : process.env.PREFIX,
  warncount : process.env.WARN_COUNT === undefined ? 3 : process.env.WARN_COUNT,
  disablepm:  process.env.DISABLE_PM === undefined ? false : process.env.DISABLE_PM,
  levelupmessage:  process.env.LEVEL_UP_MESSAGE === undefined ? false : process.env.LEVEL_UP_MESSAGE,
  antilink:  process.env.ANTILINK_VALUES === undefined ? 'chat.whatsapp.com' : process.env.ANTILINK_VALUES,
  antilinkaction: process.env.ANTILINK_ACTION === undefined ? 'remove' : process.env.ANTILINK_ACTION,
  BRANCH: 'main', 
  ALIVE_MESSAGE:  process.env.ALIVE_MESSAGE === undefined ? '' : process.env.ALIVE_MESSAGE,
  afk:  process.env.AFK ||true,
  autobio:  process.env.AUTO_BIO === undefined ? '' : process.env.AUTO_BIO,
  OPENAI_API_KEY:  process.env.OPENAI_API_KEY === undefined ? false : process.env.OPENAI_API_KEY,
  heroku:  process.env.heroku === undefined ? false : process.env.heroku,
  HEROKU: {
    HEROKU: process.env.HEROKU ||false,
    API_KEY: process.env.HEROKU_API_KEY === undefined ? '' : process.env.HEROKU_API_KEY,
    APP_NAME: process.env.HEROKU_APP_NAME === undefined ? '' : process.env.HEROKU_APP_NAME
},
  VERSION: process.env.VERSION === undefined ? 'v.0.0.3' : process.env.VERSION,
  LANG: process.env.THEME|| 'SAVIYA',
  WORKTYPE: process.env.WORKTYPE === undefined ? 'public' : process.env.WORKTYPE
};


let file = require.resolve(__filename)
fs.watchFile(file, () => {
	fs.unwatchFile(file)
	console.log(`Update'${__filename}'`)
    delete require.cache[file]
	require(file)
})
