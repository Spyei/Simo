module.exports = [{
  name: "work",
  usage: "Trabalha e ganha em cerca de: 200 a 500 moedas",
  aliases: ['trabalhar'],
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[200;500]];$authorID]
$title[1;**( <:bolsa:1036275935374217266> ) Trabalho**]
$description[1;Você trabalhou como **$getGlobalUserVar[trabai;$authorID]** e ganhou \`$random[200;500]\` $getServerVar[dineco]]
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - work]
$color[303136]
$globalCooldown[1m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para trabalhar novamente!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[trabai;$authorID]!=teta;{newEmbed:{description:**( <:errado:1032693701450936350> ) Primeiramente, você precisa setar um emprego com: \`$getServerVar[prefixo;$guildID]setjob <emprego>\`**}{color:RED}}]
`
},
{
  name: "balance",
  usage: "Mostra quando de moedas o usuario possui, e outras especificações",
  aliases: ['bal', 'atm'],
  code: `
$title[1;**( <:extrato:1036749041675018240> ) Dados Bancários**]
$description[1;
**( <:carteira:1036280391528615966> ) Carteira:** \`$numberseparator[$getGlobalUserVar[din;$findUser[$message]]]\` $getServerVar[dineco]
**( <:banco:1036280165162025073> ) Banco:**  \`$numberseparator[$getGlobalUserVar[banco;$findUser[$message]]]\` $getServerVar[dineco]
Em \`$replaceText[$getLeaderboardInfo[total;$findUser[$message];user;top];0;999]#\` lugar no ranking do servidor!
]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - bal]
$footer[1;$username[$finduser[$message]];$userAvatar[$finduser[$message]]]
$thumbnail[1;$userAvatar[$findUser[$message]]]
$onlyif[$splitText[1]!=teta;{newEmbed:{description:**( <:errado:1032693701450936350> ) Primeiramente, você precisa setar a sua agência com: \`$getServerVar[prefixo;$guildID]agencia\`**}{color:RED}}
$color[303136]
`
},
{
  name: "daily",
  usage: "Pega seu bonus diario a cada 24hrs, com o tempo vai aumentado oque você ganha",
  $if: "v4",
  aliases: ['diario', 'bonus'],
  code: `
$If[$getGlobalUserVar[dia;$authorID]==1]
$setGlobalUserVar[dia;2;$authorID]
$title[1;**( <:planner:1036280681329868862> ) Bônus Diário**]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[2000;8000]];$authorID]
$description[1;Você ganhou \`$numberSeparator[$random[2000;8000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:certo:1032693703569059960>  ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> )]
$footer[1;$username;$authorAvatar]
$color[303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - daily]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==2]
$setGlobalUserVar[dia;3;$authorID]
$title[1;**( <:planner:1036280681329868862> ) Bônus Diário**]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[4000;12000]];$authorID]
$description[1;Você ganhou \`$numberSeparator[$random[4000;12000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> )]
$footer[1;$username;$authorAvatar]
$color[303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - daily2]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==3]
$setGlobalUserVar[dia;4;$authorID]
$title[1;**( <:planner:1036280681329868862> ) Bônus Diário**]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[6000;14000]];$authorID]
$description[1;Você ganhou \`$numberSeparator[$random[6000;14000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:errado:1032693701450936350> ) ( <:errado:1032693701450936350> )]
$footer[1;$username;$authorAvatar]
$color[303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - daily3]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==4]
$setGlobalUserVar[dia;5;$authorID]
$title[1;**( <:planner:1036280681329868862> ) Bônus Diário**]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[8000;15000]];$authorID]
$description[1;Você ganhou \`$numberSeparator[$random[8000;15000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:errado:1032693701450936350> )]
$footer[1;$username;$authorAvatar]
$color[303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - daily4]
$endIf
$If[$getGlobalUserVar[dia;$authorID]==5]
$setGlobalUserVar[dia;1;$authorID]
$title[1;**( <:planner:1036280681329868862> ) Bônus Diário**]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[9000;16000]];$authorID]
$description[1;Você ganhou \`$numberSeparator[$random[9000;16000]]\` $getServerVar[dineco] do seu bônus diário
Sequência:
( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960>  ) ( <:certo:1032693703569059960> )]
$footer[1;$username;$authorAvatar]
$color[303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - daily5]
$endIf
$globalCooldown[24h;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para resgatar seu bônus diário novamente!**}{color:RED}}]
`
},
{
  name: "beg",
  usage: "Mendiga e ganah de cerca de: 1 a 400 moedas",
  $if: "v4",
  aliases: ['mendigar', 'medigar', 'mendingar'],
  code: `
$if[$randomText[no;yes]==yes]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[1;400]];$authorID]
$title[1;**( <:mendigo:1036278747080437880> ) Mendigar**]
$description[1;**$usertag[$randomUserID]** te doou \`$numberSeparator[$random[1;400]]\` $getServerVar[dineco]]
$footer[1;$username;$authorAvatar]
$color[303136]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - beg]
$else
$title[1;**( <:mendigo:1036278747080437880> ) Mendigar**]
$description[1;Você não conseguiu nada, que pena!]
$footer[1;$username;$authorAvatar]
$color[303136]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Beg]
$endif
$globalCooldown[1m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para mendigar novamente!**}{color:RED}}]
`
},
{
  name: "setjob",
  usage: "Seta o emprego para sua mensagem",
  aliases: ['setar emprego', 'set job', 'setaremprego'],
  code: `
$setGlobalUserVar[trabai;$message;$authorID]
$title[1;**( <:bolsa:1036275935374217266> ) Setar Emprego**]
$description[1;Agora você trabalha como **$message**]
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - Setjob]
$color[303136]
$argsCheck[>=1;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite algo para ser seu emprego**}{color:RED}}]
`
},
{
  name: "rob",
  usage: "Rouba o mencionado",
  $if: "v4",
  aliases: ['robar', 'roubar', 'roubo'],
  code: `
$if[$randomText[e;u]==e]
$title[1;**( <:roubo:1036285343474925638> ) Roubo**]
$description[1;<@$authorID> Roubou \`$numberSeparator[$random[1;$get[penis]]]\` $getServerVar[dineco] de <@$mentioned[1]>]
$footer[1;$username;$authorAvatar]
$color[GREEN]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[1;$get[penis]]];$authorID]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$mentioned[1]];$random[1;$get[penis]]];$mentioned[1]]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - rob]
$else
$title[1;**( <:policial:1036285341876895824> ) Roubo**]
$description[1;A policia te pegou e teve que pagar fiança de \`$numberSeparator[$random[1;$get[cu]]]\` $getServerVar[dineco]]
$footer[1;$username;$authorAvatar]
$color[RED]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$random[1;$get[cu]]];$authorID]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - rob
$endif
$let[cu;$getGlobalUserVar[total;$authorID]]
$let[penis;$getGlobalUserVar[din;$mentioned[1;yes]]]
$globalCooldown[7m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para roubar novamente!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[din;$mentioned[1]]>=10;{newEmbed:{description:**( <:errado:1032693701450936350> ) Ele não tem mais de \`10\` $getServerVar[dineco]**}{color:RED}}]
$onlyIf[$mentioned[1;no]!=undefined;{newEmbed:{description:**( <:errado:1032693701450936350> ) Mencione alguém para roubar!**}{color:RED}}]
`
},
{
  name: "crime",
  usage: "Comete um crime e tem chance de perder 1000 e ganhar 500",
  $if: "v4",
  code: `
$if[$randomText[o;l]==o]
$title[1;**( <:roubo:1036285343474925638> ) Crime**]
$description[1;Você cometeu um crime e ganhou \`$numberSeparator[$random[500;1000]]\` $getServerVar[dineco]]
$footer[1;$username;$authorAvatar]
$color[GREEN]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[500;1000]];$authorID]
$log[[DEBUG] => $userTag[$authorID] Usou o comando - crime]
$else
$title[1;**( <:policial:1036285341876895824> ) Crime**]
$description[1;A policia te pegou e perdeu \`$numberSeparator[$random[1000;1500]]\` $getServerVar[dineco]]
$footer[1;$username;$authorAvatar]
$color[RED]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$random[1000;1500]];$authorID]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - crime]
$endif
$globalCooldown[3m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para roubar novamente!**}{color:RED}}]
`
},{
  name: "dep all",
  usage: "Deposita todo seu dinheiro",
  aliases: ['depositar tudo', 'deposit all'],
  code: `
$title[1;**( <:carteira:1036280391528615966> ) Depósito**]
$description[1;Foram depositados \`$numberSeparator[$get[all]]\` $getServerVar[dineco] na sua conta] 
$footer[1;$username;$authorAvatar]
$color[303136]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$get[all]];$authorID]
$setGlobalUserVar[banco;$sum[$getGlobalUserVar[banco;$authorID];$get[all]];$authorID]
$let[all;$getGlobalUserVar[din;$authorID]]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - dep all]
$onlyIf[$getGlobalUserVar[din;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[din;$authorID]>=$message[1];{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$checkContains[$message[1];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
`
},{
  name: "with all",
  usage: "Retira todo seu dinheiro",
  aliases: ['wh all', 'retirar tudo', 'withdraw all'],
  code: `
$title[1;**( <:banco:1036280165162025073> ) Retirada**]
$description[1;Foram Retiradas \`$numberSeparator[$get[all]]\` $getServerVar[dineco] da sua conta do banco] 
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - with all]
$color[303136]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$get[all]];$authorID]
$setGlobalUserVar[banco;$sub[$getGlobalUserVar[banco;$authorID];$get[all]];$authorID]
$let[all;$getGlobalUserVar[banco;$authorID]]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=$message[1];{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$checkContains[$message[1];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
`
},
{
  name: "with",
  usage: "Retira uma quantia especificada de dinheiro",
  aliases: ['wh','withdraw', 'retirar', 'sacar'],
  code: `
$title[1;**( <:banco:1036280165162025073> ) Retirada**]
$description[1;Foram Retiradas \`$numberSeparator[$get[ct]]\` $getServerVar[dineco] da sua conta] 
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - with]
$color[303136]
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$get[ct]];$authorID]
$setGlobalUserVar[banco;$sub[$getGlobalUserVar[banco;$authorID];$get[ct]];$authorID]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[banco;$authorID]>=$get[ct];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem tudo isso!**}{color:RED}}]
$onlyIf[$isNumber[$get[ct]]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Isso não é um número!**}{color:RED}}]
$onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
$argsCheck[>0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantia**}{color:RED}}]
`
},{
  name: "dep",
  usage: "Deposita uma quantia de dinheiro especificada",
  aliases: ['depositar', 'deposit'],
  code: `
$title[1;**( <:carteira:1036280391528615966> ) Depósito**]
$description[1;Foram depositados \`$numberSeparator[$get[ct]]\` $getServerVar[dineco] na sua conta do banco] 
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - dep]
$color[303136]
$setGlobalUserVar[din;$sub[$getGlobalUserVar[din;$authorID];$get[ct]];$authorID]
$setGlobalUserVar[banco;$sum[$getGlobalUserVar[banco;$authorID];$get[ct]];$authorID]
$onlyIf[$getGlobalUserVar[din;$authorID]>=0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$getGlobalUserVar[din;$authorID]>=$get[ct];{newEmbed:{description:**( <:errado:1032693701450936350> ) Você não tem tudo isso!**}{color:RED}}]
$onlyIf[$checkContains[$get[ct];-;--;+;$;&;';";!;?;/;);(;@;#;*;.;,]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Inválido!**}{color:RED}}]
$onlyIf[$isNumber[$get[ct]]==true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Isso não é um número!**}{color:RED}}]
$let[ct;$replaceText[$replaceText[$replaceText[$replaceText[$message[1];k;000;1];m;000000;1];b;000000000;1];t;000000000000]]
$argsCheck[>0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite uma quantia**}{color:RED}}]
`
},{
  name: "globalCooldown",
  usage: "Mostra O globalCooldown dos seus tempos",
  aliases: ['cd', 'tempo'],
  code: `
$title[**( <:simo_info:1017567152410210364> ) globalCooldown**]
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - globalCooldown]
$color[303136]
$addField[1;$if[$get[daily]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Daily:;\`$if[$get[daily]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[daily];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[work]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Work:;\`$if[$get[work]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[work];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[beg]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Beg:;\`$if[$get[beg]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[beg];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[crime]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Crime:;\`$if[$get[crime]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[crime];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[roullete]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Roullete:;\`$if[$get[roullete]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[roullete];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[box]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Box:;\`$if[$get[box]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[boxs];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[rob]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Rob:;\`$if[$get[rob]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[rob];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[slut]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Slut:;\`$if[$get[slut]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[slut];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]
$addField[1;$if[$get[multi]>=0;( <:errado:1032693701450936350> );( <:certo:1032693703569059960> )]  Multi:;\`$if[$get[multi]>=0;$replaceText[$replaceText[$replaceText[$parseDate[$get[multi];time];hour;hora];minute;minuto];second;segundo];Disponível]\`]

$let[multi;$getglobalCooldownTime[2m;user;multi;$findMember[$message[1]];yes]] 
$let[slut;$getglobalCooldownTime[2m;user;slut;$findMember[$message[1]];yes]] 
$let[rob;$getglobalCooldownTime[7m;user;rob;$findMember[$message[1]];yes]] 
$let[box;$getglobalCooldownTime[3m;user;box;$findMember[$message[1]];yes]] 
$let[roullete;$getglobalCooldownTime[1m;user;roullete;$findMember[$message[1]];yes]] 
$let[crime;$getglobalCooldownTime[3m;user;crime;$findMember[$message[1]];yes]] 
$let[work;$getglobalCooldownTime[1m;user;work;$findMember[$message[1]];yes]]
$let[beg;$getglobalCooldownTime[1m;user;beg;$findMember[$message[1]];yes]]
$let[daily;$getglobalCooldownTime[24h;user;daily;$findMember[$message[1]];yes]]
`
},{
  name: "rank",
  usage: "Veja os tops ricos do simo",
  aliases: ['ranking', 'placar', 'leaderboard', 'lb', 'rk'],
  code: `
$title[1;Rank]
$color[303136]
$description[1;
1 -$if[$splitText[1]==;Não listado;$splitText[1]]
2 -$if[$splitText[2]==;Não listado;$splitText[2]]
3 -$if[$splitText[3]==;Não listado;$splitText[3]]
4? -$if[$splitText[4]==;Não listado;$splitText[4]]
5? -$if[$splitText[5]==;Não listado;$splitText[5]]
6? -$if[$splitText[6]==;Não listado;$splitText[6]]
7? -$if[$splitText[7]==;Não listado;$splitText[7]]
8 -$if[$splitText[8]==;Não listado;$splitText[8]]
9? -$if[$splitText[9]==;Não listado;$splitText[9]]
10 -$if[$splitText[10]==;Não listado;$splitText[10]]]
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - rank]
$textSplit[$globaluserLeaderboard[total;asc;**{username}** » \`{value}\` $getServervar[dineco]];\n]
`
},{
	name: "set money emoji",
  aliases: ["sme", "set emoji money"],
  usage: "Seta o emoji de dinheiro da economia para seu emoji",
	code: `
$setServerVar[dineco;$message]
Emoji de dinheiro setado para: $message
caso queira resetar, use \`$getServerVar[prefixo]reset money emoji\`
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - setmoney]
$onlyPerms[manageserver;Você não tem permição de trocar minha moeda]
$onlyIf[$checkContains[$message;<;:;>]==true;Isso não é um emoji, coloque um emoji para trocar o emoji da moeda atual]
`
},{
	name: "reset money emoji",
  aliases: ["rme", "reset emoji money"],
  usage: "Reseta o emoji do dinheiro da economia",
  code: `
Dinheiro resetado para <:simo_coin:1020681355677417533>
$setServerVar[dineco;<:simo_coin:1020681355677417533>]
$onlyPerms[manageserver;Você não tem permição de resetar minha moeda]
`
},{
name: "$alwaysExecute",
code:`$setGlobalUserVar[total;$sum[$getGlobalUserVar[banco;$authorID];$getGlobalUserVar[din;$authorID]];$authorID] 
`
},{
  name: "slut",
  usage: "Se prostitui e ganha entorno de 300 a 600 moedas",
  aliases: ['vagabundiar', 'prostituir'],
  code: `
$setGlobalUserVar[din;$sum[$getGlobalUserVar[din;$authorID];$random[300;600]];$authorID]
$title[1;**( <:bolsa:1036275935374217266> ) Prostituir**]
$description[1;Você se prostituiu e ganhou \`$random[300;600]\` $getServerVar[dineco]]
$footer[1;$username;$authorAvatar]
$channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - slut]
$color[303136]
$globalCooldown[2m;{newEmbed:{description:**( <:relogio:1032695531316727868> ) Aguarde %time% para se prostituir novamente!**}{color:RED}}]
`
}
]