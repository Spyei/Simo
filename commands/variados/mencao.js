module.exports = [{
  name: "<@$clientID>",
  nonPrefixed: true,
  code: `
$title[1;**( <:grampoa:1033817576091955230> ) Menção**]
$addField[**( <:lista2:1032695527730593872> ) Informações**;
> Meu prefixo neste servidor \`$getServerVar[prefixo]\`
> Caso queira mudar use \`$getServerVar[prefixo]setprefix\`
]
$footer[Autor — $userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$color[1;303136]
`
},{
  name: "<@!$clientID>",
  nonPrefixed: true,
  code: `
$title[1;**( <:grampoa:1033817576091955230> ) Menção**]
$addField[**( <:lista2:1032695527730593872> ) Informações**;
> Meu prefixo neste servidor \`$getServerVar[prefixo]\`
> Caso queira mudar use \`$getServerVar[prefixo]setprefix\`
]
$footer[Autor — $userTag[$authorID];$authorAvatar]
$thumbnail[$userAvatar[$clientID]]
$color[1;303136]
`
}]