const fs = require('fs')

fs.readFile("index.txt", 'utf8', (err, data) => {
    if(err){
        console.log(err)
    }
    const modifiData = data.toUpperCase()

    fs.writeFile("output.txt", modifiData, (err) => {
        if(err){
            console.log(err)
            console.log("File not written")
        }
       console.log("File written successfully")
       fs.readFile("output.txt", 'utf8', (err, data) => {
        if(err){
            console.log(err)
        }
        console.log(data)
       })
    })
})