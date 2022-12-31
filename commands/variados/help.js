module.exports = {
    name: "help",
    usage: "Mostra todos os comandos utilizaveis do bot",
    aliases: ["ajuda", "comandos", "commands"],
    code: `
$title[
    **( <:lista2:1032695527730593872> ) Help menu**
]
$color[
    303136
]    
$footer[
    $username;
    $authorAvatar
]
$addField[
    ( <:info:1033812089254461621> ) Outros;
    > \`userinfo (usuário)\`, \`ping\`, \`setprefix\` 
]
$addField[
    ( <:dinheiros:1036272118729560194> ) Economia;
    > \`bitcoin\`, \`box\`, \`bet <usuário> <quantia>\`, \`multiplicar <quantia>\`, \`shop\`, \`pay <usuário> <quantia>\`, \`pix <chave pix> <quantia>\`, \`gerar chave pix\`, \`chave pix (usuario)\`, \`balance (usuario)\`, \`transações\`, \`work\`, \`daily\`, \`beg\`, \`slut\`, \`cooldown\`, \`setjob <emprego>\`, \`rob <usuário>\`, \`crime\`, \`depositar <quantia | all>\`, \`sacar <quantia | all>\`, \`rank\`, \`set money emoji <emoji>\`, \`reset money emoji\`
]
`
}