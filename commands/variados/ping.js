module.exports = {
    name: "ping",
    aliases: "pong",
    code: `
$title[**( <:info:1033812089254461621> ) Ping**]
$color[303136]
$footer[$username;$authorAvatar]
$description[
    Calculando ping...
]
$editIn[
    $ping;
    {newEmbed:
        {title:**( <:info:1033812089254461621> ) Ping**}
        {description:
           > **Ping database** \`$math[$dbping+2]ms\`
           > **Ping mensagem** \`$djsEval[Date.now() - message.createdTimestamp;yes]ms\`
           > **Ping bot** \`$pingms\`
        }
        {color:303136}
        {footer:$username:$authorAvatar}
    }
]    
`
}