import "index.scss";
import "bootstrap";

// Import all javascript files from src/_components
const componentsContext = require.context("bridgetownComponents", true, /.js$/);
componentsContext.keys().forEach(componentsContext);

// Burger menus
// document.addEventListener("DOMContentLoaded", function () {
//   // open/close
//   const toggler = document.querySelectorAll('[data-toggle="side-menu"]');

//   if (toggler.length) {
//     for (var i = 0; i < toggler.length; i++) {
//       const target = toggler[i].getAttribute("data-target");

//       if (target.length) {
//         toggler[i].addEventListener("click", function (event) {
//           event.preventDefault();
//           const menu = document.querySelector(target);

//           if (menu) {
//             menu.classList.toggle("d-none");
//           }
//         });
//       }
//     }
//   }
// });

//  Objects Store
var batOjb = {
  capacity: 3200,
  capacity_avail: 0.83,
  totalWh: 241.92,
  availWh: 200.79,
};
// Large Lap
var lLapOjb = {
  Wh2Charg: 80,
  ChargfromQik: 2.5,
};
// Med Lap
var mLapOjb = {
  Wh2Charg: 60,
  ChargfromQik: 3.3,
};
// small note
var sNoteOjb = {
  Wh2Charg: 40,
  ChargfromQik: 5.0,
};
// Ipad Pro
var iPadOjb = {
  Wh2Charg: 28,
  ChargfromQik: 7.2,
};
// Large Phone
var lPhoneOjb = {
  Wh2Charg: 10,
  ChargfromQik: 20.1,
};
// console.info(batOjb["availWh"])

// batteries
const batt = document.getElementById("batt");
const battId = document.getElementById("bat-id");
// hours
var hours = document.getElementById("hrs-id");

// const hoursId = document.getElementById('hrs-id');
// large laptops
const lgLap = document.getElementById("lg-lap");
const lgLapId = document.getElementById("lg-lap-id");
// medium laptops
const mdLap = document.getElementById("md-lap");
const mdLapId = document.getElementById("md-lap-id");
// small notepad
const smNote = document.getElementById("sm-note");
const smNoteId = document.getElementById("sm-note-id");
// tablets iPad Pro
const tabl = document.getElementById("tabl");
const tablId = document.getElementById("tab-id");
// lg-phone
const lgPhone = document.getElementById("lg-phone");
const lgPhoneId = document.getElementById("lg-phone-id");
// calc button
const button = document.getElementById("submit");
const buttonClear = document.getElementById("clear");
//
const addBitsUp = (element, element2Add) => {
  element.addEventListener("click", (event) => {
    // Callback
    var i = element2Add.value;
    // console.log(i);
    element2Add.value = ++i;
    // console.log(`i clicked ${i} times`)
    // event.currentTarget.setAttribute("disabled", "");
  });
};
/// calculation logic
const batteryLogic = () => {
  var battWatt = batOjb["availWh"];

  var totalWatt =
    lLapOjb["Wh2Charg"] * lgLapId.value +
    mLapOjb["Wh2Charg"] * mdLapId.value +
    sNoteOjb["Wh2Charg"] * smNoteId.value +
    iPadOjb["Wh2Charg"] * tablId.value +
    lPhoneOjb["Wh2Charg"] * lgPhoneId.value;

  var result = totalWatt / battWatt;
  // lLapOjb["Wh2Charg"]*lgLapId.value
  // mLapOjb["Wh2Charg"]*mdLapId.value
  // sNoteOjb["Wh2Charg"]*smNoteId.value
  // iPadOjb["Wh2Charg"]*tablId.value
  // lPhoneOjb["Wh2Charg"]*lgPhoneId.value
  //
  //
  //
  // (totalWatt / battWatt).ceil
  //
  // console.info(batOjb["availWh"]);
  // console.info(totalWatt);
  return Math.ceil(result);
};

// clear alerts
const clearAlert = () => {
  battId.classList.remove("alert-success");
  console.info("it worked");
};

// lets go SOUP TIME !!!
window.addEventListener(
  "mousedown",
  function () {
    // could use select
    clearAlert();
  },
  false
);

// document.querySelectorAll('*[id]').reset(); value.reset()
//
buttonClear.addEventListener("click", (event) => {
  var clear = document.querySelectorAll("*[id]");
  // battId.classList.add("alert-success");
  clear.forEach((element) => {
    if (element.value >= 1) {
      // console.log(element.value);
      element.value == 0;
    }
    //
  });
});
// console.info(hoursId.value)

button.addEventListener("click", (event) => {
  if (battId) {
    // get all the values bitches

    // console.log(hours);
    // console.log(tablets);

    var result = batteryLogic();
    // console.info(batteryLogic());
    battId.value = result;
    battId.classList.add("alert-success");
  } //
});

// function calls
// addBitsUp(batt, battId);
addBitsUp(tabl, tablId);
