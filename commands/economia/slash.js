module.exports = {
  name: "createapp",
  code : `
$sendMessage[> Added \`casino\` Global Slash Command]
$createApplicationCommand[global;casino;Gire a roleta e veja sua sorte!;true;slash;{
  "name" : "quantia",
  "description" : "Gire a roleta e veja sua sorte!",
  "type" : 3,
  "required" : true
}]
$wait[100ms]
$sendMessage[> Added \`balance\` Global Slash Command]
$createApplicationCommand[global;balance;Veja seus dados bancarios, ou o seu!;true;slash;{
  "name": "user", 
  "description": "Mencione Alguém para ver os dados bancarios!", 
  "required": false, 
  "type": "USER"
}]
$wait[100ms]
$sendMessage[> Added \`beg\` Global Slash Command]
$createApplicationCommand[global;beg;Mendigue e ganhe uns trocados!;true;slash]
$wait[100ms]
$sendMessage[> Added \`daily\` Global Slash Command]
$createApplicationCommand[global;daily;Pegue seu bônus diário, e ganhe dinheiro!;true;slash]
$wait[100ms]
$sendMessage[> Added \`work\` Global Slash Command]
$createApplicationCommand[global;work;Trabalhe e ganhe dinheiro!;true;slash]
$wait[1100mss]
$sendMessage[> Added \`rob\` Global Slash Command]
$createApplicationCommand[global;rob;Roube o mencionado!;true;slash;{
  "name": "user", 
  "description": "Mencione Alguém para roubar!", 
  "required": true, 
  "type": "USER"
}]
$wait[100ms]
$sendMessage[> Added \`setjob\` Global Slash Command]
$createApplicationCommand[global;setjob;Sete seu emprego, com algo digitado;true;slash;{
  "name": "emprego", 
  "description": "Digite algo para ser seu emprego!", 
  "required": true, 
  "type" : 3
}]
$wait[100ms]
$sendMessage[> Added \`depall\` Global Slash Command]
$createApplicationCommand[global;depall;Deposite todo o seu dinheiro na sua conta!;true;slash]
$wait[100ms]
$sendMessage[> Added \`withall\` Global Slash Command]
$createApplicationCommand[global;withall;Retire todo o seu dinheiro da sua conta!;true;slash]
$wait[100ms]
$sendMessage[> Added \`crime\` Global Slash Command]
$createApplicationCommand[global;crime;Faça um crime e ganhe dinheiro, ou perca!;true;slash]
$wait[100ms]
$sendMessage[> Added \`cooldown\` Global Slash Command]
$createApplicationCommand[global;cooldown;Veja seus cooldowns!;true;slash]
$wait[100ms]
$sendMessage[> Added \`slut\` Global Slash Command]
$createApplicationCommand[global;slut;Se prostitua e ganhe uma renda extra!;true;slash]
$wait[100ms]
$sendMessage[> Added \`rank\` Global Slash Command]
$createApplicationCommand[global;rank;Veja o rank global de economia do simo!;true;slash]
$wait[100ms]
$sendMessage[> Added \`embed\` Global Slash Command]
$createApplicationCommand[global;embed;Monte uma embed personalizada!;true;slash]
$wait[100ms]
$sendMessage[> Added \`dep\` Global Slash Command]
$createApplicationCommand[global;dep;deposite dinheiro na sua conta!;true;slash;{
  "name": "quantia", 
  "description": "Digite uma quantia para ser depositada!", 
  "required": true, 
  "type": 3
}]
$wait[100ms]
$sendMessage[> Added \`with\` Global Slash Command]
 $createApplicationCommand[global;with;Retire dinheiro da sua conta!;true;slash;{
  "name": "quantia", 
  "description": "Digite uma quantia para ser retirada!", 
  "required": true, 
  "type": 3
}]
 $createApplicationCommand[global;warns;veja a sua quantidade de avisos ou a de outro usuário;true;slash;{

  "name": "user", 

  "description": "Mencione alguém para ver as warns", 

  "required": false, 

  "type": "USER"

}]
$wait[100ms]
$sendMessage[> Added \`agencia\` Global Slash Command]
$createApplicationCommand[global;agencia;Selecione sua agencia desejada!;true;slash]
$onlyForIDs[955095844275781693;481534167893540874;]
` 
}