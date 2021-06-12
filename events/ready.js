const chalk = require('chalk');
const figlet = require('figlet');

module.exports.run = (client) => {
console.log(chalk.blackBright('Successfully Established an Connection with the Client.'));
console.log(chalk.redBright(`Client Name: ${client.user.tag}`));
console.log(chalk.yellowBright(`Client ID: ${client.user.id}`));
console.log(chalk.greenBright(`Client Stats: ${client.users.cache.size} Users on ${client.guilds.cache.size} Servers`));
console.log(chalk.cyanBright('Client Developers: Alone'));
figlet(`DANBOT HOSTING | DBH`, function(err, data) {
    if (err) {
        console.log('An Error has Occured while Making the Ascii...');
        console.dir(err);
        return;
    }
    console.log(`═════════════════════════════════════════════════════════════════════════════`);
    console.log(data);
    console.log(`═════════════════════════════════════════════════════════════════════════════`);
});
//Made the Console Fancy XD
    
    let danbot = client.guilds.cache.get("639477525927690240")
    let humans = danbot.members.cache.filter((mem) => !mem.user.bot).size;
    client.user.setActivity(`Watching over ${humans} DanBot Members!`, {type: "WATCHING"}) //Setting the Activity of the Client
}