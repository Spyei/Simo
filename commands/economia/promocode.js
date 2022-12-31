module.exports = [{
    name: "gerar promocode",
    aliases: ["gerar-promocode","gen promo", "gen promocode"],
    code: `
$setGlobalUserVar[promocode;$authorID/$get[promo]/$get[valor];$authorID]
$setGlobalUserVar[promocode;$authorID/$get[promo]/$get[valor];$get[promo]]
$title[**( <:code:1038203205257003089> )** Promocode gerado]
$description[
> Valor: \`$get[valor]\`$getServerVar[dineco]
> Autor: <@$authorID>
> Código: ||************_promocode||
> **Caso queira salvar o promocode, basta clicar para enviar em sua dm**
]
$color[303136]
$footer[$username;$authorAvatar]
$let[valor;$message[1]]
$let[promo;$toUpperCase[$randomString[10]]_promocode]
$addButton[1;Enviar privado;secondary;dmpromo_$authorID;]
$addButton[1;Copiar e colar agora;secondary;copicola_$authorID;]
$onlyIf[$getGlobalUserVar[promocode;$authorID]==undefined;voce ja tem um promocode ativo]
$onlyForIDS[955095844275781693;]
`
},{
    prototype: "button",
    type: "interaction",
    code: `
$interactionReply[$splitText[2];;;;;yes]
$textSplit[$getGlobalUserVar[promocode;$authorID];/]
$onlyIf[$interactionData[customId]==copicola_$authorID;]
` 
},{
    prototype: "button",
    type: "interaction",
    code: `
$interactionReply[Enviado, caso sua dm esteja bloqueada, desbloque-a;;;;;yes]
$senddm[$splitText[2];$authorID]
$textSplit[$getGlobalUserVar[promocode;$authorID];/]
$onlyIf[$interactionData[customId]==dmpromo_$authorID;]
` 
},{
    name: "promocode",
    code: `
$setGlobalUserVar[promocode;undefined/undefined/undefined;$splitText[1]]
$setGlobalUserVar[promocode;undefined/undefined/undefined;$splitText[2]]
voce resgatou um promocode de \`$splitText[3]\`$getServerVar[dineco] autor: <@$splitText[1]>
$onlyIf[$splitText[1]!=undefined;esse promocode não existe]
$textSplit[$getGlobalUserVar[promocode;$message];/]
`
}]