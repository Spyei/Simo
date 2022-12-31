const aoijs = require("aoi.js")

const bot = new aoijs.Bot({
  token: process.env.token,
  prefix: ["$getServerVar[prefixo]", "<@$clientID>"],
  intents: 'all',
})

process.on('unhandRejection', (reason, promise) => {
  console.log(reason, promise)
});

process.on('uncaughtException', (error, origin) => {
   console.log(error, origin)
});

bot.variables({
  //bacljkacj
  playerbj: "0",
  dealerbj: "0",
  bjactive: "false",
  //bticoin
  pixes: "undefined/undefined",
  dados: "",
  bct: "0",
  durartx2060: "0",
  duragtx1050: "0",
  durartx3070: "0",
  durarx5700: "0",
  durartx3090: "0",
  duraamperea40: "0",
  bctplaca: "false",
  bctgrafico: "7",
  bctactive: "false",
  //economia
  modo: "global",
  promocode: "undefined/undefined/undefined",
  playerbj: "",
  transa: "Sem Transações",
  pises: "undefined/undefined",
  pay: "",
  dia: "1",
  total: "0",
  din: "0",
  banco: "0",
  trabai: "teta",
  dineco: "<:dinheiros:1036272118729560194>",
  //bet
  user2: "",
  user1: "",
  quantia: "",
  multi: "0",
  //variados
  prefixo: "-",
  //loja
  lojaserver: "Sem lojas",
  lojaplayer: "false",
})

bot.onInteractionCreate();

bot.status({
  text: "Simo está em: $serverCount Servidores",
  type: "PLAYING",
  status: "online",
  time: 1
})

bot.onMessage()
const loader = new aoijs.LoadCommands(bot)
loader.load(bot.cmd, "./commands/")
