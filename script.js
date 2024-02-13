const toggle = document.getElementById('toggle')
// pul in the id of toggle
const nav = document.getElementById('nav')
//pull in the nav

toggle.addEventListener('click', () => nav.classList.toggle('active'))
//take the nav and toggle the active class. take the toggle add an event listener listening for a click then add a funtion => and take the nav and toggle the active class from html