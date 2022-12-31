module.exports = [{
  name: "bit",
  aliases: ["bitcoin", "minerar", "mine"],
  usage: "minera bitcoins ao clicar no botao, caso queira vender suas bitcoins, espere ela ficar com um preço alto, ou seja positivo, nao venda ela com preços negativos!",
  $if: "v4",
  code: `
$title[**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**]
$description[
**Para começar a minerar basta clicar no botao abaixo!
Suas Placas:**
\`$getGlobalUserVar[duragtx1050;$authorID]%\` **GTX-1050** <:gtx1050:1011395235529625650>
\`$getGlobalUserVar[durartx2060;$authorID]%\` **RTX-2060** <:rtx2060:1008362013166153739>
\`$getGlobalUserVar[durartx3070;$authorID]%\` **RTX-3070** <:rtx3070:1009146330574225408>
\`$getGlobalUserVar[durarx5700;$authorID]%\` **RX-5700-XT** <:rx5700:1009146505053081640>
\`$getGlobalUserVar[durartx3090;$authorID]%\` **RTX-3090** <:rtx3090:1009146939339722772>
\`$getGlobalUserVar[duraamperea40;$authorID]%\` **NVIDIA-AMPERE-A40** <:ampere140:1009147436985487370>
Suas BitCoin atuais \`$get[penis]\` <:btc:1007400980511477830>
]
$let[penis;$cropText[$getGlobalUserVar[bct;$authorID];7]]
$footer[$username;$authorAvatar]
$color[ORANGE]
$addButton[1;Menu Principal;secondary;menupbita_$authorID;no;<:direito:1003026093432913940>]
$addButton[1;Cotação/Atualizar;secondary;atubit_$authorID;no;<:grafico:1001297430458933289>]
$addButton[1;Vender;secondary;vender_$authorID;no;🛒]
$addButton[1;Minerar/Atualizar;secondary;minerar_$authorID;no;⛏]
$addSelectMenu[2;lojacompra;Selecione Algo para comprar!;1;1;no; | GTX 1050:10,000 💵:gtx1050_$authorID:no:<:gtx1050:1011395235529625650>; | RTX 2060:14,000 💵:rtx2060_$authorID:no:<:rtx2060:1008362013166153739>; | RTX 3070:18,000 💵:rtx3070_$authorID:no:<:rtx3070:1009146330574225408>; | RX 5700 XT:27,000 💵:rx5700_$authorID:no:<:rx5700:1009146505053081640>; | RTX 3090:70,000 💵:rtx3090_$authorID:no:<:rtx3090:1009146939339722772>; | NVIDIA Ampere A40:100,00 💵:amperea40_$authorID:no:<:ampere140:1009147436985487370>]  
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - BitCoin]
$onlyif[$getGlobalUserVar[bctplaca;$authorID]!=false;Você não tem placas de videos, use $getServerVar[prefixo]\`shop\`]
`
}, {
  type: 'interaction',
  prototype: 'button',
  code: `
$interactionUpdate[;$editMessage[$messageID;{newEmbed:
{title:**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**}
{description:
**Para começar a minerar basta clicar no botao abaixo!
Suas Placas:**
\`$getGlobalUserVar[duragtx1050;$authorID]%\` **GTX-1050** <:gtx1050:1011395235529625650>
\`$getGlobalUserVar[durartx2060;$authorID]%\` **RTX-2060** <:rtx2060:1008362013166153739>
\`$getGlobalUserVar[durartx3070;$authorID]%\` **RTX-3070** <:rtx3070:1009146330574225408>
\`$getGlobalUserVar[durarx5700;$authorID]%\` **RX-5700-XT** <:rx5700:1009146505053081640>
\`$getGlobalUserVar[durartx3090;$authorID]%\` **RTX-3090** <:rtx3090:1009146939339722772>
\`$getGlobalUserVar[duraamperea40;$authorID]%\` **NVIDIA-AMPERE-A40** <:ampere140:1009147436985487370>
Suas BitCoin atuais \`$get[penis]\` <:btc:1007400980511477830>
}
{footer:$username:$authorAvatar}
{color:ORANGE}
}]]
$let[penis;$cropText[$getGlobalUserVar[bct;$authorID];7]]
$suppressErrors
$onlyIf[$interactionData[customId]==menupbita_$authorID;]
`
}, {
  type: 'interaction',
  $if: "v4",
  prototype: 'button',
  code: `
$if[$getGlobalUserVar[durarx5700;$authorID]!=0]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{title:**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**}
{field:**Sua placa **RX-5700-XT** está minerando**:\`Caso clique novamente, vai atualizar o status dela para o atual\`:yes}
{field:Quantiade de bitcoins atuais:\`$get[penis]\` <:btc:1007400980511477830>:no}
{field:Durabiliadade atual dela:\`$getGlobalUserVar[durarx5700;$authorID]%\` <:rx5700:1009146505053081640>:no}
{color:ORANGE}}]]
$setGlobalUserVar[bctactive;true;$authorID]
$setGlobalUserVar[durarx5700;$sub[$getGlobalUserVar[durarx5700;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[100;200];$authorID]
$onlyIf[$getGlobalUserVar[durarx5700;$authorID]>0;{
  "content": "**( <:simo_errado:1020701692255277076> ) Sua placa quebrou, resultado final: \`$getGlobalUserVar[bct;$authorID]\` <:btc:1007400980511477830>**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$endif
$if[$getGlobalUserVar[duragtx1050;$authorID]!=0]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{title:**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**}
{field:**Sua placa **GTX-1050** está minerando**:\`Caso clique novamente, vai atualizar o status dela para o atual\`:yes}
{field:Quantiade de bitcoins atuais:\`$get[penis]\` <:btc:1007400980511477830>:no}
{field:Durabiliadade atual dela:\`$getGlobalUserVar[duragtx1050;$authorID]%\` <:gtx1050:1011395235529625650>:no}
{color:ORANGE}}]]
$setGlobalUserVar[bctactive;true;$authorID]
$setGlobalUserVar[duragtx1050;$sub[$getGlobalUserVar[duragtx1050;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.000$random[50;99]];$authorID]
$onlyIf[$getGlobalUserVar[duragtx1050;$authorID]>0;{
  "content": "**( <:simo_errado:1020701692255277076> ) Sua placa quebrou, resultado final: \`$getGlobalUserVar[bct;$authorID]\` <:btc:1007400980511477830>**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$endif
$if[$getGlobalUserVar[durartx2060;$authorID]!=0]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{title:**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**}
{field:**Sua placa **RTX-2060** está minerando**:\`Caso clique novamente, vai atualizar o status dela para o atual\`:yes}
{field:Quantiade de bitcoins atuais:\`$get[penis]\` <:btc:1007400980511477830>:no}
{field:Durabiliadade atual dela:\`$getGlobalUserVar[durartx2060;$authorID]%\` <:rtx2060:1008362013166153739>:no}
{color:ORANGE}}]]
$setGlobalUserVar[bctactive;true;$authorID]
$setGlobalUserVar[durartx2060;$sub[$getGlobalUserVar[durartx2060;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[100;300]];$authorID]
$onlyIf[$getGlobalUserVar[durartx2060;$authorID]>0;{
  "content": "**( <:simo_errado:1020701692255277076> ) Sua placa quebrou, resultado final: \`$getGlobalUserVar[bct;$authorID]\` <:btc:1007400980511477830>**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$endif
$if[$getGlobalUserVar[durartx3070;$authorID]!=0]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{title:**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**}
{field:**Sua placa **RTX-3070** está minerando**:\`Caso clique novamente, vai atualizar o status dela para o atual\`:yes}
{field:Quantiade de bitcoins atuais:\`$get[penis]\` <:btc:1007400980511477830>:no}
{field:Durabiliadade atual dela:\`$getGlobalUserVar[durartx3070;$authorID]%\` <:rtx3070:1009146330574225408>:no}
{color:ORANGE}}]]
$setGlobalUserVar[bctactive;true;$authorID]
$setGlobalUserVar[durartx3070;$sub[$getGlobalUserVar[durartx3070;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[100;400]];$authorID]
$onlyIf[$getGlobalUserVar[durartx3070;$authorID]>0;{
  "content": "**( <:simo_errado:1020701692255277076> ) Sua placa quebrou, resultado final: \`$getGlobalUserVar[bct;$authorID]\` <:btc:1007400980511477830>**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$endif
$if[$getGlobalUserVar[durartx3090;$authorID]!=0]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{title:**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**}
{field:**Sua placa **RTX-3070** está minerando**:\`Caso clique novamente, vai atualizar o status dela para o atual\`:yes}
{field:Quantiade de bitcoins atuais:\`$get[penis]\` <:btc:1007400980511477830>:no}
{field:Durabiliadade atual dela:\`$getGlobalUserVar[durartx3090;$authorID]%\` <:rtx3090:1009146939339722772>:no}
{color:ORANGE}}]]
$setGlobalUserVar[bctactive;true;$authorID]
$setGlobalUserVar[durartx3090;$sub[$getGlobalUserVar[durartx3090;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[200;500]];$authorID]
$onlyIf[$getGlobalUserVar[durartx3090;$authorID]>0;{
  "content": "**( <:simo_errado:1020701692255277076> ) Sua placa quebrou, resultado final: \`$getGlobalUserVar[bct;$authorID]\` <:btc:1007400980511477830>**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$endif
$if[$getGlobalUserVar[duraamperea40;$authorID]!=0]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{title:**( <:simo_coin:1020681355677417533> ) Mineração de BitCoins**}
{field:**Sua placa **NVIDIA-AMPERE-A40** está minerando**:\`Caso clique novamente, vai atualizar o status dela para o atual\`:yes}
{field:Quantiade de bitcoins atuais:\`$get[penis]\` <:btc:1007400980511477830>:no}
{field:Durabiliadade atual dela:\`$getGlobalUserVar[duraamperea40;$authorID]%\` <:ampere140:1009147436985487370>:no}
{color:ORANGE}}]]
$setGlobalUserVar[bctactive;true;$authorID]
$setGlobalUserVar[duraamperea40;$sub[$getGlobalUserVar[duraamperea40;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[300;600]];$authorID]
$onlyIf[$getGlobalUserVar[duraamperea40;$authorID]>0;{
  "content": "**( <:simo_errado:1020701692255277076> ) Sua placa quebrou, resultado final: \`$getGlobalUserVar[bct;$authorID]\` <:btc:1007400980511477830>**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$endif
$SUPPRESSERRORS
$if[$random[1;10]==2]
$setServerVar[bctgrafico;$randomText[-1;-2;-3;-4;-5;1;2;3;4;5]]
$endif
$let[penis;$cropText[$getGlobalUserVar[bct;$authorID];7]]
$onlyIf[$interactionData[customId]==minerar_$authorID;]
`
}, {
  type: 'interaction',
  $if: "v4",
  prototype: 'button',
  code: `
$if[$getServerVar[bctgrafico]==1]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];1480];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`1,480\` $getSERVERVAR[dineco];;;;;yes]
$elseif[$getServerVar[bctgrafico]==2]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];1590];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`1,590\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==3]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];2612];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`2,612\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==4]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];2730];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`2,730\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==5]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];4790];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`4,790\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==6]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];6832];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`6,832\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==7]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];8970];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`8,970\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==8]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];11270];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`11,270\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==9]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];18500];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`18,500\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-1]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];770];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`770\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-2]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];680];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`680\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-3]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];588];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`588\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-4]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];468];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`468\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-5]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];335];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`335\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-6]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];215];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`215\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-7]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authoriD];14];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`14\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-8]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];130];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-130\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-9]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];400];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-410\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-10]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];562];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-562\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-11]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];678];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-678\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-12]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];512];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-512\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-13]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];732];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-732\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-14]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];1832];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-1,832\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-15]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];2608];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-2,608\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$elseif[$getServerVar[bctgrafico]==-16]
$setServerVar[bctgrafico;$randomText[$getServerVar[bctgrafico];-1;$getServerVar[bctgrafico];-2;$getServerVar[bctgrafico];-3;$getServerVar[bctgrafico];-4;$getServerVar[bctgrafico];-5;$getServerVar[bctgrafico];-6;$getServerVar[bctgrafico];-7;$getServerVar[bctgrafico];-8;$getServerVar[bctgrafico];-9;$getServerVar[bctgrafico];-10;$getServerVar[bctgrafico];-11;$getServerVar[bctgrafico];-12;$getServerVar[bctgrafico];-13;$getServerVar[bctgrafico];-14;$getServerVar[bctgrafico];-15;$getServerVar[bctgrafico];-16;$getServerVar[bctgrafico];1;$getServerVar[bctgrafico];2;$getServerVar[bctgrafico];3;$getServerVar[bctgrafico];4;$getServerVar[bctgrafico];5;$getServerVar[bctgrafico];6;$getServerVar[bctgrafico];7;$getServerVar[bctgrafico];8;$getServerVar[bctgrafico];9;$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];$getServerVar[bctgrafico];]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authoriD];4010];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]-0.010000];$authorID]
$interactionReply[Voce vendeu \`0.010000\` <:btc:1007400980511477830> por \`-4,010\` $getSERVERVAR[dineco];;;;;yes]
$endelseif
$else
$interactionUpdate[Não foi possivel vender por conta de bugs;;;;;yes]
$endif
$onlyif[$getGlobalUserVar[bct;$authorid]>=0.010000;{
  "content": "**( <:simo_errado:1020701692255277076> ) Você precisa de pelo menos 0.010000 <:btc:1007400980511477830> para vender!**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$interactionData[customId]==vender_$authorID;]
`
}, {
  name: "comprar bct",
  code: `
Escolha abaixo a quantia de bcts a ser comprada!
$addSelectMenu[1;compra;Compre bitcoins;1;1;no; | Comprar:0.010000 = 15,000:valorbct_$authorID:no:<:btc:1007400980511477830>; | Comprar:0.10000 = 30,000:valorbct2_$authorID:no:<:btc:1007400980511477830>] 
`
}, {
  name: "compra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[$editMessage[$messageID;Comprado 0.010000 bucetas!]]
$suppressErrors
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];15000];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.010000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=15000; Você não tem 15,000 de dinheiro!]
$suppressErrors
$onlyIf[$interactionData[values[0]]==valorbct_$authorID;]
`
},
{
  name: "compra",
  type: "interaction",
  prototype: "selectMenu",
  code: `
$interactionUpdate[$editMessage[$messageID;Comprado 0.10000 bucetas!]]
$suppressErrors
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];30000];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.10000];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=30000; Você não tem 30,000 de dinheiro!]
$onlyIf[$interactionData[values[0]]==valorbct2_$authorID;]
`
}, {
  type: "interaction",
  $if: "v4",
  prototype: "button",
  code: `
$if[$getServerVar[bctgrafico]==1]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`1,480\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`30%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$elseIf[$getServerVar[bctgrafico]==2]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`1,590\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`40%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==3]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`2,612\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`43%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==4]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`2,730\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`54%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==5]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`4,790\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`58%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==6]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`6,832\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`62%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==7]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`8,970\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`78%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==8]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`11,270\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`91%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==9]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`18,500\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:+\`100%\`:no}
{field:Status:<#COLON#relatorio#COLON#1008416721859792897>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:GREEN}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-1]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`770\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`22%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-2]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`680\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`12%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-3]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`588\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`8%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-4]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`468\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`6%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-5]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`335\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`2%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-6]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`215\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`1%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-7]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`14\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`0%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-8]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-130\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-20%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-9]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-410\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-10%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-10]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-562\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-43%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-11]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-678\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-33%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-12]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-512\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-56%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-13]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-732\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-67%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-14]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-1,832\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-74%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-15]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-2,608\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-88%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$elseIf[$getServerVar[bctgrafico]==-16]
$interactionUpdate[;$editMessage[$messageID;{newEmbed:{field:Valor do bitcoin atual:\`0.01000\` <#COLON#btc#COLON#1007400980511477830> = \`-4,010\` $getSERVERVAR[dineco]:no}
{field:Cotação em %:-\`-100%\`:no}
{field:Status:<#COLON#grafico#COLON#1008416720421138442>:no}
{footer:$username:$authorAvatar}
{title:**( <:simo_coin:1020681355677417533> ) Cotação Bitcoin**}
{color:RED}}]]
$endelseif
$else
$interactionUpdate[$editMessage[$messageID;Erro ao calcular a quantia de bct];;;;;yes]
$endif
$suppressErrors
$onlyIf[$interactionData[customId]==atubit_$authorID;]
`
}, {
  name: "$alwaysExecute",
  $if: "v4",
  code: `
$if[$getGlobalUserVar[durarx5700;$authorID]!=0]

$setGlobalUserVar[durarx5700;$sub[$getGlobalUserVar[durarx5700;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.000$random[50;99]];$authorID]

$endif
$if[$getGlobalUserVar[duragtx1050;$authorID]!=0]

$setGlobalUserVar[duragtx1050;$sub[$getGlobalUserVar[duragtx1050;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[100;200]];$authorID]

$endif
$if[$getGlobalUserVar[durartx2060;$authorID]!=0]

$setGlobalUserVar[durartx2060;$sub[$getGlobalUserVar[durartx2060;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[100;300]];$authorID]

$endif
$if[$getGlobalUserVar[durartx3070;$authorID]!=0]

$setGlobalUserVar[durartx3070;$sub[$getGlobalUserVar[durartx3070;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[100;400]];$authorID]

$endif
$if[$getGlobalUserVar[durartx3090;$authorID]!=0]

$setGlobalUserVar[durartx3090;$sub[$getGlobalUserVar[durartx3090;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[200;500]];$authorID]

$endif
$if[$getGlobalUserVar[duraamperea40;$authorID]!=0]

$setGlobalUserVar[duraamperea40;$sub[$getGlobalUserVar[duraamperea40;$authorID];5];$authorID]
$setGlobalUserVar[bct;$math[$getGlobalUserVar[bct;$authorID]+0.00$random[300;600]];$authorID]

$endif
$onlyIf[$getGlobalUserVar[bctactive;$authorID]!=false;]
`
}]