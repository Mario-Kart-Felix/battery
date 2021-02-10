import "index.scss"
import 'bootstrap';
// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/)
componentsContext.keys().forEach(componentsContext)

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

//  Objects Store
var batOjb = {
    capacity: 3200,
    capacity_avail: 0.83,
    totalWh: 241.92,
    availWh: 2656
};
// Ipad Pro
var iPadOjb = {
    Wh2Charg: 28,
    ChargfromQik: 7.2
};
// console.info(batOjb["availWh"])

// batteries
const batt = document.getElementById('batt');
const battId = document.getElementById('bat-id');
// hours
const hoursId = document.getElementById('hrs-id');
// tablets iPad Pro
const tabl = document.getElementById('tabl');
const tablId = document.getElementById('tab-id');
// calc button
const button = document.getElementById('submit');
//
const addBitsUp = (element, element2Add) => {
    element.addEventListener('click', (event) => {
        // Callback
        var i = element2Add.value;
        // console.log(i);
        element2Add.value = ++i;
        // console.log(`i clicked ${i} times`)
        // event.currentTarget.setAttribute("disabled", "");
    });

};
///
const clearAlert = () => {
    battId.classList.remove("alert-success");
    console.info("it worked")
};

// lets go SOUP TIME !!!
window.addEventListener("mousedown", function() {
    // could use select
    clearAlert();
}, false);

// console.info(hoursId.value)

button.addEventListener('click', (event) => {
    // get all the values bitches
    var hours = hoursId.value;
    var tablets = tablId.value;
    console.log(hours);
    console.log(tablets);

    var calc = iPadOjb["availWh"]


    var result = 3;
    battId.value = result;
    battId.classList.add("alert-success");
    //
});



// function calls
// addBitsUp(batt, battId);
addBitsUp(tabl, tablId);