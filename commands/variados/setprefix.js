module.exports = {
  name: "setprefix",
  aliases: ["set-prefix", "prefix", "prefixo", "setar prefixo", "setar-prefixo"],
  usage: "Retorna as informações do comando desejado",  
  code: `
$title[**( <:grampoa:1033817576091955230> ) Set prefix**]
$description[O prefixo para esse servidor foi mudado para \`$message\`]
$setServerVar[prefixo;$message]
$footer[$username;$authorAvatar]
$color[303136]
$onlyIf[$charCount[$message]<=3;{newEmbed:{description:**( <:errado:1032693701450936350> ) O prefixo só pode conter 3 caracteres**}{color:RED}}]
$onlyIf[$checkContains[$message;
]!=true;{newEmbed:{description:**( <:errado:1032693701450936350> ) Sem quebra de linha**}{color:RED}}]
$argsCheck[>0;{newEmbed:{description:**( <:errado:1032693701450936350> ) Digite um prefixo a ser trocado**}{color:RED}}]
$onlyPerms[admin;]
`
}