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
  WhPHour: 15,
  ChargfromQik: 2.5,
};
// Med Lap
var mLapOjb = {
  Wh2Charg: 60,
  WhPHour: 10,
  ChargfromQik: 3.3,
};
// small note
var sNoteOjb = {
  Wh2Charg: 40,
  WhPHour: 6,
  ChargfromQik: 5.0,
};
// Ipad Pro
var iPadOjb = {
  Wh2Charg: 28,
  WhPHour: 4,
  ChargfromQik: 7.2,
};
// Large Phone
var lPhoneOjb = {
  Wh2Charg: 10,
  WhPHour: 2,
  ChargfromQik: 20.1,
};
// Small Phone
var sPhoneOjb = {
  Wh2Charg: 5,
  WhPHour: 1,
  ChargfromQik: 40.2,
};
// console.info(batOjb["availWh"])

// batteries
const batt = document.getElementById("batt");
const battId = document.getElementById("bat-id");
// hours
// var hoursHtml = document.getElementById("hrs-id");
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

// sm-phone
const smPhone = document.getElementById("sm-phone");
const smPhoneId = document.getElementById("sm-phone-id");

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

  if (hours) {
    // total hours =

    var totalWatt =
      (lLapOjb["WhPHour"] * lgLapId.value +
        mLapOjb["WhPHour"] * mdLapId.value +
        sNoteOjb["WhPHour"] * smNoteId.value +
        iPadOjb["WhPHour"] * tablId.value +
        lPhoneOjb["WhPHour"] * lgPhoneId.value +
        sPhoneOjb["WhPHour"] * smPhoneId.value) *
      hours.value;

    console.log("inside hours calc");
    console.info(`${totalWatt} Total watts`);
  }
  //
  else if (battId) {
    // standard calc
    var totalWatt =
      lLapOjb["Wh2Charg"] * lgLapId.value +
      mLapOjb["Wh2Charg"] * mdLapId.value +
      sNoteOjb["Wh2Charg"] * smNoteId.value +
      iPadOjb["Wh2Charg"] * tablId.value +
      lPhoneOjb["Wh2Charg"] * lgPhoneId.value +
      sPhoneOjb["Wh2Charg"] * smPhoneId.value;

    console.log("inside packs to charge calc");
    console.info(`${totalWatt} Total watts`);
  }
  // lLapOjb["Wh2Charg"]*lgLapId.value
  // mLapOjb["Wh2Charg"]*mdLapId.value
  // sNoteOjb["Wh2Charg"]*smNoteId.value
  // iPadOjb["Wh2Charg"]*tablId.value
  // lPhoneOjb["Wh2Charg"]*lgPhoneId.value
  else {
    console.info("nothing to calc bro");
  }
  //
  //
  // (totalWatt / battWatt).ceil
  var result = totalWatt / battWatt;
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

//
buttonClear.addEventListener("click", (event) => {
  var clear = document.querySelectorAll("*[id]");
  clear.forEach((element) => {
    if (element.value >= 1) {
      element.value = 0;
    }
    //
  });
});

button.addEventListener("click", (event) => {
  if (battId) {
    // get all the values bitches

    var result = batteryLogic();
    // console.info(batteryLogic());
    battId.value = result;
    battId.classList.add("alert-success");
  } //
});

// function calls hoursHtml
// addBitsUp(hoursHtml, hours);
addBitsUp(lgLap, lgLapId);
addBitsUp(mdLap, mdLapId);
addBitsUp(smNote, smNoteId);
addBitsUp(tabl, tablId);
addBitsUp(lgPhone, lgPhoneId);
addBitsUp(smPhone, smPhoneId);
