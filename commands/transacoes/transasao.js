module.exports = [{
  name: "transações",
  aliases: ['tr', 'transa', 'transações'],
  usage: "Mostra suas Transações dentro do simo",
  code: `
$title[1;**( <:transacao:1036748587184431175> ) Transações**]
$description[
$splitText[10]
$splitText[9]
$splitText[8]
$splitText[7]
$splitText[6]
$splitText[5]
$splitText[4]
$splitText[3]
$splitText[2]
$splitText[1]
]
$addButton[1;Próximo;secondary;prox_$authorID;no;]
$addButton[1;Anterior;secondary;ant_$authorID;no;]
$addButton[1;Excluir Transações;danger;excli_$authorID;no;]
$color[1;303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Trançãsão]
$footer[1;Transações de $username[$authorID];$userAvatar[$authorID]]
$textSplit[$getGlobalUserVar[transa;$authorID];|]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[$editmessage[$messageid;{newEmbed:
{title:**( <:transacao:1036748587184431175> ) Transações**}
{description:
$splitText[11]
$splitText[12]
$splitText[13]
$splitText[14]
$splitText[15]
$splitText[16]
$splitText[17]
$splitText[18]
$splitText[19]
$splitText[20]}
{footer:Transações de $username[$authorID]:$userAvatar[$authorID]}
{color:303136}
}]]
$suppresserrors
$textSplit[$getGlobalUserVar[transa;$authorID];|]
$onlyIf[$interactionData[customId]==prox_$authorID;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionUpdate[$editmessage[$messageid;{newEmbed:
{title:**( <:transacao:1036748587184431175> ) Transações**}
{description:
$splitText[10]
$splitText[9]
$splitText[8]
$splitText[7]
$splitText[6]
$splitText[5]
$splitText[4]
$splitText[3]
$splitText[2]
$splitText[1]}
{footer:Transações de $username[$authorID]:$userAvatar[$authorID]}
{color:303136}
}]]
$suppresserrors
$textSplit[$getGlobalUserVar[transa;$authorID];|]
$onlyIf[$interactionData[customId]==ant_$authorID;]
`
},{
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[Foram excluidas \`$getTextSplitLength\` transasoes;;;;;yes]
$setGlobalUservar[transa;Sem Transações;$authorID]
$textSplit[$getGlobalUserVar[transa;$authorID];|]
$onlyIf[$interactionData[customId]==excli_$authorID;]
`
}
]
