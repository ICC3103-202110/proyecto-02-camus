const {getTitle} = require('./view')
const {inputForm} = require('./view')
const {printTable} = require('console-table-printer')

//impure
async function app(state,update,view){
    
    const {model,currentView} = state
    const {title,table} = currentView
    console.log(title)

    const input = await inputForm(model)
    const updateModel = await update(input,model)
    state = {
        ...state,
        model: updateModel,
        currentView: view(updateModel)
        }
    
    while (true){
    const {model,currentView} = state
    const {title,table} = currentView
    //I/O
    console.clear()
    console.log(title)
    printTable(table)
    //FORM (Ask user input)
    const input = await inputForm(model)
    const updateModel = await update(input,model)
    state = {
        ...state,
        model: updateModel,
        currentView: view(updateModel)
        }
    }
}

module.exports = {
    app
}