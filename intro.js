function $(tag){
   return document.getElementById(tag)
}
const navlist = document.getElementsByClassName("navlist")
const menuButton = $('menu-button')
const menucontent = document.getElementsByClassName('menu-content')
const closemenu = $('close-menu')

const  arrowUp = $('arrow-up')
const arrowDown = $('arrow-down')
const subFeatures = $('sub-features')

const compUp = $('arrowCup')
const compCdown = $('arrowCdown')
const compUl = $('comp-ul')
function hideClick(){
   menuButton.classList.toggle('active')
navlist[0].classList.toggle('navlist-active')
closemenu.classList.toggle('active')
menucontent[0].classList.toggle('active')


}

function CloseClick(){
   closemenu.classList.remove('active')
   menucontent[0].classList.remove('active')
   navlist[0].classList.remove('navlist-active')
menuButton.classList.toggle('active')
}

const clickArrUP = () =>{
arrowUp.style.display='none',
subFeatures.style.display='none'
arrowDown.style.display='flex'
}

const clickArrDown= ()=>{
   arrowDown.style.display='none'
   subFeatures.style.display='block'
   arrowUp.style.display='flex'
}

function CompUp(){
   compCdown.style.display='flex'
   compUp.style.display='none'
   compUl.style.display = 'none'

}
function CompDown(){
compUl.style.display='block'
compUp.style.display='block'
compCdown.style.display='none'

}