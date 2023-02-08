import { CreateElement } from "./createElement.js"
import { switchMode } from "./switchMode.js"

const nameUser = 'MicaelaPinheiroDS'
const githubURL = `https://api.github.com/users/${nameUser}`
const socialMediaIcons = {
    github: 'logo-github',
    twitter: 'logo-twitter',
    linkedin: 'logo-linkedin'
}

await fetch(githubURL).then(response => response.json().then(data => {
    function profileElement(){
        //IMG
        new CreateElement('#profile','div',app)
        new CreateElement('#profileImg','img',profile)
        profileImg.src = data.avatar_url
        profileImg.alt = `Imagem do usuario ${nameUser} tirado do site github`
        //TEXT USER NAME 
        new CreateElement('#nameLogin', 'p', profile)
        nameLogin.innerText = `@${data.login}`
    }
    profileElement()

}))

async function switchModeElement(){
    const switchMode = new CreateElement('#switchMode', 'div', app)
    new CreateElement('#switchButton','button', switchMode)
    new CreateElement('#switchTrack', 'span', switchMode)
}

switchModeElement();
switchMode();

await fetch(`${githubURL}/repos`).then(response => response.json().then(data => {
    function reposElementList(){
        new CreateElement('#myProjetList','ul',app)
        let item

        for(let i = 0; i <= 3; i++){
           item = new CreateElement('.projetListItem', 'li', myProjetList)
           item = new CreateElement('.projetListLink','a', item)
           item.innerText = data[i].name
           item.href = data[i].html_url
           item.target = '_blank'
        }

    }
    reposElementList()
}))

async function socialLinksElement(){
    new CreateElement('#socialLink','div', app)
    for(let i in socialMediaIcons){
        socialLink.innerHTML += `<ion-icon name="${socialMediaIcons[i]}"></ion-icon>`
    }

}

function footerElement(){
    new CreateElement('#footer','footer',app)
    footer.innerHTML = 'Feito com ♥ pela <a href="https//www.rocketseat.com.br/">Rocketseat</a>'
}

socialLinksElement()
footerElement()