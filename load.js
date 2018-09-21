window.onload = () => {
    e = document.createElement('webview')
    e.id = 'clock'
    e.src = 'modules/clock/index.html'
    document.getElementsByTagName('body')[0].appendChild(e)
}
