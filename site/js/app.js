get()
setInterval(get, 2000)


function send() {
    let name = document.getElementById("name").value
    let message = document.getElementById("message").value
    document.getElementById("message").value = ''

    if (message == '') {
        document.getElementById("error").innerText = 'Ошибка: пустое сообщение!'
        return
    }
    if (name == '') {
        name = 'Гость'
    }
    // (async () => {
    //     const response = await fetch('chat.php?message=' + name + `: ` + message);
    //     const answer = await response.text();
    //     document.getElementById("message").value = ""
    // }
    // )();

    (async () => {
        const response = await fetch('chat.php?message=' + name + `: ` + message);
        const answer = await response.text();
        document.getElementById("message").value = "";
        document.getElementById("error").innerText = ''
    }
    )();
}


function get() {
    (async () => {
        const response = await fetch('chat.php');
        const answer = await response.text();
        document.getElementById('messages').innerText = answer
    }
    )();
}

    // document.getElementById("error").innerText = ''
    // document.getElementById("output").innerHTML = `< b > ${ name }:</ > ${ message }`
// }
// } ';
// }
// )()
