const url = 'https://www.youtube.com/watch?v=yyfCPyQR-SE'
const btn = document.querySelector('#btn')

function sim () {
    const win = window.open(url, '_blank')
    win.focus()
}

btn.addEventListener('click', () => {
    openInNewTab(url)
})

function desvia(t) {
    var btn = t
    btn.style.position = 'absolute'
    btn.style.bottom = geraPosicao(10, 90)
    btn.style.left = geraPosicao(10, 90)
    console.log("opa, desviei...")
}


function geraPosicao(min, max) {
    return (Math.random() * (max - min) + min) + "%"
}