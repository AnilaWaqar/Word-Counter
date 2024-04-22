#! /usr/bin/env node

import inquirer from "inquirer"
import chalk from "chalk"
 
console.log(chalk.bgCyanBright("\n                                    "));
console.log(chalk.bgCyanBright("         "+

(" WORDS ")+"  "+(" COUNTER ")+"         "));
console.log(chalk.bgCyanBright("                                    \n"));
console.log(chalk.bgCyanBright("   "+chalk.bgBlue.bold(" We Will Count the Words of your Given Text ")+"   "));

let condition: boolean = true;


while (condition) {

    const answer: {
        Scentence: string
    } = await inquirer.prompt(
        [
            {
                name: "Scentence",
                message: chalk.bgCyan.bold("\nEnter Your Sentences for countig the words: "),
                type: "input"
            }
        ]
    );
    
    const words = answer.Scentence.trim().split(" ");

    console.log("\n");
    console.log(words);

    
    console.log(chalk.bgCyan.bold("\nYour Words: ")+chalk.bgBlue.bold(words));
    
    
    console.log(chalk.bold("\nTotal Words in your Given Text is:"),chalk.bgBlue.bold(" "+words.length+" "));
    
    
    const forMore = await inquirer.prompt(
        [
            {
                name: "wantMore",
                message: chalk.bold("\nDo you want to Count more Words?"),
                type: "confirm",
                default: true
            }
        ]
    );
    
    condition = forMore.wantMore;
    

} 
console.log(chalk.bgCyanBright("\n                                 "));
console.log(chalk.bgCyanBright("       "+chalk.bold(" Thanks For Using Word Counter")+"        "));
console.log(chalk.bgCyanBright("                                 "));
