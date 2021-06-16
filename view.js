const figlet = require('figlet')
const chalk = require('chalk')
const inquirer = require('inquirer')

function getTitle(){
    return chalk.blue(
        figlet.textSync(
            'Weather App',
            {
                horizontalLayout: 'full',
                font: 'Nancyj-Underlined'
            }
        )
    )
}

//edit

function inputForm(model){
    const message_1 = 'Select action: '
    const message_2 = 'Location?'

    return inquirer.prompt([
        {
            name: 'action',
            type: 'list',
            message: message_1,
            choices: ['Add City','Update City','Delete City'],
        },
        {
            name: 'name',
            type: 'input',
            message: message_2,
            when: (answers) => answers.action === 'Add City'
        },
        {
            name: 'city',
            type: 'list',
            choices: model, //IMPORTANT
            when: (answers) => answers.action === 'Update City' || answers.action === 'Delete City' 
        }
    ])
}

function view(model){
    return {
        title: getTitle(),
        table: model
    }
}

module.exports = {
    view,
    inputForm
}