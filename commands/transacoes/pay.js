module.exports =[{
  name: "pay",
  usage: "Paga a um usuario uma quantia especifica",
  aliases: ['pagar'],
  code: `
$title[1;**( <:pagar:1036721833875095562> ) Pagamento**]
$description[1;Pagamento Pendente <@$mentioned[1]> de: \`$numberSeparator[$get[ct]]\` $getServerVar[dineco] Selecione um botão abaixo!]
$footer[1;Pedido por: $username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Pay]
$color[1;303136]
$addButton[1;Recusar;danger;recusar_$mentioned[1];no;<:errado:1032693701450936350>]
$addButton[1;Aceitar;success;aceitar_$mentioned[1];no;<:certo:1032693703569059960>]
$setGlobalUserVar[pay;$mentioned[1]/$authorID/$noMentionMessage;$mentioned[1]]
$onlyIf[$mentioned[1]!=$authorID;{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não pode se pagar!**}{color:RED}}]
$argsCheck[>1;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantia**}{color:RED}}]
$onlyIf[$getGlobalUserVar[din;$authorID]>=$noMentionMessage;{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem tudo isso!**}{color:RED}}]
$onlyIf[$checkContains[$noMentionMessage;-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{description:**( <:errado:1032693701450936350> ) Mencione alguém para marcar!**}{color:RED}}]
$onlyIf[$isNumber[$noMentionMessage]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite um número válido!**}{color:RED}}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$noMentionMessage;k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
`
},{
type: "interaction",
$if: "v4",
prototype: "button",
code: `
$interactionUpdate[;{newEmbed:{title:**( <:certo:1032693703569059960> ) Pagamento Aceitado**}{description:Pagamento efetuado por <@$splitText[2]> a <@$splitText[1]> de: \`$numberSeparator[$splitText[3]]\` $getServerVar[dineco]}{color:GREEN}}]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$splitText[1]];$splitText[3]];$splitText[1]]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$splitText[2]];$splitText[3]];$splitText[2]]
$textSplit[$getGlobalUserVar[pay;$authorID];/]
$onlyIf[$getGlobalUserVar[din;$splitText[2]]>=$splitText[3];{newEmbed:{description:**( <:errado:1032693701450936350> ) Esta tentando me enganar?**}{color:RED}}]
$onlyIf[$interactionData[customId]==aceitar_$authorID;]
`
},{
type: "interaction",
prototype: "button",
code: `$interactionUpdate[;{newEmbed:{title:**( <:errado:1032693701450936350> ) Pagamento Recusado**}{description:<@$splitText[1]> recusou o pagamento de \`$numberSeparator[$splitText[3]]\` $getServerVar[dineco] de: <@$splitText[2]>}{color:RED}}] 
$textSplit[$getGlobalUserVar[pay;$authorID];/]
$onlyIf[$interactionData[customId]==recusar_$authorID;]
`
}]
