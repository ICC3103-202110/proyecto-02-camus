//make function pure again

const inquirer = require("inquirer")
const axios = require('axios')

async function update(input,model){
    const {action} = input //add delete update
    const {name} = input
    const {city} = input
    const key = 'd844814c58ba634d9fb0b224130c66d5'

    if(action === 'Add City'){
        
        await axios
           .get(`https://api.openweathermap.org/data/2.5/weather?q=${name}&appid=${key}`)
           .then(response => {
             // Assign vars to response data
             const temp = response.data.main.temp - 273.15
             const max = response.data.main.temp_max - 273.15
             const min= response.data.main.temp_min - 273.15
             model.push({name: name, temp: temp.toFixed(2), max: max.toFixed(2), min: min.toFixed(2)})
            }).catch(error => console.log("Error"))

        return model
    }

    if(action === 'Delete City'){

        //cambiar
        var pos = 0
        while(1){
            if(model[pos].name===city){
                break
            }
            pos += 1
        }

        model.splice(pos,1)
        return model
    }

    if(action === 'Update City'){

        var pos = 0
        while(1){
            if(model[pos].name===city){
                break
            }
            pos += 1
        }

        await axios
           .get(`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}`)
           .then(response => {
             // Assign vars to response data
             const temp = response.data.main.temp - 273.15
             const max = response.data.main.temp_max - 273.15
             const min= response.data.main.temp_min - 273.15
             model[pos].temp = temp.toFixed(2)
             model[pos].max = max.toFixed(2)
             model[pos].min = min.toFixed(2)
            }).catch(error => console.log("Error"))
        
        return model
    }
}

module.exports = {
    update
}