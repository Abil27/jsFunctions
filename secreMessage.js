let secretMessage = ['Learning', 'is', 'not', 'about', 'what', 'you', 'get', 'easily', 'the', 'first', 'time,', 'it', 'is', 'about', 'what', 'you', 'can', 'figure', 'out.', '-2015,', 'Chris', 'Pine,', 'Learn', 'JavaScript'];

secretMessage.pop() // remove last item
secretMessage.push('to', 'Program') // add at the begenning
secretMessage[7] = 'right'
secretMessage.shift()
secretMessage.unshift('Pogramming')
secretMessage.splice(6, 5, 'know')
//console.log(secretMessage.length)

console.log(secretMessage.join(' '))