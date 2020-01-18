const fs = require("fs");
const util = require ("util");
const inquirer = require ("inquirer");
const axios = require ("axios");
//require dependencies
const PDFDocument = require('pdfkit');
const blobStream = require('blob-stream');
//create a document
const doc = new PDFDocument;
//pipe the document to a blob
const stream = doc.pipe(blboStream());

//Prompt user for Github name and favorite color


//request to Github API
async function getNumberOfFollowers() {
    let res = await axios.get('https://api.ithub.com/users/${username}');
    letnOfFollowers = res.data.followers;
    let location = res.data.location;
}