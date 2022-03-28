#!/usr/bin/env node


import boxen from 'boxen';
import chalk from 'chalk';
import inquirer from 'inquirer';
import open from 'open';

console.clear();

const prompt = inquirer.createPromptModule();
const questions = [
    {
        type: "list",
        name: "action",
        message: "What do you want to do?",
        choices: [
            {
                // Use chalk to style headers
                name: `Send an ${chalk.bold("email")}?`,
                value: () => {
                    open("mailto:enr.delpriore@gmail.com");
                    console.log("\nI'm waiting for your e-mail!\n");
                }
            },
            {
                name: "Exit",
                value: () => {
                    console.log("Good bye, have a nice day!\n");
                }
            }
        ]
    }
];

const data = {
    name: chalk.red("                    Enrico"),
    handle: chalk.green("enrdp"),
    work: chalk.white("Student at BeCode.org"),
    github: chalk.gray("https://github.com/") + chalk.green("enrdp"),
    npx: chalk.green("npx") + " " + chalk.white("enrdp"),
    labelWork: chalk.white.bold("            Work:"),
    labelGitHub: chalk.white.bold("            GitHub:"),
    labelCard: chalk.white.bold("            Card:"),
};
console.log(
    chalk.green(
        boxen(
            [
                `${data.name} @${data.handle}`,
                ``,
                `${data.labelWork} ${data.work}`,
                ``,
                `${data.labelGitHub} ${data.github}`,
                ``,
                `${data.labelCard} ${data.npx}`,
                ``,
                `${chalk.white.italic('"If you want to find the secrets of the universe,')}`,
                `${chalk.white.italic('think in terms of energy, frequency and vibration." ')}`,
                 `                                        `+`${chalk.red.bold("(N. Tesla)")}`
            ].join("\n"),
            {
                padding: 1,
                margin: 1,
                float: "center",
                borderStyle: "round",
                borderColor: "red",
            },
        ),
    ),
);
prompt(questions).then(answer => answer.action());