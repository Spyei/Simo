module.exports = [{
  name: "boxs",
  usage: "Abra uma caixa e veja sua sorte",
  aliases: ['box', 'caixa', 'bx'],
  code: `
$title[1;**( <:caixa:1035904021317296128> ) Loja de caixas**]
$description[1;
Clique abaixo e compre uma caixa desejada!
<:caixa:1035904021317296128> Normal » \`1,000\` $getServerVar[dineco]
<:caixa:1035904021317296128> Incomum » \`2,000\` $getServerVar[dineco]
<:caixa:1035904021317296128> Rara » \`8,000\` $getServerVar[dineco]
<:caixa:1035904021317296128> Épica » \`15,000\` $getServerVar[dineco]
<:caixa:1035904021317296128> Mystica » \`150,000\` $getServerVar[dineco]
<:caixa:1035904021317296128> Lendaria » \`1,000,000\` $getServerVar[dineco]
]
$color[303136]
$footer[1;$username;$authorAvatar]
$addButton[1;Caixa Normal;success;1caixa_$authorID;no;<:caixa:1035904021317296128>;]
$addButton[1;Caixa Incomum;success;2caixa_$authorID;no;<:caixa:1035904021317296128>;]
$addButton[1;Caixa Rara;success;3caixa_$authorID;no;<:caixa:1035904021317296128>;]
$addButton[2;Caixa Épica;danger;4caixa_$authorID;no;<:caixa:1035904021317296128>;]
$addButton[2;Caixa Mytica;danger;5caixa_$authorID;no;<:caixa:1035904021317296128>;]
$addButton[2;Caixa Lendaria;danger;6caixa_$authorID;no;<:caixa:1035904021317296128>;]
$globalCooldown[3m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para abrir caixas novamente!**}{color:RED}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Box]
`
},
{
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[800;2000]];$authorID]
$interactionedit[**<:caixa:1035904021317296128> Você Abriu a caixa normal e ganhou** \`$numberSeparator[$random[800;2000]]\` $getServerVar[dineco]]
$wait[3s]
$interactionupdate[**<:caixa:1035904021317296128> Abrindo Caixa Normal...**]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - boxNormal]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];1000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=1000;{
  "content": "**( <:errado:1032693701450936350> ) Você nao tem 1000 na carteira**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyif[$interactionData[customId]==1caixa_$authorID]
`
},
{
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[1500;3000]];$authorID]
$interactionedit[**<:caixa:1035904021317296128> Você Abriu a caixa incomum e ganhou** \`$numberSeparator[$random[1500;3000]]\` $getServerVar[dineco]]
$wait[3s]
$interactionupdate[**<:caixa:1035904021317296128> Abrindo Caixa Incomum...**]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - boxIncomum]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];2000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=2000;{
  "content": "**( <:errado:1032693701450936350> ) Você nao tem 2000 na carteira**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyif[$interactionData[customId]==2caixa_$authorID]
`
},
{
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[7000;10000]];$authorID]
$interactionedit[**<:caixa:1035904021317296128> Você Abriu a caixa rara e ganhou** \`$numberSeparator[$random[7000;10000]]\` $getServerVar[dineco]]
$wait[3s]
$interactionupdate[**<:caixa:1035904021317296128> Abrindo Caixa Rara...**]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - boxRara]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];8000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=8000;{
  "content": "**( <:errado:1032693701450936350> ) Você nao tem 8000 na carteira**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyif[$interactionData[customId]==3caixa_$authorID]
`
},
{
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[13000;18000]];$authorID]
$interactionedit[**<:caixa:1035904021317296128> Você Abriu a caixa épica e ganhou** \`$numberSeparator[$random[13000;18000]]\` $getServerVar[dineco]]
$wait[3s]
$interactionupdate[**<:caixa:1035904021317296128> Abrindo Caixa Épica...**]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - boxÉpica]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];15000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=15000;{
  "content": "**( <:errado:1032693701450936350> ) Você nao tem 8000 na carteira**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyif[$interactionData[customId]==4caixa_$authorID]
`
},
{
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[130000;200000]];$authorID]
$interactionedit[**<:caixa:1035904021317296128> Você Abriu a caixa Mystica e ganhou** \`$numberSeparator[$random[130000;200000]]\` $getServerVar[dineco]]
$wait[3s]
$interactionupdate[**<:caixa:1035904021317296128> Abrindo Caixa Mystica...**]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - boxMystica]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];150000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=150000;{
  "content": "**( <:errado:1032693701450936350> ) Você nao tem 150000 na carteira**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyif[$interactionData[customId]==5caixa_$authorID]
`
},
{
  type: "interaction",
  prototype: "button",
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[900000;2000000]];$authorID]
$interactionedit[**<:caixa:1035904021317296128> Você Abriu a caixa lendaria e ganhou** \`$numberSeparator[$random[900000;2000000]]\` $getServerVar[dineco]]
$wait[3s]
$interactionupdate[**<:caixa:1035904021317296128> Abrindo Caixa Lendaria...**]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - boxLendaria]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];1000000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=1000000;{
  "content": "**( <:errado:1032693701450936350> ) Você nao tem 150000 na carteira**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyif[$interactionData[customId]==6caixa_$authorID]
`
},
]