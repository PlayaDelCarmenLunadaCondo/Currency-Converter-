 // APPLE DOCS FOR INSPECTING WEBPAGES ON MAC SAFARI
//https://developer.apple.com/documentation/safari-developer-tools/inspecting-safari-macos

//TODO: optimize website for use on phone with @media
//rats

const updateURL = "https://v6.exchangerate-api.com/v6/b5c440e589b6b6756c60fb50/latest/USD"

function displaySelection() {
  var in_cur = document.getElementById("in_cur1").value;
  var drop = document.getElementById("out_cur1");
  var out_cur = drop.value;
  var currName = drop.options[drop.selectedIndex].text;
  var amount = document.getElementById("amount").value;

  //parse float when getting the values 

  var resultNum = (parseFloat(amount) * parseFloat(out_cur)) / parseFloat(in_cur);

  if (resultNum < 1) {
    result = (resultNum.toFixed(2)) + " " + currName

  }
  else {
    result = (resultNum.toFixed(2)) + " " + currName + "s"
  }


  alert(result);
}


function switchCurrency() {
  var in_switch = document.getElementById("in_cur1")
  var out_switch = document.getElementById("out_cur1")
  var temp = in_switch.value
  in_switch.value = out_switch.value
  out_switch.value = temp

  saveInCur();
  saveOutCur();
}

function populateDropdown(dropdownId, dictionary) {
  const dropdown = document.getElementById(dropdownId);

  for (const key in dictionary) {
    if (dictionary.hasOwnProperty(key)) {
      const option = document.createElement("option");
      option.value = key;
      option.textContent = dictionary[key];
      dropdown.appendChild(option);
    }
  }

}
async function checkUpdate() {
  //check if we have loaded this program on this browser before
  if (localStorage.getItem('lastUpdated') === undefined || localStorage.getItem('lastUpdated') === null) {
    //if we have not loaded it, make a new last updated date
    var lastUpdated = JSON.stringify(new Date());

    //store to LocalStorage
    localStorage.setItem("lastUpdated", lastUpdated);
    console.log("No stored found, updating: " + localStorage.getItem('lastUpdated'));

    //Need new information on exchange
    callApi();
  }
  else {
    //LocalStorage information exists; compare the date of last updated 
    //to see if the information is relevant

    //get date item from storage and parse as date
    var lastUpdated = new Date(JSON.parse(localStorage.getItem('lastUpdated')));
    console.log("Last stored update: " + lastUpdated)
    let date1 = lastUpdated;

    //get today's date at midnight to check for relevance (API updates at midnight)
    let date2 = new Date();
    date2.setHours(0, 0, 0, 0)


    //compare the two dates
    if (date1.getTime() > date2.getTime()) {
      console.log(`Already updated today: ${lastUpdated}`);
      getStoredCurrency()
    } else {
      console.log(`Last updated: ${lastUpdated}. Updating...`)
      callApi()
    }
  }
}

function getStoredCurrency() {
  let list = JSON.parse(localStorage.getItem("currList"))

  console.log("stored ")
  fillSelect(list)
}

async function callApi() {
  //Get the API information
  test = await (await ((await fetch(updateURL)).json()));
  console.log("stored, ", test)
  localStorage.setItem("currList", JSON.stringify(test['conversion_rates']))

  console.log("stored ")

  fillSelect(test['conversion_rates'])
}

//Fill both drop downs with a given dict
function fillSelect(list) {
  select1 = document.getElementById('in_cur1');
  select2 = document.getElementById('out_cur1');

  //recall last values of each drop down
  in_cur = ""
  out_cur = ""

  console.log(localStorage.getItem('in_cur'))
  if (localStorage.getItem('in_cur') !== undefined && localStorage.getItem('in_cur') !== null) {
    in_cur = localStorage.getItem('in_cur');
  }
  if (localStorage.getItem('out_cur') !== undefined && localStorage.getItem('out_cur') !== null) {
    out_cur = localStorage.getItem('out_cur');
  }

  console.log(list)
  //add information to both drop downs
  for (var key in list) {
    if (currencyDictionary[key] === undefined) {
      console.log("Error: ", key, value, " Not found");
    }
    else {
      var opt = document.createElement('option');
      opt.value = list[key];
      opt.innerHTML = currencyDictionary[key];
      select1.appendChild(opt);

      if (opt.innerHTML === in_cur) {
        select1.value = list[key];
      }

      var opt2 = document.createElement('option');
      opt2.value = list[key];;
      opt2.innerHTML = currencyDictionary[key];
      select2.appendChild(opt2);

      if (opt2.innerHTML === out_cur) {
        select2.value = list[key];;
      }

    }
  }
}

function saveInCur() {
  drop = document.getElementById("in_cur1");
  test = drop.options[drop.selectedIndex].text;
  localStorage.setItem("in_cur", test)
  console.log(localStorage.getItem("in_cur"))
}

function saveOutCur() {
  drop = document.getElementById("out_cur1");
  test = drop.options[drop.selectedIndex].text;
  localStorage.setItem("out_cur", test)
  console.log(localStorage.getItem("out_cur"))
}