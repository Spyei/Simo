module.exports = [{
  name: "bet",
  usage: "Aposte com um usuario uma quantia especificada",
  aliases: ['coinflip', 'apostar'],
  code: `
$title[1;**( :coin: ) Coinflip**]
$description[1;<@$mentioned[1]>, o usuário <@$authorID> quer apostar \`$numberSeparator[$noMentionMessage]\` $getServerVar[dineco] com você clique no botão abaixo caso queira apostar]
$color[303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Coinflip]
$addButton[1;Recusar;danger;recusarc_$mentioned[1];no;<:errado:1032693701450936350>]
$addButton[1;Aceitar;success;cp_$mentioned[1];no;<:certo:1032693703569059960>]
$setGlobalUserVar[user1;$authorID;$authorID]
$setGlobalUserVar[user2;$mentioned[1];$authorID]
$setGlobalUserVar[quantia;$message[2];$authorID]
$setGlobalUserVar[user1;$authorID;$mentioned[1]]
$setGlobalUserVar[user2;$mentioned[1];$mentioned[1]]
$setGlobalUserVar[quantia;$message[2];$mentioned[1]]
$onlyIf[$message[2]!=;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantidade**}{color:RED}}]
$onlyIf[$isNumber[$message[2]]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantidade**}{color:RED}}]
$onlyIf[$message[2]>=100;{newEmbed:{description:**( <:errado:1032693701450936350> ) Só pode apostar acima de \`100\`**}{color:RED}}] 
$onlyIf[$mentioned[1]!=;{newEmbed:{description:**( <:errado:1032693701450936350> ) Mencione alguém para apostar**}{color:RED}}]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não pode apostar consigo mesmo!**}{color:RED}}]
$onlyIf[$isBot[$mentioned[1]]==false;{newEmbed:{description:**( <:errado:1032693701450936350> ) Não pode apostar com bots**}{color:RED}}]
$onlyIf[$message[2]<=$getGlobalUservar[din;$authorID];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem essa quantia!**}{color:RED}}]
$onlyIf[$message[2]<=$getGlobalUservar[din;$mentioned[1]];{newEmbed:{description:**( <:errado:1032693701450936350> ) O mencionado não tem dinheiro na carteira**}{color:RED}}]
`
},{
  type: "interaction",
  $if: "v4",
  prototype: "button",
  code: `
$if[$randomText[1;2]==1]
$interactionedit[;{newEmbed:{title:**( :coin: ) Coinflip**}{description:Parabéns **$username[$getGlobalUservar[user1;$authorID]]**, você ganhou \`$numberSeparator[$getGlobalUservar[quantia]]\` $getServerVar[dineco] pago por **$username[$getGlobalUservar[user2;$authorID]]**}{color:303136}}]
$setGlobalUserVar[din;$sum[$getGlobalUservar[din;$getGlobalUservar[user1;$authorID]];$getGlobalUservar[quantia]];$getGlobalUservar[user1;$authorID]]
$setGlobalUserVar[din;$sub[$getGlobalUservar[din;$getGlobalUservar[user2;$authorID]];$getGlobalUservar[quantia]];$getGlobalUservar[user2;$authorID]]
$else
$interactionedit[;{newEmbed:{title:**( :coin: ) Coinflip**}{description:Parabéns **$username[$getGlobalUservar[user2;$authorID]]**, você ganhou \`$numberSeparator[$getGlobalUservar[quantia]]\` $getServerVar[dineco]  pago por **$username[$getGlobalUservar[user1;$authorID]]**}{color:303136}}]
$setGlobalUserVar[din;$sub[$getGlobalUservar[din;$getGlobalUservar[user1;$authorID]];$getGlobalUservar[quantia]];$getGlobalUservar[user1;$authorID]]
$setGlobalUserVar[din;$sum[$getGlobalUservar[din;$getGlobalUservar[user2;$authorID]];$getGlobalUservar[quantia]];$getGlobalUservar[user2;$authorID]]
$endif
$wait[3s]
$interactionupdate[;{newEmbed:{title:**( :coin: ) Coinflip**}{description:**:coin: Girando a moeda...**}{color:303136}}]
$onlyif[$interactionData[customId]==cp_$authorID]
`
},{
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed:{title:**( :coin: ) Coinflip Recusado!**}{description:**$username[$getGlobalUservar[user2;$authorID]]** Reucusou o coninflip de \`$numberSeparator[$getGlobalUservar[quantia]]\` $getServerVar[dineco]}{color:RED}}] 
$onlyIf[$interactionData[customId]==recusarc_$authorID;]
`
}
]