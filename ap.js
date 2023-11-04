var btc = document.getElementById("btc-usd");
var eth = document.getElementById("eth-usd");
var bnb = document.getElementById("bnb-usd");
var xrp = document.getElementById("xrp-usd");
var sol = document.getElementById("sol-usd");
var ada = document.getElementById("ada-usd");
var doge = document.getElementById("doge-usd");

var btceur = document.getElementById("btc-eur");
var etheur = document.getElementById("eth-eur");
var bnbeur = document.getElementById("bnb-eur");
var xrpeur = document.getElementById("xrp-eur");
var soleur = document.getElementById("sol-eur");
var adaeur = document.getElementById("ada-eur");
var dogeeur = document.getElementById("doge-eur");

var price = {
    "async": true,
    "scroosDomain": true,
    "url": "https://api.coingecko.com/api/v3/simple/price?ids=bitcoin%2Cethereum%2Cbinancecoin%2Cripple%2Csolana%2Ccardano%2Cdogecoin&vs_currencies=usd%2Ceur",

    "method": "GET",
    "headers": {}
}


$.ajax(price).done(function (response){
    btc.innerHTML = response.bitcoin.usd;
    eth.innerHTML = response.ethereum.usd;
    bnb.innerHTML = response.binancecoin.usd;
    xrp.innerHTML = response.ripple.usd;
    sol.innerHTML = response.solana.usd;
    ada.innerHTML = response.cardano.usd;
    doge.innerHTML = response.dogecoin.usd;

    btceur.innerHTML = response.bitcoin.eur;
    etheur.innerHTML = response.ethereum.eur;
    bnbeur.innerHTML = response.binancecoin.eur;
    xrpeur.innerHTML = response.ripple.eur;
    soleur.innerHTML = response.solana.eur;
    adaeur.innerHTML = response.cardano.eur;
    dogeeur.innerHTML = response.dogecoin.eur;
});