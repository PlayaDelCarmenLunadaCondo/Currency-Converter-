// APPLE DOCS FOR INSPECTING WEBPAGES ON MAC SAFARI
//https://developer.apple.com/documentation/safari-developer-tools/inspecting-safari-macos

//TODO: optimize website for use on phone with @media

const updateURL = "https://v6.exchangerate-api.com/v6/b5c440e589b6b6756c60fb50/latest/USD"

const currencyDictionary = {
  "AED": "UAE Dirham",
  "AFN": "Afghani",
  "ALL": "Albanian Lek",
  "AMD": "Armenian Dram",
  "ANG": "Netherlands Antillean Guilder",
  "AOA": "Kwanza",
  "ARS": "Argentine Peso",
  "AUD": "Australian Dollar",
  "AWG": "Aruban Florin",
  "AZN": "Azerbaijanian Manat",
  "BAM": "Convertible Mark",
  "BBD": "Barbados Dollar",
  "BDT": "Taka",
  "BGN": "Bulgarian Lev",
  "BHD": "Bahraini Dinar",
  "BIF": "Burundi Franc",
  "BMD": "Bermudian Dollar",
  "BND": "Brunei Dollar",
  "BOB": "Boliviano",
  "BOV": "Mvdol",
  "BRL": "Brazilian Real",
  "BSD": "Bahamian Dollar",
  "BTN": "Ngultrum",
  "BWP": "Pula",
  "BYN": "Belarussian Ruble",
  "BZD": "Belize Dollar",
  "CAD": "Canadian Dollar",
  "CDF": "Congolese Franc",
  "CHE": "WIR Euro",
  "CHF": "Swiss Franc",
  "CHW": "WIR Franc",
  "CLF": "Unidad de Fomento",
  "CLP": "Chilean Peso",
  "CNY": "Yuan Renminbi",
  "COP": "Colombian Peso",
  "COU": "Unidad de Valor Real",
  "CRC": "Costa Rican Colon",
  "CUC": "Peso Convertible",
  "CUP": "Cuban Peso",
  "CVE": "Cabo Verde Escudo",
  "CZK": "Czech Koruna",
  "DJF": "Djibouti Franc",
  "DKK": "Danish Krone",
  "DOP": "Dominican Peso",
  "DZD": "Algerian Dinar",
  "EGP": "Egyptian Pound",
  "ERN": "Nakfa",
  "ETB": "Ethiopian Birr",
  "EUR": "Euro",
  "FJD": "Fiji Dollar",
  "FKP": "Falkland Islands Pound",
  "FOK": "Faroese Krona",
  "GBP": "Pound Sterling",
  "GEL": "Lari",
  "GHS": "Ghana Cedi",
  "GIP": "Gibraltar Pound",
  "GMD": "Dalasi",
  "GNF": "Guinea Franc",
  "GGP": "Guernsey Pound",
  "GTQ": "Quetzal",
  "GYD": "Guyana Dollar",
  "HKD": "Hong Kong Dollar",
  "HNL": "Lempira",
  "HRK": "Croatian Kuna",
  "HTG": "Gourde",
  "HUF": "Forint",
  "IDR": "Rupiah",
  "ILS": "New Israeli Sheqel",
  "INR": "Indian Rupee",
  "IMP": "Isle of Man Manx Pound",
  "IQD": "Iraqi Dinar",
  "IRR": "Iranian Rial",
  "ISK": "Iceland Krona",
  "JEP": "Jersey Pound",
  "JMD": "Jamaican Dollar",
  "JOD": "Jordanian Dinar",
  "JPY": "Yen",
  "KES": "Kenyan Shilling",
  "KGS": "Som",
  "KHR": "Riel",
  "KID": "Kiribati Dollar",
  "KMF": "Comoro Franc",
  "KPW": "North Korean Won",
  "KRW": "Won",
  "KWD": "Kuwaiti Dinar",
  "KYD": "Cayman Islands Dollar",
  "KZT": "Tenge",
  "LAK": "Kip",
  "LBP": "Lebanese Pound",
  "LKR": "Sri Lanka Rupee",
  "LRD": "Liberian Dollar",
  "LSL": "Loti",
  "LYD": "Libyan Dinar",
  "MAD": "Moroccan Dirham",
  "MDL": "Moldovan Leu",
  "MGA": "Malagasy Ariary",
  "MKD": "Denar",
  "MMK": "Kyat",
  "MNT": "Tugrik",
  "MOP": "Pataca",
  "MRU": "Ouguiya",
  "MUR": "Mauritius Rupee",
  "MVR": "Rufiyaa",
  "MWK": "Kwacha",
  "MXN": "Mexican Peso",
  "MXV": "Mexican Unidad de Inversion (UDI)",
  "MYR": "Malaysian Ringgit",
  "MZN": "Mozambique Metical",
  "NAD": "Namibia Dollar",
  "NGN": "Naira",
  "NIO": "Cordoba Oro",
  "NOK": "Norwegian Krone",
  "NPR": "Nepalese Rupee",
  "NZD": "New Zealand Dollar",
  "OMR": "Rial Omani",
  "PAB": "Balboa",
  "PEN": "Nuevo Sol",
  "PGK": "Kina",
  "PHP": "Philippine Peso",
  "PKR": "Pakistan Rupee",
  "PLN": "Zloty",
  "PYG": "Guarani",
  "QAR": "Qatari Rial",
  "RON": "Romanian Leu",
  "RSD": "Serbian Dinar",
  "RUB": "Russian Ruble",
  "RWF": "Rwanda Franc",
  "SAR": "Saudi Riyal",
  "SBD": "Solomon Islands Dollar",
  "SCR": "Seychelles Rupee",
  "SDG": "Sudanese Pound",
  "SEK": "Swedish Krona",
  "SGD": "Singapore Dollar",
  "SHP": "Saint Helena Pound",
  "SLE": "Leone",
  "SLL": "Sierra Leonean Leone",
  "SOS": "Somali Shilling",
  "SRD": "Surinam Dollar",
  "SSP": "South Sudanese Pound",
  "STN": "Dobra",
  "SVC": "El Salvador Colon",
  "SYP": "Syrian Pound",
  "SZL": "Lilangeni",
  "THB": "Baht",
  "TJS": "Somoni",
  "TMT": "Turkmenistan New Manat",
  "TND": "Tunisian Dinar",
  "TOP": "Pa’anga",
  "TRY": "Turkish Lira",
  "TTD": "Trinidad and Tobago Dollar",
  "TVD": "Tuvaluan Dollar",
  "TWD": "New Taiwan Dollar",
  "TZS": "Tanzanian Shilling",
  "UAH": "Hryvnia",
  "UGX": "Uganda Shilling",
  "USD": "US Dollar",
  "USN": "US Dollar (Next day)",
  "UYI": "Uruguay Peso en Unidades Indexadas (URUIURUI)",
  "UYU": "Peso Uruguayo",
  "UZS": "Uzbekistan Sum",
  "VED": "Venezuelan Bolívar",
  "VEF": "Venezuelan Bolívar Fuente",
  "VES": "Venezuelan Bolívar",
  "VND": "Dong",
  "VUV": "Vatu",
  "WST": "Tala",
  "XAF": "CFA Franc BEAC",
  "XCD": "East Caribbean Dollar",
  "XDR": "Special Drawing Rights",
  "XOF": "CFA Franc BCEAO",
  "XPF": "CFP Franc",
  "XSU": "Sucre",
  "XUA": "ADB Unit of Account",
  "YER": "Yemeni Rial",
  "ZAR": "Rand",
  "ZMW": "Zambian Kwacha",
  "ZWL": "Zimbabwe Dollar"
}



//returns "bar"


function displaySelection() {
  var in_cur = document.getElementById("in_cur1").value;
  var out_cur = document.getElementById("out_cur1").value;
  var amount = document.getElementById("amount").value;

  //parse float when getting the values 

  var result = (parseFloat(amount) * parseFloat(out_cur)) / parseFloat(in_cur);

  result = result.toFixed(2)

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