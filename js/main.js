// _showPortfolio() - unwraps the portfolio and changes the code tags for the flat text
const showPortfolio = () => {
    transformCode()
}
document.getElementById('runButton').addEventListener('click', showPortfolio)

// __transformCode() - transforms the HTML tags into flat text
const transformCode = () => {
    let code = document.getElementById('code-container')
    let alreadyExists = document.getElementById('codeName')
    if (!alreadyExists) {
        code.innerHTML = ''
        let divElementName = document.createElement('div')
        let divElementOccupation = document.createElement('div')
        divElementName.id = 'codeName'
        divElementOccupation.id = 'codeOccupation'
        divElementName.style.fontSize = '1.3rem'
        code.appendChild(divElementName)
        code.appendChild(divElementOccupation)
        setTimeout(() => {
            divElementName.innerHTML = 'Executing.'
        }, 0)
        setTimeout(() => {
            divElementName.innerHTML += '.'
        }, 500)
        setTimeout(() => {
            divElementName.innerHTML += '.'
        }, 1000)
        setTimeout(() => {
            divElementName.style.fontSize = '2.5rem'
            divElementName.style.animation = 'flicker 2s'
            divElementName.innerHTML = ''
            type()
        }, 1500)
        setTimeout(() => {
            unwrapPortfolio()
            window.location.href = '#portfolio'
        }, 4000)
    }
}

// __type() - types string (uses global variables)
let i = 0
let stringName = 'I’m Dante,'
let stringOccupation = 'Full-stack developer'
const type = () => {
    if (i < stringName.length) {
        document.getElementById('codeName').innerHTML += stringName[i]
        i++
        setTimeout(type, 125)
    } else {
        document.getElementById('codeOccupation').style.animation = 'flicker 2s'
        document.getElementById('codeOccupation').innerHTML = stringOccupation
    }
}

// __unwrapPortfolio() - shows the rest of the portfolio
const unwrapPortfolio = () => {
    document.getElementById('portfolio').style.display = 'block'
    document.getElementById('portfolio').style.maxHeight = '3200px'
}

// __sendMail() - sends mail
document.getElementById('sendForm').addEventListener('click', (e) => {
    e.preventDefault()
    let info = {
        from_name: document.getElementById('from_name').value,
        from_email: document.getElementById('from_email').value,
        message: document.getElementById('message').value
    }
    if (info.from_name == '' || info.from_email == '' || info.message == '') {
        swal({
            title: "Sorry, but all fields must be filled",
            icon: "error",
            button: "Ok",
        })
    } else {
        emailjs.send('service_12jkwqw', 'template_93wf0ts', info)
        .then(() => {
            swal({
                title: "E-mail sent!",
                icon: "success",
                button: "Ok",
            })
            document.getElementById('from_name').value = ''
            document.getElementById('from_email').value = ''
            document.getElementById('message').value = ''
        })
    }
})

// __scrollBar - shows the current percentage of the total vertical scroll height
document.addEventListener('DOMContentLoaded', () => {
    const progress = document.getElementById('progressBar')
    window.addEventListener('scroll', () => {
        let height = document.documentElement
        let scrollTop = height.scrollTop || document.body.scrollTop
        let docHeight = height.scrollHeight || document.body.scrollHeight
        let percent = scrollTop / (docHeight - height.clientHeight) * 100
        progress.style.width = percent + '%'
    })
})