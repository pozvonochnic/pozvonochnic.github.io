
function send() {
    let name = document.getElementById("name").value
    document.getElementById("name").value = ""
    let message = document.getElementById("message").value
    document.getElementById("message").value = ""

    if (message == '') {
        document.getElementById("output").innerHTML = '<b>Ошибка: пустое сообщение!</b>'
        return
    }
    if (name == '') {
        name = 'Гость'
    }

    document.getElementById("output").innerHTML = `<b>${name}</b>: ${message}`
}