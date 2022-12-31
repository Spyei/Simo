module.exports = {
    name: "slots",
    usage: "Veja sua sorte na roleta e aposte",
    $if: "v4",
    aliases: ['rl', 'cassino', 'roleta', 'casino', 'slots'],
    code: `
  $if[$randomText[g;p]==g]
  $setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[0;$get[ct]]];$authorID]
  $title[**( <:cassino:1036281949251182655> ) Cassino**]
  $description[**( | | | )**]
  $footer[$username;$authorAvatar]
  $color[303136]
  $editIn[500ms;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**( $splitText[1] )**}{footer:$username:$authorAvatar}{color:303136}};{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**( $splitText[2] )**}{footer:$username:$authorAvatar}{color:303136}};{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**( $splitText[3] )** Você Ganhou \`$numberSeparator[$random[0;$get[ct]]]\` $getServerVar[dineco]}{footer:$username:$authorAvatar}{color:GREEN}}]
  $textSplit[$randomtext[🍓| | /🍓|🍓| /🍓|🍓|🍓;🍌| | /🍌|🍌| /🍌|🍌|🍌;🍉| | /🍉|🍉| /🍉|🍉|🍉;🍐| | /🍐|🍐| /🍐|🍐|🍐;🍈| | /🍈|🍈| /🍈|🍈|🍈;🍍| | /🍍|🍍| /🍍|🍍|🍍;🥑| | /🥑|🥑| /🥑|🥑|🥑;🥕| | /🥕|🥕| /🥕|🥕|🥕;🍆| | /🍆|🍆| /🍆|🍆|🍆;🍊| | /🍊|🍊| /🍊|🍊|🍊;🍒| | /🍒|🍒| /🍒|🍒|🍒;🌽| | /🌽|🌽| /🌽|🌽|🌽;🍇| | /🍇|🍇| /🍇|🍇|🍇;🥝| | / 🥝|🥝| | /🥝|🥝|🥝|;🥥| | /🥥|🥥| /🥥|🥥|🥥];/]
  $channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - casino]
  $else
  $setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$random[0;$get[ct]]];$authorID]
  $title[**( <:cassino:1036281949251182655> ) Cassino**]
  $description[**( | | | )**]
  $footer[$username;$authorAvatar]
  $color[303136]
  $editIn[500ms;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**( $splitText[1] )**}{footer:$username:$authorAvatar}{color:303136}};{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:*( *$splitText[2] )**}{footer:$username:$authorAvatar}{color:303136}};{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**( $splitText[3] )** Você Perdeu \`$numberSeparator[$random[0;$get[ct]]]\` $getServerVar[dineco]}{footer:$username:$authorAvatar}{color:RED}}]
  $textSplit[$randomText[🍓| | |/🍓|🍓| /🍓|🍓|🍌;🍌| | /🍌|🍌| /🍌|🍌|🍉;🍉| | /🍉|🍉| /🍉|🍉|🍐;🍐| | /🍐|🍐| /🍐|🍐|🍋;🍓| | /🍓|🍉| /🍓|🍉|🍈;🍍| | /🍍|🍉| /🍍|🍉|🍈;🍍| | /🍍|🍍| /🍍|🍍|🍈;🍍| | /🍍|🥑| /🍍|🥑|🍈;🥕| | /🥕|🍍| /🥕|🍍|🍈;🍆| | /🍆|🍆| /🍆|🍆|🍍;🍆| | /🍆|🍈| /🍆|🍈|🍍;🍊| | /🍊|🍉| /🍊|🍉|🍐;🍒| | /🍒|🍉| /🍒|🍉|🍊;🌽| | /🌽|🍊| /🌽|🍊|🌽;🌽| | /🌽|🌽| /🌽|🌽|🍒;🍇| | /🍇|🍒| /🍇|🍒|🍒;🍇| | /🍇|🍇| /🍇|🍇|🌽;|🥝| | /🥝|🥝| /🥝|🥝|🤣];/]
  $channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - casino]
  $endif
  $globalCooldown[1m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para roletar novamente!**}{color:RED}}]
  $onlyIf[$get[ct]>=10;{newEmbed:{description:**( <:errado:1032693701450936350> ) Só pode apostas acima de 10 $getServerVar[dineco]**}{color:RED}}]
  $onlyIf[$get[ct]<250000;{newEmbed:{description:**( <:errado:1032693701450936350> ) Limite de 250.000 $getServerVar[dineco]**}{color:RED}}]
  $onlyIf[$getGlobalUserVar[din;$authorID]>=$get[ct];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem \`$message\` para apostar!**}{color:RED}}]
  $onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) inválido!**}{color:RED}}]
  $argsCheck[>0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantia**}{color:RED}}]
  $let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
  `
  }