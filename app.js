const cron = require("node-cron");
const shell  = require ("shelljs");

cron.schedule("*/1 * * * *", function(){
    console.log("cron running successfully.");
    if (shell.exec("node Sarthak.js").code !=0){
        console.log("Failed.")
    }
})