const macaco = "$getServerVar[dineco]"
module.exports = [{
  name: "shop",
  usage: "Mostra items compraveis do servidor",
  code: `
$title[**( <:comprar:1036747347931177041> ) Loja**]
$description[
**<:gtx1050:1011395235529625650> GTX 1050 \`10,000\` $getServerVar[dineco]
<:rtx2060:1008362013166153739> RTX 2060 \`14,000\` $getServerVar[dineco]
<:rtx3070:1009146330574225408> RTX 3070 \`18,000\` $getServerVar[dineco]
<:rx5700:1009146505053081640> RX 5700 XT \`27,000\` $getServerVar[dineco]
<:rtx3090:1009146939339722772> RTX 3090 \`70,000\` $getServerVar[dineco]
<:ampere140:1009147436985487370> NVIDIA Ampere A40 \`100,00\` $getServerVar[dineco]**]
$color[303136]
$footer[$username;$authorAvatar]
$addSelectMenu[1;lojacompra;Selecione Algo para comprar!;1;1;no; | GTX 1050:10,000 💵:gtx1050_$authorID:no:<:gtx1050:1011395235529625650>; | RTX 2060:14,000 💵:rtx2060_$authorID:no:<:rtx2060:1008362013166153739>; | RTX 3070:18,000 💵:rtx3070_$authorID:no:<:rtx3070:1009146330574225408>; | RX 5700 XT:27,000 💵:rx5700_$authorID:no:<:rx5700:1009146505053081640>; | RTX 3090:70,000 💵:rtx3090_$authorID:no:<:rtx3090:1009146939339722772>; | NVIDIA Ampere A40:100,00 💵:amperea40_$authorID:no:<:ampere140:1009147436985487370>] 
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Shop]
$onlyIf[1!=1;comando desabilitado por conta de bug :pensive:, logo arrumo !]
`
}, {
  name: "lojacompra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[Comprado **GTX-1050**;;;;;yes]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];10000];$authorID]
$setGlobalUserVar[duragtx1050;$sum[$getGlobalUserVar[duragtx1050;$authorID];100];$authorID]
$setGlobalUserVar[bctplaca;true;$authorID]
$onlyif[$setGlobalUserVar[din;$authorID]>=10000;{
  "content": "**( <:errado:1032693701450936350> ) Você não tem \`10,000\`**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$interactionData[values[0]]==gtx1050_$authorID;]
`
}, {
  name: "lojacompra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[Comprado **RTX-2060**;;;;;yes]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];14000];$authorID]
$setGlobalUserVar[durartx2060;$sum[$getGlobalUserVar[durartx2060;$authorID];100];$authorID]
$setGlobalUserVar[bctplaca;true;$authorID]
$onlyif[$setGlobalUserVar[din;$authorID]>=14000;{
  "content": "**( <:errado:1032693701450936350> ) Você não tem \`14,000\`**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$interactionData[values[0]]==rtx2060_$authorID;]
`
}, {
  name: "lojacompra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[Comprado **NVIDIA-AMPERE-A40**;;;;;yes]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];100000];$authorID]
$setGlobalUserVar[duraamperea40;$sum[$getGlobalUserVar[duraamperea40;$authorID];100];$authorID]
$setGlobalUserVar[bctplaca;true;$authorID]
$onlyif[$setGlobalUserVar[din;$authorID]>=100000;{
  "content": "**( <:errado:1032693701450936350> ) Você não tem \`100,000\`**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$interactionData[values[0]]==amperea40_$authorID;]
`
}, {
  name: "lojacompra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[Comprado **RX-5700-XT**;;;;;yes]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];27000];$authorID]
$setGlobalUserVar[durarx5700;$sum[$getGlobalUserVar[durarx5700;$authorID];100];$authorID]
$setGlobalUserVar[bctplaca;true;$authorID]
$onlyif[$setGlobalUserVar[din;$authorID]>=27000;{
  "content": "**( <:errado:1032693701450936350> ) Você não tem \`27,000\`**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$interactionData[values[0]]==rx5700_$authorID;]
`
}, {
  name: "lojacompra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[Comprado **RTX-3090**;;;;;yes]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];27000];$authorID]
$setGlobalUserVar[durarx5700;$sum[$getGlobalUserVar[durarx5700;$authorID];100];$authorID]
$setGlobalUserVar[bctplaca;true;$authorID]
$onlyif[$setGlobalUserVar[din;$authorID]>=70000;{
  "content": "**( <:errado:1032693701450936350> ) Você não tem \`70,000\`**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$interactionData[values[0]]==rtx3090_$authorID;]
`
}, {
  name: "lojacompra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionReply[Comprado **RTX-3070**;;;;;yes]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];18000];$authorID]
$setGlobalUserVar[durartx3070;$sum[$getGlobalUserVar[durartx3070;$authorID];100];$authorID]
$setGlobalUserVar[bctplaca;true;$authorID]
$onlyif[$setGlobalUserVar[din;$authorID]>=18000;{
  "content": "**( <:errado:1032693701450936350> ) Você não tem \`18,000\`**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$interactionData[values[0]]==rtx3070_$authorID;]
`
}]