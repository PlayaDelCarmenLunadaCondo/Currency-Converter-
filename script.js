// APPLE DOCS FOR INSPECTING WEBPAGES ON MAC SAFARI
//https://developer.apple.com/documentation/safari-developer-tools/inspecting-safari-macos

//TODO: optimize website for use on phone with @media
//TODO: make custom drop down menu
//rats
country_dict = {
  AFN: { "Code": " Afghanistan", "Currency": " Afghani", "Symbol": " ؋", "Unicode": "&#x1F1E6&#x1F1EB" },
  ALL: { "Code": " Albania", "Currency": " Lek", "Symbol": " Lek", "Unicode": "&#x1F1E6&#x1F1F1" },
  ARS: { "Code": " Argentina", "Currency": " Peso", "Symbol": " $", "Unicode": "&#x1F1E6&#x1F1F7" },
  AWG: { "Code": " Aruba", "Currency": " Guilder", "Symbol": " ƒ", "Unicode": "&#x1F1E6&#x1F1FC" },
  AUD: { "Code": " Australia", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1E6&#x1F1FA" },
  AZN: { "Code": " Azerbaijan", "Currency": " Manat", "Symbol": " ₼", "Unicode": "&#x1F1E6&#x1F1FF" },
  BSD: { "Code": " Bahamas", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1E7&#x1F1F8" },
  BBD: { "Code": " Barbados", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1E7&#x1F1E7" },
  BYR: { "Code": " Belarus", "Currency": " Ruble", "Symbol": " p.", "Unicode": "&#x1F1E7&#x1F1FE" },
  BZD: { "Code": " Belize", "Currency": " Dollar", "Symbol": " BZ$", "Unicode": "&#x1F1E7&#x1F1FF" },
  BMD: { "Code": " Bermuda", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1E7&#x1F1F2" },
  BOB: { "Code": " Bolivia", "Currency": " Boliviano", "Symbol": " $b", "Unicode": "&#x1F1E7&#x1F1F4" },
  BAM: { "Code": " Bosnia and Herzegovina", "Currency": " Convertible Marka", "Symbol": " KM", "Unicode": "&#x1F1E7&#x1F1E6" },
  BWP: { "Code": " Botswana", "Currency": " Pula", "Symbol": " P", "Unicode": "&#x1F1E7&#x1F1FC" },
  BRL: { "Code": " Brazil", "Currency": " Real", "Symbol": " R$", "Unicode": "&#x1F1E7&#x1F1F7" },
  BND: { "Code": " Brunei", "Currency": " Darussalam Dollar", "Symbol": " $", "Unicode": "&#x1F1E7&#x1F1F3" },
  BGN: { "Code": " Bulgaria", "Currency": " Lev", "Symbol": " лв", "Unicode": "&#x1F1E7&#x1F1EC" },
  KHR: { "Code": " Cambodia", "Currency": " Riel", "Symbol": " ៛", "Unicode": "&#x1F1F0&#x1F1ED" },
  CAD: { "Code": " Canada", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1E8&#x1F1E6" },
  CLP: { "Code": " Chile", "Currency": " Peso", "Symbol": " $", "Unicode": "&#x1F1E8&#x1F1F1" },
  CNY: { "Code": " China", "Currency": " Yuan Renminbi", "Symbol": " ¥", "Unicode": "&#x1F1E8&#x1F1F3" },
  COP: { "Code": " Colombia", "Currency": " Peso", "Symbol": " $", "Unicode": "&#x1F1E8&#x1F1F4" },
  CRC: { "Code": " Costa Rica", "Currency": " Colon", "Symbol": " ₡", "Unicode": "&#x1F1E8&#x1F1F7" },
  HRK: { "Code": " Croatia", "Currency": " Kuna", "Symbol": " kn", "Unicode": "&#x1F1ED&#x1F1F7" },
  CUP: { "Code": " Cuba", "Currency": " Peso", "Symbol": " ₱", "Unicode": "&#x1F1E8&#x1F1FA" },
  DKK: { "Code": " Denmark", "Currency": " Krone", "Symbol": " kr", "Unicode": "&#x1F1E9&#x1F1F0" },
  DOP: { "Code": " Dominican Republic", "Currency": " Peso", "Symbol": " RD$", "Unicode": "&#x1F1E9&#x1F1F4" },
  EGP: { "Code": " Egypt", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1EA&#x1F1EC" },
  SVC: { "Code": " El Salvador", "Currency": " Colon", "Symbol": " $", "Unicode": "&#x1F1F8&#x1F1FB" },
  EEK: { "Code": " Estonia", "Currency": " Kroon", "Symbol": " kr", "Unicode": "&#x1F1EA&#x1F1EA" },
  FKP: { "Code": " Falkland Islands", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1EB&#x1F1F0" },
  FJD: { "Code": " Fiji", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1EB&#x1F1EF" },
  GEL: { "Code": " Georgia", "Currency": " Lari", "Symbol": " ₾", "Unicode": "&#x1F1EC&#x1F1EA" },
  GHC: { "Code": " Ghana", "Currency": " Cedis", "Symbol": " ¢", "Unicode": "&#x1F1EC&#x1F1ED" },
  GIP: { "Code": " Gibraltar", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1EC&#x1F1EE" },
  GTQ: { "Code": " Guatemala", "Currency": " Quetzal", "Symbol": " Q", "Unicode": "&#x1F1EC&#x1F1F9" },
  GGP: { "Code": " Guernsey", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1EC&#x1F1EC" },
  GYD: { "Code": " Guyana", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1EC&#x1F1FE" },
  HNL: { "Code": " Honduras", "Currency": " Lempira", "Symbol": " L", "Unicode": "&#x1F1ED&#x1F1F3" },
  HKD: { "Code": " Hong Kong", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1ED&#x1F1F0" },
  HUF: { "Code": " Hungary", "Currency": " Forint", "Symbol": " Ft", "Unicode": "&#x1F1ED&#x1F1FA" },
  ISK: { "Code": " Iceland", "Currency": " Krona", "Symbol": " kr", "Unicode": "&#x1F1EE&#x1F1F8" },
  INR: { "Code": " India", "Currency": " Rupee", "Symbol": " ₹", "Unicode": "&#x1F1EE&#x1F1F3" },
  IDR: { "Code": " Indonesia", "Currency": " Rupiah", "Symbol": " Rp", "Unicode": "&#x1F1EE&#x1F1E9" },
  IRR: { "Code": " Iran", "Currency": " Rial", "Symbol": " ﷼", "Unicode": "&#x1F1EE&#x1F1F7" },
  IMP: { "Code": " Isle of Man", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1EE&#x1F1F2" },
  ILS: { "Code": " Israel", "Currency": " Shekel", "Symbol": " ₪", "Unicode": "&#x1F1EE&#x1F1F1" },
  JMD: { "Code": " Jamaica", "Currency": " Dollar", "Symbol": " J$", "Unicode": "&#x1F1EF&#x1F1F2" },
  JPY: { "Code": " Japan", "Currency": " Yen", "Symbol": " ¥", "Unicode": "&#x1F1EF&#x1F1F5" },
  JEP: { "Code": " Jersey", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1EF&#x1F1EA" },
  KZT: { "Code": " Kazakhstan", "Currency": " Tenge", "Symbol": " лв", "Unicode": "&#x1F1F0&#x1F1FF" },
  KGS: { "Code": " Kyrgyzstan", "Currency": " Som", "Symbol": " лв", "Unicode": "&#x1F1F0&#x1F1EC" },
  LAK: { "Code": " Laos", "Currency": " Kip", "Symbol": " ₭", "Unicode": "&#x1F1F1&#x1F1E6" },
  LVL: { "Code": " Latvia", "Currency": " Lat", "Symbol": " Ls", "Unicode": "&#x1F1F1&#x1F1FB" },
  LBP: { "Code": " Lebanon", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1F1&#x1F1E7" },
  LRD: { "Code": " Liberia", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1F1&#x1F1F7" },
  LTL: { "Code": " Lithuania", "Currency": " Litas", "Symbol": " Lt", "Unicode": "&#x1F1F1&#x1F1F9" },
  MYR: { "Code": " Malaysia", "Currency": " Ringgit", "Symbol": " RM", "Unicode": "&#x1F1F2&#x1F1FE" },
  MUR: { "Code": " Mauritius", "Currency": " Rupee", "Symbol": " ₨", "Unicode": "&#x1F1F2&#x1F1FA" },
  MXN: { "Code": " Mexico", "Currency": " Peso", "Symbol": " $", "Unicode": "&#x1F1F2&#x1F1FD" },
  MNT: { "Code": " Mongolia", "Currency": " Tughrik", "Symbol": " ₮", "Unicode": "&#x1F1F2&#x1F1F3" },
  MZN: { "Code": " Mozambique", "Currency": " Metical", "Symbol": " MT", "Unicode": "&#x1F1F2&#x1F1FF" },
  NAD: { "Code": " Namibia", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1F3&#x1F1E6" },
  NPR: { "Code": " Nepal", "Currency": " Rupee", "Symbol": " ₨", "Unicode": "&#x1F1F3&#x1F1F5" },
  ANG: { "Code": " Netherlands", "Currency": " Antilles Guilder", "Symbol": " ƒ", "Unicode": "&#x1F1F3&#x1F1F1" },
  NZD: { "Code": " New Zealand", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1F3&#x1F1FF" },
  NIO: { "Code": " Nicaragua", "Currency": " Cordoba", "Symbol": " C$", "Unicode": "&#x1F1F3&#x1F1EE" },
  NGN: { "Code": " Nigeria", "Currency": " Naira", "Symbol": " ₦", "Unicode": "&#x1F1F3&#x1F1EC" },
  NOK: { "Code": " Norway", "Currency": " Krone", "Symbol": " kr", "Unicode": "&#x1F1F3&#x1F1F4" },
  OMR: { "Code": " Oman", "Currency": " Rial", "Symbol": " ﷼", "Unicode": "&#x1F1F4&#x1F1F2" },
  PKR: { "Code": " Pakistan", "Currency": " Rupee", "Symbol": " ₨", "Unicode": "&#x1F1F5&#x1F1F0" },
  PAB: { "Code": " Panama", "Currency": " Balboa", "Symbol": " B/.", "Unicode": "&#x1F1F5&#x1F1E6" },
  PYG: { "Code": " Paraguay", "Currency": " Guarani", "Symbol": " Gs", "Unicode": "&#x1F1F5&#x1F1FE" },
  PEN: { "Code": " Peru", "Currency": " Nuevo Sol", "Symbol": " S/.", "Unicode": "&#x1F1F5&#x1F1EA" },
  PHP: { "Code": " Philippines", "Currency": " Peso", "Symbol": " ₱", "Unicode": "&#x1F1F5&#x1F1ED" },
  PLN: { "Code": " Poland", "Currency": " Zloty", "Symbol": " zł", "Unicode": "&#x1F1F5&#x1F1F1" },
  QAR: { "Code": " Qatar", "Currency": " Riyal", "Symbol": " ﷼", "Unicode": "&#x1F1F6&#x1F1E6" },
  RON: { "Code": " Romania", "Currency": " New Leu", "Symbol": " lei", "Unicode": "&#x1F1F7&#x1F1F4" },
  RUB: { "Code": " Russia", "Currency": " Ruble", "Symbol": " ₽", "Unicode": "&#x1F1F7&#x1F1FA" },
  SAR: { "Code": " Saudi Arabia", "Currency": " Riyal", "Symbol": " ﷼", "Unicode": "&#x1F1F8&#x1F1E6" },
  RSD: { "Code": " Serbia", "Currency": " Dinar", "Symbol": " Дин.", "Unicode": "&#x1F1F7&#x1F1F8" },
  SCR: { "Code": " Seychelles", "Currency": " Rupee", "Symbol": " ₨", "Unicode": "&#x1F1F8&#x1F1E8" },
  SGD: { "Code": " Singapore", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1F8&#x1F1EC" },
  SBD: { "Code": " Solomon Islands", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1F8&#x1F1E7" },
  SOS: { "Code": " Somalia", "Currency": " Shilling", "Symbol": " S", "Unicode": "&#x1F1F8&#x1F1F4" },
  ZAR: { "Code": " South Africa", "Currency": " Rand", "Symbol": " R", "Unicode": "&#x1F1FF&#x1F1E6" },
  LKR: { "Code": " Sri Lanka", "Currency": " Rupee", "Symbol": " ₨", "Unicode": "&#x1F1F1&#x1F1F0" },
  SRD: { "Code": " Suriname", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1F8&#x1F1F7" },
  SEK: { "Code": " Sweden", "Currency": " Krona", "Symbol": " kr", "Unicode": "&#x1F1F8&#x1F1EA" },
  CHF: { "Code": " Switzerland", "Currency": " Franc", "Symbol": " CHF", "Unicode": "&#x1F1E8&#x1F1ED" },
  SYP: { "Code": " Syria", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1F8&#x1F1FE" },
  TWD: { "Code": " Taiwan", "Currency": " New Dollar", "Symbol": " NT$", "Unicode": "&#x1F1F9&#x1F1FC" },
  THB: { "Code": " Thailand", "Currency": " Baht", "Symbol": " ฿", "Unicode": "&#x1F1F9&#x1F1ED" },
  TTD: { "Code": " Trinidad and Tobago", "Currency": " Dollar", "Symbol": " TT$", "Unicode": "&#x1F1F9&#x1F1F9" },
  TRL: { "Code": " Turkey", "Currency": " Lira", "Symbol": " ₺", "Unicode": "&#x1F1F9&#x1F1F7" },
  TVD: { "Code": " Tuvalu", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1F9&#x1F1FB" },
  UAH: { "Code": " Ukraine", "Currency": " Hryvna", "Symbol": " ₴", "Unicode": "&#x1F1FA&#x1F1E6" },
  GBP: { "Code": " United Kingdom", "Currency": " Pound", "Symbol": " £", "Unicode": "&#x1F1EC&#x1F1E7" },
  USD: { "Code": " United States", "Currency": " Dollar", "Symbol": " $", "Unicode": "&#x1F1FA&#x1F1F8" },
  UYU: { "Code": " Uruguay", "Currency": " Peso", "Symbol": " $U", "Unicode": "&#x1F1FA&#x1F1FE" },
  UZS: { "Code": " Uzbekistan", "Currency": " Som", "Symbol": " лв", "Unicode": "&#x1F1FA&#x1F1FF" },
  VEF: { "Code": " Venezuela", "Currency": " Bolivar Fuerte", "Symbol": " Bs", "Unicode": "&#x1F1FB&#x1F1EA" },
  YER: { "Code": " Yemen", "Currency": " Rial", "Symbol": " ﷼", "Unicode": "&#x1F1FE&#x1F1EA" },
  ZWD: { "Code": " Zimbabwe", "Currency": " Dollar", "Symbol": " Z$", "Unicode": "&#x1F1FF&#x1F1FC" },
}

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

  //add information to both drop downs
  for (var key in list) {
    if (country_dict[key] === undefined) {
      console.log("Error: ", key, " Not found");
    }
    else {
      //format for adding flag code to html is 
      //~element~.innerHTML = dict[~code~]["Unicode"].replaceAll('U+', '&#x' ).replaceAll(' ', ': ')

      //dict = {
      //AFN: { "Code": "Afghanistan", "Currency": "Afghani", "Symbol": "؋", "Unicode": "U+1F1E6 U+1F1EB " },

      opt = createOpt(list, key);
      select1.appendChild(opt);

      if (opt.innerHTML === in_cur) {
        select1.value = list[key];
      }

      var opt2 = createOpt(list, key)
      select2.appendChild(opt2);

      if (opt2.innerHTML === out_cur) {
        select2.value = list[key];
      }

    }
  }
}

function createOpt(list, key) {
  var opt = document.createElement('option');
  opt.value = list[key];
  opt.innerHTML = country_dict[key]["Unicode"]
    + country_dict[key]["Code"]
    + country_dict[key]["Currency"]
    + country_dict[key]["Symbol"]
  opt.id = country_dict[key]["Unicode"]
  return opt
}

function saveInCur() {
  drop = document.getElementById("in_cur1");
  test = drop.options[drop.selectedIndex].text;
  localStorage.setItem("in_cur", test)
}

function saveOutCur() {
  drop = document.getElementById("out_cur1");
  test = drop.options[drop.selectedIndex].text;
  localStorage.setItem("out_cur", test)
  console.log(localStorage.getItem("out_cur"))

  flagElement = document.getElementById('out_cur_flag')
  flagElement.innerText = drop.options[ondrop.selectedIndex].id
  console.log(localStorage.getItem("out_cur"))
}