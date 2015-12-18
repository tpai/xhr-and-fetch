import xhr from "xhr";

const resEl = document.getElementById("result");
const locEl = document.getElementById("xhr");
const corEl = document.getElementById("xdr");

if (locEl.addEventListener !== undefined)
    locEl.addEventListener("click", () => { xhrReq() });
else
    locEl.attachEvent("onclick", () => { xhrReq() });

if (corEl.addEventListener !== undefined)
    corEl.addEventListener("click", () => { xdrReq() });
else
    corEl.attachEvent("onclick", () => { xdrReq() });

const xhrReq = () => {
    resEl.innerText = "";
    xhr.get(
        "/data",
        {
            headers: {
               "Content-Type": "application/json"
            }
        },
        (err, res) => {
            resEl.innerText = JSON.stringify(JSON.parse(res.body), undefined, 2);
        }
    );
};

const xdrReq = () => {
    resEl.innerText = "";
    xhr.get(
        "http://jsonplaceholder.typicode.com/posts",
        {
            useXDR: true
        },
        (err, res) => {
            resEl.innerText = JSON.stringify(JSON.parse(res.body), undefined, 2);
        }
    );
};

import "fetch-detector";
import "fetch-ie8";
import fetchJsonp from "fetch-jsonp";

const fehEl = document.getElementById("fetch");
const fepEl = document.getElementById("fetchJsonp");

if (fehEl.addEventListener !== undefined)
    fehEl.addEventListener("click", () => { fetchReq() });
else
    fehEl.attachEvent("onclick", () => { fetchReq() });

if (fepEl.addEventListener !== undefined)
    fepEl.addEventListener("click", () => { jsonpReq() });
else
    fepEl.attachEvent("onclick", () => { jsonpReq() });

const fetchReq = () => {
    fetch("/data")
        .then(res => {
            return res.json();
        })
        .then(json => {
            resEl.innerText = "";
            resEl.innerText = JSON.stringify(json, undefined, 2);
        });
};

const jsonpReq = () => {
    fetchJsonp("http://jsonplaceholder.typicode.com/posts")
        .then(res => {
            return res.json();
        })
        .then(json => {
            resEl.innerText = "";
            resEl.innerText = JSON.stringify(json, undefined, 2);
        });
}
