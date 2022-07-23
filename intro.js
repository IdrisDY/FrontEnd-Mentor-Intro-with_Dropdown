function $(tag){
   return document.getElementById(tag)
}
const container = document.getElementsByClassName('container')
const navhead = document.getElementsByClassName('nav-head')
const maincontent = document.getElementsByClassName('main-content')
console.log(maincontent)
const navlist = document.getElementsByClassName("navlist")
const menuButton = $('menu-button')
const menucontent = document.getElementsByClassName('menu-content')
const closemenu = $('close-menu')
const snaplogo = $('snap-logo')
const menuContainer = document.getElementsByClassName('menu-container')[0]

const  arrowUp = $('arrow-up')
const arrowDown = $('arrow-down')
const subFeatures = $('sub-features')

const compUp = $('arrowCup')
const compCdown = $('arrowCdown')
const compUl = $('comp-ul')
/* A function that toggles the class active on the menuButton, navlist, closemenu and menucontent. */
function showClick(){
   menuButton.classList.add('active')
navlist[0].classList.add('navlist-active')
closemenu.classList.add('active')
menucontent[0].classList.add('active')
menuContainer.classList.add('active')
container[0].classList.add('fixed')
}

/**
 * A function that is used to close the menu when the user clicks on the close button.
 */
function CloseClick(){
   closemenu.classList.remove('active')
   menucontent[0].classList.remove('active')
   navlist[0].classList.remove('navlist-active')
menuButton.classList.toggle('active')
menuContainer.classList.remove('active')
container[0].classList.remove('fixed')

}

/**
 * When the arrowUp button is clicked, hide the arrowUp button, hide the subFeatures div, and show the
 * arrowDown button.
 */
const clickArrUP = () =>{
arrowUp.style.display='none',
subFeatures.style.display='none'
arrowDown.style.display='flex'
}

/**
 * When the arrowDown element is clicked, hide the arrowDown element, show the subFeatures element, and
 * show the arrowUp element.
 */
const clickArrDown= ()=>{
   arrowDown.style.display='none'
   subFeatures.style.display='block'
   arrowUp.style.display='flex'
}

/**
 * When the user clicks on the button with the id of compUp, the button with the id of compCdown will
 * be displayed, the button with the id of compUp will be hidden, and the unordered list with the id of
 * compUl will be hidden.
 */
function CompUp(){
   compCdown.style.display='flex'
   compUp.style.display='none'
   compUl.style.display = 'none'

}
/**
 * When the user clicks on the button with the id of compCdown, the element with the id of compUl will
 * be displayed, the element with the id of compUp will be displayed, and the element with the id of
 * compCdown will be hidden.
 */
function CompDown(){
compUl.style.display='block'
compUp.style.display='block'
compCdown.style.display='none'

}