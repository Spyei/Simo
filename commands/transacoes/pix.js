module.exports = [{
  name: "pix",
  $if: "v4",
  usage: "Faça um pix para a chave do especificado",
  code: `
$if[$getGlobalUserVar[transa;$authorID]==Sem Transações]
$setGlobalUserVar[transa;📤 ( <t:$truncate[$math[$dateStamp/1000]]:f> ) Pagou \`$numberSeparator[$get[ct]]\` $getServervar[dineco] Para **$username[$splitText[2]]#$discriminator[$splitText[2]]**;$authorID]
$else
$setGlobalUserVar[transa;📤 ( <t:$truncate[$math[$dateStamp/1000]]:f> ) Pagou \`$numberSeparator[$get[ct]]\` $getServervar[dineco] Para **$username[$splitText[2]]#$discriminator[$splitText[2]]** | $getGlobalUserVar[transa;$authorID];$authorID]
$endif
$if[$getGlobalUserVar[transa;$splitText[2]]==Sem Transações]
$setGlobalUserVar[transa;📥 ( <t:$truncate[$math[$dateStamp/1000]]:f> ) Recebeu \`$numberSeparator[$get[ct]]\` $getServervar[dineco] De **$username[$authorID]#$discriminator[$authorID]**;$splitText[2]]
$else
$setGlobalUserVar[transa;📥 ( <t:$truncate[$math[$dateStamp/1000]]:f> ) Recebeu \`$numberSeparator[$get[ct]]\` $getServervar[dineco] De **$username[$authorID]#$discriminator[$authorID]** | $getGlobalUserVar[transa;$splitText[2]];$splitText[2]]
$endif
$title[1;**( <:pix:1002968438425264168> ) Pagamento**]
$description[1;( <a:lodaem:1034162945816531028> ) Processando pagamento...]$editIn[3s;{newEmbed:{title:**( <:pix:1002968438425264168> ) Pagamento**}{description:**pix realizado** de \`$numberSeparator[$get[ct]]\` para <@$splitText[2]>}{color:GREEN}{footer:Pedido por $username:$authorAvatar}}]
$footer[1;Pedido por $username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - pix]
$color[1;303136]
$setGlobalUserVar[banco;$sub[$getGlobalUserVar[banco;$authorID];$get[ct]];$authorID]
$setGlobalUserVar[banco;$sum[$getGlobalUserVar[banco;$splitText[2]];$get[ct]];$splitText[2]]
$argsCheck[>1;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantia**}{color:RED}}]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=$get[ct];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem tudo isso!**}{color:RED}}]
$onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$splittext[1]!=undefined;{newEmbed:{description:**( <:errado:1032693701450936350> ) Essa chave pix não existe!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[pixes;$authorID]!=$splitText[1]/$splitText[2];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não pode se pagar!**}{color:RED}}]
$onlyIf[$isNumber[$get[ct]]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite um valor válido!**}{color:RED}}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[2];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
$textSplit[$getGlobalUserVar[pixes;$message[1]];/]
`
}, {
  name: "chave pix",
  usage: "Mostra a chave pix do nome do usuario",
  code: `
$addButton[1;Copiar chave pix;secondary;penisporra;no;<:pix:1002968438425264168>]
$title[1;**( <:pix:1002968438425264168> ) Chave pix**]
$color[1;303136]
$addField[1;Chave pix;\`$splitText[1]\`]
$addfield[1;Author;<@$splitText[2]>]
$footer[1;$username[$finduser[$message]];$userAvatar[$finduser[$message]]]
$thumbnail[1;$userAvatar[$finduser[$message]]]
$setGlobalUserVar[dados;$splitText[1];penis]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Chave pix]
$onlyif[$splitText[1]!=undefined;{newEmbed:{description:**( <:errado:1032693701450936350> ) <@$finduser[$message]>, Não tem uma chave pix gerada, use: $getServerVar[prefixo]gerar**}{color:RED}}]
$textSplit[$getGlobalUserVar[pixes;$finduser[$message]];/]
`
}, {
  type: "interaction",
  prototype: "button",
  code: `
$interactionReply[$getGlobalUserVar[dados;penis];;;;;yes]
$onlyIf[$interactionData[customId]==penisporra;]  
`
},
{
  name: "gerar chave pix",
  aliases: ['gerar', "gcp"],
  usage: "Gera uma chave pix com um codigo aleatorio",
  code: `
$description[1;**( <:pix:1002968438425264168> ) Chave pix gerada, \`$get[cu]\`**]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Gerar chave pix]
$color[1;303136]
$setGlobalUserVar[pixes;$get[cu]/$authorID;$authorID]
$setGlobalUserVar[pixes;$get[cu]/$authorID;$get[cu]]
$let[cu;$randomString[8]-$randomString[8]]
`
}
]
