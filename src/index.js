import './scss/index.scss'

const shadowHost = document.getElementById('shadow')
const shadowRoot = shadowHost.attachShadow({ mode: 'open' })
const style = document.createElement('style')
style.textContent = `
    p {
        color: red;
    }
`
shadowRoot.appendChild(style)
const p = document.createElement('p')
p.innerHTML = 'I\'m a paragraph in a Shadow DOM!'
shadowRoot.appendChild(p)