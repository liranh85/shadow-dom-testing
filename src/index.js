import './scss/index.scss'

let shadow = document.getElementById('shadow').attachShadow({ mode: 'open' })
const style = document.createElement('style')
style.textContent = `
    p {
        color: red;
    }
`
shadow.appendChild(style)
const p = document.createElement('p')
p.innerHTML = 'I\'m a paragraph in a Shadow DOM!'
shadow.appendChild(p)