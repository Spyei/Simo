const pintao = "$replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$random[1;5];1;(<:uva:1038138970791477309>) <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>];2;<:uva:1038138970791477309> (<:laranja:1038138966723002409>) <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>];3;<:uva:1038138970791477309> <:laranja:1038138966723002409> (<:maca:1038138968971165787>) <:laranja:1038138966723002409> <:uva:1038138970791477309>];4;<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> (<:laranja:1038138966723002409>) <:uva:1038138970791477309>];5;<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> (<:uva:1038138970791477309>)]"
const cu = "$random[1;5]"
module.exports = [{
  name: "multi",
  aliases: ["multiplicar", "double", "doble"],
  usage: "Escolha um simbolo com oque que equivale aos ganhos e as chances do <:maca:1038138968971165787> sao muito baixas, chances desse <:uva:1038138970791477309> e desse <:laranja:1038138966723002409> sao iguais, boa sorte! Caso caia no certo a qual escolheu, você ganha!",
  code: `
$title[1;**( <:cassino:1036281949251182655> ) Escolha um simbolo**]
$description[1;
**( <:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309> )**
]
$footer[1;$username;$authorAvatar]
$addButton[1;X2 ($math[$get[ct]*2]);secondary;x22_$authorID;no;<:laranja:1038138966723002409>;]
$addButton[1;X5 ($math[$get[ct]*5]);danger;x5_$authorID;no;<:maca:1038138968971165787>;]
$addButton[1;X2 ($math[$get[ct]*2]);secondary;x2_$authorID;no;<:uva:1038138970791477309>;]
$color[303136]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$get[ct]];$authorID]
$setGlobalUserVar[multi;$get[ct];$authorID]
$deleteIn[170s]
$globalCooldown[3m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para multiplicar novamente**}{color:RED}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - multi]
$onlyIf[$getGlobalUserVar[din;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[din;$authorID]>=$get[ct];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem tudo isso!**}{color:RED}}]
$onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$isNumber[$get[ct]]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Isso não é um número**}{color:RED}}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
$argsCheck[>0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantia**}{color:RED}}]
`
},
{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code: `
$if[$randomText[2;4;5;4;2]==2] 
$setGlobalUserVar[din;$math[$getGlobalUserVar[din;$authorID]+$getGlobalUserVar[multi;$authorID]*2]]

$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Resultado**}{field:**$splitText[2]**:Você Ganhou \`$numberSeparator[$math[$getGlobalUserVar[multi]*2]]\` $getServerVar[dineco] Apostando em: <:laranja:1038138966723002409>}{color:GREEN}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$elseif[$randomText[2;4;5;4;2]==4] 
$setGlobalUserVar[din;$math[$getGlobalUserVar[din;$authorID]+$getGlobalUserVar[multi;$authorID]*2]]

$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Resultado**}{field:**$splitText[4]**:Você Ganhou \`$numberSeparator[$math[$getGlobalUserVar[multi]*2]]\` $getServerVar[dineco] Apostando em: <:laranja:1038138966723002409>}{color:GREEN}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$endelseif
$else

$interactionEdit[;{newEmbed:{title:**( <:lista2:1032695527730593872> ) Resultado**}{field:**$randomText[$splitText[1];$splitText[3];$splitText[5]]**:Você Perdeu \`$numberSeparator[$getGlobalUserVar[multi]]\` $getServerVar[dineco] Apostando em <:laranja:1038138966723002409>}{color:RED}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$endif
$textSplit[$get[buceta];/]
$let[buceta;(<:uva:1038138970791477309>) <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> (<:laranja:1038138966723002409>) <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> (<:maca:1038138968971165787>) <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> (<:laranja:1038138966723002409>) <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> (<:uva:1038138970791477309>)]
$onlyIf[$interactionData[customId]==x22_$authorID;]
`
},
{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code: `
$if[$randomText[1;2;2;5]==1] 
$setGlobalUserVar[din;$math[$getGlobalUserVar[din;$authorID]+$getGlobalUserVar[multi;$authorID]*2]]

$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Resultado**}{field:**$splitText[1]**:Você Ganhou \`$numberSeparator[$math[$getGlobalUserVar[multi]*2]]\` $getServerVar[dineco] Apostando em: <:uva:1038138970791477309>}{color:GREEN}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$elseif[$randomText[1;2;2;5]==5]
$setGlobalUserVar[din;$math[$getGlobalUserVar[din;$authorID]+$getGlobalUserVar[multi;$authorID]*2]]

$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Resultado**}{field:**$splitText[5]**:Você Ganhou \`$numberSeparator[$math[$getGlobalUserVar[multi]*2]]\` $getServerVar[dineco] Apostando em: <:uva:1038138970791477309>}{color:GREEN}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$endelseif
$else

$interactionEdit[;{newEmbed:{title:**( <:lista2:1032695527730593872> ) Resultado**}{field:**$randomText[$splitText[4];$splitText[2];$splitText[3]]**:Você Perdeu \`$numberSeparator[$getGlobalUserVar[multi]]\` $getServerVar[dineco] Apostando em <:uva:1038138970791477309>}{color:RED}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$endif
$textSplit[$get[buceta];/]
$let[buceta;(<:uva:1038138970791477309>) <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> (<:laranja:1038138966723002409>) <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> (<:maca:1038138968971165787>) <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> (<:laranja:1038138966723002409>) <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> (<:uva:1038138970791477309>)]
$onlyIf[$interactionData[customId]==x2_$authorID;]
`
},
{

  type: "interaction",
  $if: "v4",
  prototype: "button",
  code: `
$if[$randomText[1;2;3;2;1]==3] 
$setGlobalUserVar[din;$math[$getGlobalUserVar[din;$authorID]+$getGlobalUserVar[multi;$authorID]*5]]

$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Resultado**}{field:**$splitText[3]**:Você Ganhou \`$numberSeparator[$math[$getGlobalUserVar[multi]*5]]\` $getServerVar[dineco]}{color:GREEN}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$else

$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Resultado**}{field:**$randomText[$splitText[1];$splitText[2];$splitText[4];$splitText[5]]**:Você Perdeu \`$numberSeparator[$getGlobalUserVar[multi]]\` $getServerVar[dineco] Apostando em <:maca:1038138968971165787>}{color:RED}{footer:$username:$authorAvatar}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[5]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[4]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[3]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[500ms]
$interactionUpdate[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Girando...**}{description:**$splitText[1]**}{color:303136}{footer:$username:$authorAvatar}}]

$endif
$textSplit[$get[buceta];/]
$let[buceta;(<:uva:1038138970791477309>) <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> (<:laranja:1038138966723002409>) <:maca:1038138968971165787> <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> (<:maca:1038138968971165787>) <:laranja:1038138966723002409> <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> (<:laranja:1038138966723002409>) <:uva:1038138970791477309>/<:uva:1038138970791477309> <:laranja:1038138966723002409> <:maca:1038138968971165787> <:laranja:1038138966723002409> (<:uva:1038138970791477309>)]
$onlyIf[$interactionData[customId]==x5_$authorID;]
`
}
]

