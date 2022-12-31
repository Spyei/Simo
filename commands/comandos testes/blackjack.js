module.exports = [{
  name: "bj",
  usage: "jogue um jogo de cartas e quem passar de 21 pontos perde, e quem fizer mais pontos sem passar de 21 ganha",
  code: `
$setUserVar[bjactive;true;$authorID]
$title[1;$username BlackJack]
$addField[1;Apostador;?;yes]
$addField[1;Você;$getUserVar[playerbj;$authorID];yes]
$color[1;303136]
$setUserVar[playerbj;$random[1;12];$authorID]
$setUserVar[dealerbj;$random[13;18];$authorID]
$footer[1;$username;$authorAvatar]
$addButton[1;hit;danger;hit_$authorID;no;]
$addButton[1;stand;success;stand_$authorID;no;]
$cooldown[1s;espera %time% para jogar denovo]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code: `
 $setUserVar[playerbj;$sum[$getUserVar[playerbj;$authorID];$random[1;11]];$authorID]
$if[$getUserVar[playerbj;$authorID]>21]
$interactionUpdate[;{newEmbed:
    {title:$username blackjack}
    {field:Você:$getUserVar[playerbj;$authorID]:yes}
    {field:Apostador:$getUserVar[dealerbj;$authorID]:yes}
    {field:Você Perdeu!:Você passou de 21!:no}
    {color:RED}
    {footer:Use hit para atacar ou stand para esperar:$authorAvatar}
}]
$setUserVar[bjactive;false;$authorID]
$else
$interactionUpdate[;{newEmbed:
    {title:$username blackjack}
    {field:Você:$getUserVar[playerbj;$authorID]:yes}
    {field:Apostador:?:yes}
    {color:303136}
    {footer:Use hit para atacar ou stand para esperar:$authorAvatar}
    };{actionRow:
        {button:stand:success:stand_$authorID:no:}
        {button:hit:success:hit_$authorID:no:}
    }]
$endif
$onlyIf[$getUserVar[bjactive;$authorID]!=false;fsd]
$onlyIf[$interactionData[customId]==hit_$authorID;]
`
},{
  type: "interaction",
  prototype: "button",
  $if: "v4",
  code: `
$if[$getUserVar[dealerbj;$authorID]>$getUserVar[playerbj;$authorID]]
$interactionUpdate[;{newEmbed:
    {title:$username blackjack}
    {field:Você:$getUserVar[playerbj;$authorID]:yes}
    {field:Apostador:$getUserVar[dealerbj;$authorID]:yes}
    {field:Empate!:O apostador fez mais pontos até 21:no}
    {color:RED}
    {footer:Use hit para atacar ou stand para esperar:$authorAvatar}
}]
$setUserVar[bjactive;false;$authorID]
$elseIf[$getUserVar[dealerbj;$authorID]==$getUserVar[playerbj;$authorID]
$interactionUpdate[;{newEmbed:
    {title:$username blackjack}
    {field:Você:$getUserVar[playerbj;$authorID]:yes}
    {field:Apostador:$getUserVar[dealerbj;$authorID]:yes}
    {field:Empate!:Os dois fizeram a mesma quantia!:no}
    {color:RED}{footer:Use hit para atacar ou stand para esperar:$authorAvatar}
}]
$setUserVar[bjactive;false;$authorID]
$endelseif
$elseif[$getUserVar[dealerbj;$authorID]>21]
$interactionUpdate[;{newEmbed:
    {title:$username blackjack}
    {field:Você:$getUserVar[playerbj;$authorID]:yes}
    {field:Apostador:$getUserVar[dealerbj;$authorID]:yes}
    {field:Você ganhou!:Apostador passou de 21:no}{color:GREEN}
    {footer:Use hit para atacar ou stand para esperar:$authorAvatar}}]
$setUserVar[bjactive;false;$authorID]
$endelseif
$elseif[$getUserVar[playerbj;$authorID]>21]
$interactionUpdate[;{newEmbed:
    {title:$username blackjack}
    {field:Você:$getUserVar[playerbj;$authorID]:yes}
    {field:Apostador:$getUserVar[dealerbj;$authorID]:yes}
    {field:Você Perdeu!:Você passou de 21!:no}{color:RED}
    {footer:Use hit para atacar ou stand para esperar:$authorAvatar}
}]
$setUserVar[bjactive;false;$authorID]
$endelseif
$else
$interactionUpdate[;{newEmbed:
    {field:Você:$getUserVar[playerbj;$authorID]:yes}
    {field:Apostador:$getUserVar[dealerbj]:yes}
    {color:303136}
    {footer:Use hit para atacar ou stand para esperar:$authorAvatar}
    };{actionRow:
        {button:stand:success:stand_$authorID:no:}
        {button:hit:success:hit_$authorID:no:}
    }]
$endif 
$setUserVar[dealerbj;$sum[$getUserVar[dealerbj;$authorID];$random[1;3]];$authorID]
$onlyIf[$getUserVar[bjactive;$authorID]!=false;ads]
$onlyIf[$interactionData[customId]==stand_$authorID;]
`
}]