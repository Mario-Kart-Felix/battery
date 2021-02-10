import "index.scss"
import 'bootstrap';
// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

console.info("lets  jh!")
// Burger menus
document.addEventListener('DOMContentLoaded', function() {
    // open/close
    const toggler = document.querySelectorAll('[data-toggle="side-menu"]');

    if (toggler.length) {
        for (var i = 0; i < toggler.length; i++) {
            const target = toggler[i].getAttribute('data-target');

            if (target.length) {
                toggler[i].addEventListener('click', function(event) {
                    event.preventDefault();
                    const menu = document.querySelector(target);

                    if (menu) {
                        menu.classList.toggle('d-none');
                    }
                });
            }
        }
    }
});
console.info("YAY for coding !!")
const batt = document.getElementById('batt');
const battId = document.getElementById('bat-id');


var i = 0;
batt.addEventListener('click', (event) => {
    // Callback
    var i = battId.value;
    console.log(i);
    battId.value = ++i;
    console.log(`i clicked ${i} times`)
    // event.currentTarget.setAttribute("disabled", "");
});