// Imports
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const fetch = require('node-fetch')
const fs = require('fs')
const TurndownService = require('turndown');
const turndownService = TurndownService()
const markdown = require( "markdown" ).markdown;

const { URL } = require('./utils')
const {getObject, createHTMLResponse, htmlWorkflow} = require('./HTMLRendering')


const PORT = process.env.PORT || 5000
const replace_string = '{news_section_data}'

// Fetch function
async function getData(url=URL){
    try {
        const res = await fetch(url)
        const data = await res.json()
        console.log(data)
        return data
    }  catch (error) {
        console.log(error)
    }

}

async function completeAPI(){
    const data = await getData();
    // const data = require('./data/world.json')
    const random = getRadnomizedArticles(data['results'])
    const html = htmlWorkflow(random)
    const markdown = turndownService.turndown(html)
    return markdown
}


// Utility function

function getRandomIndices(max, n_indices = 2){
    var arr = [];
    while(arr.length < n_indices){
        var r = Math.floor(Math.random() * max) + 1;
        if(arr.indexOf(r) === -1) arr.push(r);
    }
    return (arr);
}

function getRadnomizedArticles(results, n_indices=2){
    // let data = require('./data/world.json')
    // let results = data["results"]
    let length = results.length
    let randomIndices = getRandomIndices(length, n_indices)
    let reqArticles = randomIndices.map((index)=> results[index])
    return reqArticles
}

// Write to READEME.md
async function writeToReadMe(){
    const md = await completeAPI();
    const readme = fs.readFile('./README_template.md', 'utf-8', (err, data)=>{
        const updatedReadMe = data.replace(replace_string, md)
        fs.writeFileSync('./README.md', updatedReadMe )

    })

}

// Running the function
writeToReadMe()

