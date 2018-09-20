window.onload = () => { setInterval(update, 50); }

function update() {
    let now = new Date()
    document.getElementById('clock-h').innerText = now.getHours().toString().padStart(2, '0')
    document.getElementById('clock-m').innerText = now.getMinutes().toString().padStart(2, '0')
    document.getElementById('clock-s').innerText = now.getSeconds().toString().padStart(2, '0')
}
