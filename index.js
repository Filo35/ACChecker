console.log('I ran!')
fetch(`https://api.telegram.org/bot${process.env.CONFIG}/sendMessage`,{
    method:'POST',
    headers: {
        'Content-Type': 'application/json'
    },
    body: JSON.stringify({
        chat_id:1323791768,
        text:'YIEPPIE'
    })
})
