console.log('I ran!')
fetch('https://api.telegram.org/bot6596864501:AAEsWTerpzFWZe0t9U8WV2PgN0Ae20Sx0s0/sendMessage',{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id:1323791768,
        text:'YIEPPIE'
    })
})
