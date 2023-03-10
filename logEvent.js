const { format } = require('date-fns')
const { v4: uuid } = require('uuid');


const path = require('path');
const fs = require('fs');
const { builtinModules } = require('module');
const fsPromises = require('fs').promises;

const logEvents = async (message, logName) => {
    const dateTime = `${format(new Date(), 'yyyy|MM|dd\tHH:mm:ss')}`;
    const logItem = `\n${dateTime}\t${uuid()}\t${message}`;
    console.log(logItem);

    try {
        if(!fs.existsSync(path.join(__dirname, 'logs'))){
            await fsPromises.mkdir(path.join(__dirname, 'logs'))
        }
        await fsPromises.appendFile(path.join(__dirname, 'logs', logName), logItem)
        // catching errors
    } catch (error) {
       console.error(error) 
    }
}


module.exports = logEvents;