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
var hoursHtml = document.getElementById("hoursHtml");
var hours = document.getElementById("hrs-id");
// power
const power = document.getElementById("power");
const powerId = document.getElementById("power-id");

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
    console.info(`${totalWatt} Total watts from ${hours.value} hrs`);
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
  } else {
    console.info("nothing to calc bro");
  }
  // (totalWatt / battWatt).ceil
  // battery resutl
  var resultRaw = totalWatt / battWatt;
  var result = Math.ceil(resultRaw);

  // result object
  var resultObj = {
    wattHours: totalWatt,
    result: result,
  };
  //

  return resultObj;
};

// clear alerts
const clearAlert = () => {
  battId.classList.remove("alert-success");
  powerId.classList.remove("alert-warning");
  // console.info("it worked");
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
// result add function
const giveResult = function () {
  if (battId) {
    // get all the values bitches
    var result = batteryLogic();
    // console.info(batteryLogic());
    battId.value = result.result;
    battId.classList.add("alert-success");
  } //
  if (powerId) {
    // get all the values bitches
    var result = batteryLogic();
    // console.info(batteryLogic());
    powerId.value = result.wattHours;
    powerId.classList.add("alert-warning");
  } //
};

// change hours
const changeHours = () => {
  if (hours) {
    hours.addEventListener("input", (event) => {
      // Callback
      if (hours.value < 2) {
        hoursHtml.lastChild.data = ` ${hours.value} Hour`;
      } else {
        hoursHtml.lastChild.data = ` ${hours.value} Hours`;
      }
      giveResult();
    });
  }
};
//
buttonClear.addEventListener("click", (event) => {
  // vars
  var clear = document.querySelectorAll("*[id]");
  var elements = document.getElementsByClassName("form-range slide");
  // clear vals
  clear.forEach((element) => {
    if (element.value >= 1) {
      element.value = 0;
      hoursHtml.lastChild.data = ` ${hours.value} Hour`;
    }
    //
  });
  // clear text
  Array.from(elements).forEach(function (element) {
    // get the text
    var grabbedText =
      element.parentElement.childNodes[0].parentElement.lastElementChild
        .parentElement.previousElementSibling.innerHTML;

    if (grabbedText.includes("x")) {
      var changedText = grabbedText.replace(/\d{1,2}\sx/, ``);
      element.parentElement.childNodes[0].parentElement.lastElementChild.parentElement.previousElementSibling.innerHTML = changedText;
    } // change line with value
  });
});
// button calculate
button.addEventListener("click", (event) => {
  giveResult();
});
// get all the slider classes elements
var elements = document.getElementsByClassName("form-range slide");

var addSliders = function () {
  giveResult();
};

Array.from(elements).forEach(function (element) {
  element.addEventListener("change", function () {
    this.setAttribute("value", this.value);
    // console.log(element);
    // get the text
    var grabbedText =
      element.parentElement.childNodes[0].parentElement.lastElementChild
        .parentElement.previousElementSibling.innerHTML;

    if (grabbedText.includes("x")) {
      // console.log(grabbedText);
      var changedText = grabbedText.replace(/\d{1,2}\sx/, `${element.value} x`);
    } // change line with value
    else {
      // console.log(grabbedText);
      var changedText = grabbedText.replace(
        /(><i|>..<i)/,
        `> ${element.value} x <i`
      );
    }
    // return text
    element.parentElement.childNodes[0].parentElement.lastElementChild.parentElement.previousElementSibling.innerHTML = changedText;
  });
  element.addEventListener("input", addSliders);
});

// function calls
changeHours();
