
function send() {
    let name = document.getElementById("name").value
    document.getElementById("name").value = ""
    let message = document.getElementById("message").value
    document.getElementById("message").value = ""

    if (message == '') {
        document.getElementById("error").innerText = 'Ошибка: пустое сообщение!'
        return
    }
    if (name == '') {
        name = 'Гость'
    }

    document.getElementById("output").innerHTML = `<b>${name}</b>: ${message}`
    document.getElementById("error").innerText = ``
}