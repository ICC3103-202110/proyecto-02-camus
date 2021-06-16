const{update} = require('./update')
const{view} = require('./view')
const{app} = require('./app')

//{name: 'Santiago',temp: 0,max: 32,min: 32}

initModel = []

const state = {
  model: initModel,
  currentView: view(initModel)
}

app(state,update,view)

