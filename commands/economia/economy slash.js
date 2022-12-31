module.exports = [{
  name: "work",
  type: 'interaction',
  prototype: 'slash',
  usage: "Trabalha e ganha em cerca de: 200 a 500 moedas",
  aliases: ['trabalhar', 'trabalho'],
  code: `
$interactionReply[;{newEmbed:{title:**( <:bolsa:1036275935374217266> ) Trabalho**}
{description:Você trabalhou como **$getGlobalUserVar[trabai;$authorID]** e ganhou \`$random[200;500]\` $getServerVar[dineco]}
{footer:$username:$authorAvatar}
{color:303136}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - work slash]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[200;500]];$authorID]
$globalCooldown[1m;{
  "content": "**( <:relogio:1032695531316727868> ) Aguarde %time% para trabalhar novamente!**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
$onlyIf[$getGlobalUserVar[trabai;$authorID]!=teta;{
  "content": "**( <:errado:1032693701450936350> ) Sete seu emprego primeiro, usando: /setjob [emprego]**",
  "ephemeral": "true",
  "options":{
  "interaction":true
}
}]
`
},
{
  name: "balance",
  type: 'interaction',
  prototype: 'slash',
  usage: "Mostra quando de moedas o usuario possui, e outras especificações",
  aliases: ['bal', 'atm'],
  code: `
$interactionReply[;{newEmbed:{title:**( <:extrato:1036749041675018240> ) Dados Bancários**}
{description:
**( <:carteira:1036280391528615966> ) Carteira:** \`$numberseparator[$getGlobalUserVar[din;$findUser[$message]]]\` $getServerVar[dineco]
**( <:banco:1036280165162025073> ) Banco:**  \`$numberseparator[$getGlobalUserVar[banco;$findUser[$message]]]\` $getServerVar[dineco]
**Em \`$replaceText[$getLeaderboardInfo[total;$findUser[$message];user;top];0;99]#\` no rank do servidor!**}
{footer:$username[$finduser[$message]]:$userAvatar[$finduser[$message]]}
{thumbnail:$userAvatar[$finduser[$message]]}
{color:303136}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - bal slash]
`
},
{
  name: "daily",
  type: 'interaction',
  prototype: 'slash',
  usage: "Pega seu bonus diario a cada 24hrs, com o tempo vai aumentado oque você ganha",
  $if: "v4",
  aliases: ['diario', 'bonus'],
  code: `
$If[$getGlobalUserVar[dia;$authorID]==1]
$getGlobalUserVar[dia;2;$authorID]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[2000;8000]];$authorID]
$interactionReply[;{newEmbed:{title:**( <:planner:1036280681329868862> ) Bônus Diário**}
{description:Você ganhou \`$numberSeparator[$random[2000;8000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> )}
{footer:$username:$authorAvatar}
{color:303136}}]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==2]
$getGlobalUserVar[dia;3;$authorID]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[4000;12000]];$authorID]
$interactionReply[;{newEmbed:{title:**( <:planner:1036280681329868862> ) Bônus Diário**}
{description:Você ganhou \`$numberSeparator[$random[4000;12000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> )}
{footer:$username:$authorAvatar}
{color:303136}}]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==3]
$getGlobalUserVar[dia;4;$authorID]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[6000;14000]];$authorID]
$interactionReply[;{newEmbed:{title:**( <:planner:1036280681329868862> ) Bônus Diário**}
{description:Você ganhou \`$numberSeparator[$random[6000;14000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> )}
{footer:$username:$authorAvatar}
{color:303136}}]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==4]
$getGlobalUserVar[dia;5;$authorID]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[8000;15000]];$authorID]
$interactionReply[;{newEmbed:{title:**( <:planner:1036280681329868862> ) Bônus Diário**}
{description:Você ganhou \`$numberSeparator[$random[8000;15000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> )}
{footer:$username:$authorAvatar}
{color:303136}}]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==5]
$getGlobalUserVar[dia;1;$authorID]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[9000;16000]];$authorID]
$interactionReply[;{newEmbed:{title:**( <:planner:1036280681329868862> ) Bônus Diário**}
{description:Você ganhou \`$numberSeparator[$random[9000;16000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:certo:1032693703569059960> )}
{footer:$username:$authorAvatar}
{color:303136}}]
$endIf
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Daily slash]
$globalCooldown[24h;{
  "content": "**( <:relogio:1032695531316727868> ) Aguarde %time% para resgatar seu bônus diário novamente!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
`
},
{
  name: "beg",
  type: 'interaction',
  prototype: 'slash',
  usage: "Mendiga e ganha de cerca de: 1 a 400 moedas",
  $if: "v4",
  aliases: ['mendigar', 'medigar', 'mendingar'],
  code: `
$if[$randomText[no;yes]==yes]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[1;400]];$authorID]
$interactionReply[;{newEmbed:{title:**( <:simo_mao:1018277862840729601> ) Mendigar**}
{description:**$usertag[$randomUserID]** te doou \`$numberSeparator[$random[1;400]]\` $getServerVar[dineco]}
{footer:$username:$authorAvatar}
$else
$interactionReply[;{newEmbed:{title:**( <:simo_mao:1018277862840729601> ) Mendigar**}
{description:Você não conseguiu nada, que pena!}
{footer:$username:$authorAvatar}
{color:303136}}]
$endif
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Beg slash]
$globalCooldown[2m;{
  "content": "**( <:relogio:1032695531316727868> ) Aguarde %time% para mendigar novamente!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
`
},
{
  name: "casino",
  type: 'interaction',
  prototype: 'slash',
  usage: "Veja sua sorte na roleta e aposte",
  $if: "v4",
  aliases: ['rl', 'cassino', 'roleta', 'roullete'],
  code: `
$if[$randomText[g;p]==g]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[0;$get[ct]]];$authorID]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**$splitText[3]** Você Ganhou \`$numberSeparator[$random[0;$get[ct]]]\` $getServerVar[dineco]}{footer:$username:$authorAvatar}{color:GREEN}}]
$wait[400ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$Wait[400ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[400ms]
$interactionReply[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**| | |**}{footer:$username:$authorAvatar}{color:303136}}]
$textSplit[$randomtext[🍓| | /🍓|🍓| /🍓|🍓|🍓;🍌| | /🍌|🍌| /🍌|🍌|🍌;🍉| | /🍉|🍉| /🍉|🍉|🍉;🍐| | /🍐|🍐| /🍐|🍐|🍐;🍈| | /🍈|🍈| /🍈|🍈|🍈;🍍| | /🍍|🍍| /🍍|🍍|🍍;🥑| | /🥑|🥑| /🥑|🥑|🥑;🥕| | /🥕|🥕| /🥕|🥕|🥕;🍆| | /🍆|🍆| /🍆|🍆|🍆;🍊| | /🍊|🍊| /🍊|🍊|🍊;🍒| | /🍒|🍒| /🍒|🍒|🍒;🌽| | /🌽|🌽| /🌽|🌽|🌽;🍇| | /🍇|🍇| /🍇|🍇|🍇;|🥝| | / 🥝|🥝| | /🥝|🥝|🥝|;🥥| | /🥥|🥥| /🥥|🥥|🥥];/]
$else
$getGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$random[0;$get[ct]]];$authorID]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**$splitText[3]** Você Perdeu \`$numberSeparator[$random[0;$get[ct]]]\` $getServerVar[dineco]}{footer:$username:$authorAvatar}{color:RED}}]
$wait[400ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**$splitText[2]**}{footer:$username:$authorAvatar}{color:303136}}]
$Wait[400ms]
$interactionEdit[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**$splitText[1]**}{footer:$username:$authorAvatar}{color:303136}}]
$wait[400ms]
$interactionReply[;{newEmbed:{title:**( <:cassino:1036281949251182655> ) Cassino**}{description:**| | |**}{footer:$username:$authorAvatar}{color:303136}}]
$textSplit[$randomText[🍓| | |/🍓|🍓| /🍓|🍓|🍌;🍌| | /🍌|🍌| /🍌|🍌|🍉;🍉| | /🍉|🍉| /🍉|🍉|🍐;🍐| | /🍐|🍐| /🍐|🍐|🍋;🍓| | /🍓|🍉| /🍓|🍉|🍈;🍍| | /🍍|🍉| /🍍|🍉|🍈;🍍| | /🍍|🍍| /🍍|🍍|🍈;🍍| | /🍍|🥑| /🍍|🥑|🍈;🥕| | /🥕|🍍| /🥕|🍍|🍈;🍆| | /🍆|🍆| /🍆|🍆|🍍;🍆| | /🍆|🍈| /🍆|🍈|🍍;🍊| | /🍊|🍉| /🍊|🍉|🍐;🍒| | /🍒|🍉| /🍒|🍉|🍊;🌽| | /🌽|🍊| /🌽|🍊|🌽;🌽| | /🌽|🌽| /🌽|🌽|🍒;🍇| | /🍇|🍒| /🍇|🍒|🍒;🍇| | /🍇|🍇| /🍇|🍇|🌽;|🥝| | /🥝|🥝| /🥝|🥝|🤣];/]
$endif
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Casino slash]
$globalCooldown[2m;{
  "content": "**( <:relogio:1032695531316727868> ) Aguarde %time% para roletar novamente!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]]
$onlyIf[$get[ct]<1000000;{
  "content": "**( <:errado:1032693701450936350> ) Limite de 1000000!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
$onlyIf[$getGlobalUserVar[din;$authorID]>=$get[ct];{
  "content": "**( <:errado:1032693701450936350> ) Você não tem \`$get[ct]\` para apostar!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
$onlyIf[$isNumber[$get[ct]]==true;{
  "content": "**( <:errado:1032693701450936350> ) Digite apenas quantias válidas!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
$onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{
  "content": "**( <:errado:1032693701450936350> ) Inválido!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
`
},
{
  name: "setjob",
  type: 'interaction',
  prototype: 'slash',
  usage: "Seta o emprego para sua mensagem",
  aliases: ['setar emprego', 'set job', 'setaremprego'],
  code: `
$getGlobalUserVar[trabai;$message;$authorID]
$interactionReply[;{newEmbed:{title:**( <:bolsa:1036275935374217266> ) Setar Emprego**}
{description:Agora você trabalha como \`$message\`}
{footer:$username:$authorAvatar}
{color:303136}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Setjob slash]
`
},
{
  name: "rob",
  usage: "Rouba o mencionado",
  type: 'interaction',
  prototype: 'slash',
  $if: "v4",
  aliases: ['robar', 'roubar', 'roubo'],
  code: `
$if[$randomText[e;u]==e]
$interactionReply[;{newEmbed:{title:**( <:roubo:1036285343474925638> ) Roubo**}
{description:<@$authorID> Roubou \`$numberSeparator[$random[1;$get[penis]]]\` $getServerVar[dineco] de <@$slashOption[user]>}
{footer:$username:$authorAvatar}
{color:303136}}]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[1;$get[penis]]];$authorID]
$getGlobalUserVar[din;$sub[$getGlobalUserVar[din;$slashOption[user]];$random[1;$get[penis]]];$slashOption[user]]
$else
$interactionReply[;{newEmbed:{title:**( <:policial:1036285341876895824> ) Roubo**}
{description:A policia te pegou e teve que pagar fiança de \`$numberSeparator[$random[1;$get[cu]]]\` $getServerVar[dineco]}
{footer:$username:$authorAvatar}
{color:303136}}]
$getGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$random[1;$get[cu]]];$authorID]
$endif
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Rob slash]
$let[cu;$getGlobalUserVar[total;$authorID]]
$let[penis;$getGlobalUserVar[din;$slashOption[user]]]
$globalCooldown[7m;{
  "content": "**( <:relogio:1032695531316727868> ) Aguarde %time% para roubar novamente!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
$onlyIf[$getGlobalUserVar[din;$slashOption[user]]>=10;{
  "content": "**( <:errado:1032693701450936350> ) <@$slashOption[user]>, não tem mais de \`10\` $getServerVar[dineco]**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
`
},
{
  name: "crime",
  type: 'interaction',
  prototype: 'slash',
  usage: "Comete um crime e tem chance de perder 1000 e ganhar 500",
  $if: "v4",
  code: `
$if[$randomText[o;l]==o]
$interactionReply[;{newEmbed:{title:**( <:roubo:1036285343474925638> ) Crime**}
{description:Você cometeu um crime e ganhou \`$numberSeparator[$random[500;2000]]\` $getServerVar[dineco]}
{footer:$username:$authorAvatar}
{color:303136}}]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[500;2000]];$authorID]
$else
$interactionReply[;{newEmbed:{title:**( <:policial:1036285341876895824> ) Crime**}
{description:A policia te pegou e perdeu \`$numberSeparator[$random[1000;2500]]\` $getServerVar[dineco]}
{footer:$username:$authorAvatar}
{color:303136}}]
$getGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$random[1000;2500]];$authorID]
$endif
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Crime slash]
$globalCooldown[3m;{
  "content": "**( <:relogio:1032695531316727868> ) Aguarde %time% para roubar novamente!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
`
},{
  name: "depall",
  type: 'interaction',
  prototype: 'slash',
  usage: "Deposita todo seu dinheiro",
  aliases: ['depositar tudo', 'deposit all'],
  code: `
$interactionReply[;{newEmbed:{title:**( <:carteira:1036280391528615966> ) Depósito**}
{description:Foram depositados \`$numberSeparator[$get[all]]\` $getServerVar[dineco] na sua conta} 
{footer:$username:$authorAvatar}
{color:$randomText[#b9a2ff]}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Depall slash]
$getGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$get[all]];$authorID]
$getGlobalUserVar[banco;$sum[$getGlobalUserVar[banco;$authorID];$get[all]];$authorID]
$let[all;$getGlobalUserVar[din;$authorID]]
$onlyIf[$getGlobalUserVar[din;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[din;$authorID]>=$message[1];{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$checkContains[$message[1];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
`
},{
  name: "withall",
  type: 'interaction',
  prototype: 'slash',
  usage: "Retira todo seu dinheiro",
  aliases: ['wh all', 'retirar tudo', 'withdraw all'],
  code: `
$interactionReply[;{newEmbed:{title:**( <:banco:1036280165162025073> ) Retirada**}
{description:Foram Retiradas \`$numberSeparator[$get[all]]\` $getServerVar[dineco] da sua conta do banco} 
{footer:$username:$authorAvatar}
{color:303136}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - withall slash]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$get[all]];$authorID]
$getGlobalUserVar[banco;$sub[$getGlobalUserVar[banco;$authorID];$get[all]];$authorID]
$let[all;$getGlobalUserVar[banco;$authorID]]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=$message[1];{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$checkContains[$message[1];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
`
},
{
  name: "with",
  type: 'interaction',
  prototype: 'slash',
  usage: "Retira uma quantia especificada de dinheiro",
  aliases: ['wh','withdraw', 'retirar', 'sacar'],
  code: `
$interactionReply[;{newEmbed:{title:**( <:banco:1036280165162025073> ) Retirada**}
{description:Foram Retiradas \`$numberSeparator[$get[ct]]\` $getServerVar[dineco] da sua conta}
{footer:$username:$authorAvatar}
{color:303136}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - with slash]
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$get[ct]];$authorID]
$getGlobalUserVar[banco;$sub[$getGlobalUserVar[banco;$authorID];$get[ct]];$authorID]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=$get[ct];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem tudo isso!**}{color:RED}}]
$onlyIf[$isNumber[$get[ct]]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite apenas quantias válidas!**}{color:RED}}]
$onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
`
},{
  name: "dep",
  type: 'interaction',
  prototype: 'slash',
  usage: "Deposita uma quantia de dinheiro especificada",
  aliases: ['depositar', 'deposit'],
  code: `
$interactionReply[;{newEmbed:{title:**( <:carteira:1036280391528615966> ) Depósito**}
{description:Foram depositados \`$numberSeparator[$get[ct]]\` $getServerVar[dineco] na sua conta do banco} 
{footer:$username;$authorAvatar}
{color:303136}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Dep slash]
$getGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$get[ct]];$authorID]
$getGlobalUserVar[banco;$sum[$getGlobalUserVar[banco;$authorID];$get[ct]];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[din;$authorID]>=$get[ct];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem tudo isso!**}{color:RED}}]
$onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$isNumber[$get[ct]]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite apenas quantias válidas!**}{color:RED}}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
`
},{
  name: "globalCooldown",
  type: 'interaction',
  prototype: 'slash',
  usage: "Mostra O globalCooldown dos seus tempos",
  aliases: ['cd', 'tempo'],
  code: `
$interactionReply[;{newEmbed:{title:**( <:simo_info:1017567152410210364> ) globalCooldown**}
{footer:$username:$authorAvatar}
{color:303136}
{field:$if[$get[daily]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Daily:\`$if[$get[daily]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[daily];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[work]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Work:\`$if[$get[work]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[work];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[beg]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Beg:\`$if[$get[beg]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[beg];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[crime]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Crime:\`$if[$get[crime]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[crime];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[roullete]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Roullete:\`$if[$get[roullete]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[roullete];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[box]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Box:\`$if[$get[box]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[boxs];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[rob]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Rob:\`$if[$get[rob]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[rob];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[slut]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Slut:\`$if[$get[slut]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[slut];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}
{field:$if[$get[multi]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Multi:\`$if[$get[multi]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[multi];time];hour;hora];minute;minuto];second;segundo];Disponível]\`}}]

$let[multi;$getglobalCooldownTime[2m;user;multi;$findMember[$message[1]];yes]] 
$let[slut;$getglobalCooldownTime[2m;user;slut;$findMember[$message[1]];yes]] 
$let[rob;$getglobalCooldownTime[7m;user;rob;$findMember[$message[1]];yes]] 
$let[box;$getglobalCooldownTime[3m;user;box;$findMember[$message[1]];yes]] 
$let[roullete;$getglobalCooldownTime[1m;user;roullete;$findMember[$message[1]];yes]] 
$let[crime;$getglobalCooldownTime[3m;user;crime;$findMember[$message[1]];yes]] 
$let[work;$getglobalCooldownTime[1m;user;work;$findMember[$message[1]];yes]]
$let[beg;$getglobalCooldownTime[1m;user;beg;$findMember[$message[1]];yes]]
$let[daily;$getglobalCooldownTime[24h;user;daily;$findMember[$message[1]];yes]]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - globalCooldown slash]
`
},{
  name: "slut",
  type: 'interaction',
  prototype: 'slash',
  usage: "Se prostitui e ganha entorno de 300 a 600 moedas",
  aliases: ['vagabundiar', 'prostituir'],
  code: `
$getGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[300;600]];$authorID]
$interactionReply[;{newEmbed:{title:**( <:bolsa:1036275935374217266> ) Prostituir**}
{description:Você se prostituiu e ganhou \`$random[300;600]\` $getServerVar[dineco]}
{footer:$username:$authorAvatar}
{color:303136}}]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Slut slash]
$globalCooldown[2m;{
  "content": "**( <:relogio:1032695531316727868> ) Aguarde %time% para se prostituir novamente!**",
  "ephemeral": "true",
"options":{
  "interaction":true
}
}]
`
}
]