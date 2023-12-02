get()
//setInterval(get, 2000)


function send() {
    // let name = document.getElementById("name").value
    let message = document.getElementById("message").value

    if (message == '') {
        document.getElementById("error").innerText = 'Ошибка: пустое сообщение!'
        return
    }
    //if (name == '') {
    //name = 'Гость'
    //}
    //(async () => {
    //  const response = await fetch('chat.php?message=' + message);
    //const answer = await response.text();
    //document.getElementById("message").value = ""
    //}
    //    )();
    //}
}

function get() {
    (async () => {
        const response = await fetch('chat.txt');
        const answer = response.text();
        document.getElementById('messages').innerText = answer
    }
    )();
}

    //(async () => {
      //  const response = await fetch('chat.php');
        //const answer = await response.text();
        //document.getElementById('messages').innerText = answer
 //   }
// )()
