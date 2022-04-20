const messages = []

function creatMessage(username, message){
    const newMessage = {
        message,username,
        date: Date.now(),
        message: 'grillkorv'
    }
    messages.unshift(newMessage)
}

function getMessages(after){
    if(!after){
        return messages.slice(0, 20)
    }else{
        return messages.filter( message => message.date > after).slice(0,20)
    }
}

module.exports = { creatMessage, getMessages}