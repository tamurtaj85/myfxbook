require('dotenv').config();

const BASE_URL = 'https://www.myfxbook.com/api';

function login() {
  const API_METHOD = '/login.json';
  const EMAIL = process.env.EMAIL;
  const PASSWORD = process.env.PASSWORD;
  const API_METHOD_PARAMS = `?email=${EMAIL}&password=${PASSWORD}`;
  const URL = BASE_URL + API_METHOD + API_METHOD_PARAMS;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => {
      console.log('LOGIN: ', data);
      getCommunityOutlookByCountry(data.session);
    })
    .catch((error) => console.error(error));
}

login();

function getCommunityOutlookByCountry(session_id) {
  const API_METHOD = '/get-community-outlook-by-country.json';
  const SYMBOL = 'gbpusd';
  const API_METHOD_PARAMS = `?session=${session_id}&symbol=${SYMBOL}`;
  const URL = BASE_URL + API_METHOD + API_METHOD_PARAMS;

  fetch(URL)
    .then((res) => res.json())
    .then((data) => console.log('CO: ', data))
    .catch((error) => console.error(error));
}

/**
 * with symbol: eurusd
 * code: "DE"
longPositions: 5250488
longVolume: 908529.34
name: "GERMANY"
shortPositions: 4202630
shortVolume: 1086977.92
 */

/**
 * with symbol gbpusd
 * code: "DE"
longPositions: 4231772
longVolume: 1876292.54
name: "GERMANY"
shortPositions: 1559764
shortVolume: 708676.51
 */
