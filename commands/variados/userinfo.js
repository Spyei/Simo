module.exports = {
    name: "userinfo",
    usage: "Mostra informações do usuario",
    aliases: ["ui"],
    code: `
    $color[303136]
    $thumbnail[$userAvatar[$findUser[$message]]]
    $title[1;**( <:info:1033812089254461621> ) User info**]
    $addField[**Informações do usúario $username[$finduser[$message]]**;
   > **Badges do discord:** $replaceText[$replaceText[$replaceText[$replaceText[$replaceText[$getUserBadges[$finduser[$message]];HOUSE_BRILLIANCE;<:badge_brilliance:1000403096104620033>];HOUSE_BRAVERY;<:badge_bravery:1000403094246535218>];HOUSE_BALANCE;<:badge_balance:1000403391962423316>];VERIFIED_BOT;<:badge_bot:1000403098486980779>];none;\`Nenhuma badge!\`]
   > **Boost no servidor:** $replaceText[$replaceText[$isBoosting[$finduser[$message]];false;\`Não está impulsionando o servidor!\`];true;<:boost:1000405154970992741> \`Está impulsionando o servidor!\`]
   > **Entrou aqui em:** <t:$truncate[$math[$memberJoinedDate[$finduser[$message]]/1000]]:D>
   > **Conta criada em:** <t:$truncate[$math[$creationDate[$finduser[$message];ms]/1000]]:D>
   > **Plataforma:** \`$replaceText[$replaceText[$toLocaleUppercase[$platform[$findUser[$message]]];Desktop;Pc];None;Offline]\`
   > **Atividade:** \`$replaceText[$replaceText[$toLocaleUppercase[$activity[$guildID;$finduser[$message]]];None;Sem atividade];Custom Status;Status Personalizado]\`
   > **Status:** $replaceText[$replaceText[$replaceText[$replaceText[$status[$finduser[$message]];online;<:online:998330562764886056>];idle;<:idle:998578491098419271>];dnd;<:donot:998556708324524162>];offline;<:ofline:998330593106477187> ]
   > **Discriminator:** \`#$discriminator[$finduser[$message]]\`
   > **Cargo mais alto:** <@&$highestRole[$finduser[$message]]>
   > **ID:** \`$findUser[$message]\`]
   $channelSendMessage[1020695269903433838;[DEBUG] => $userTag[$authorID] Usou o comando - User Info]
   $footer[1;$username[$finduser[$message]];$useravatar[$finduser[$message]]]
   $textSplit[$creationDate[$findUser[$message];time];,]
   $textSplit[$creationDate[$authorid;time];,]
   ` 
   }