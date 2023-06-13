const  fs = require('fs');
const os = require('node:os');

/*
fs.writeFileSync("data.txt","hello");
//fs.writeFileSync("data.txt","world");
fs.appendFileSync("data.txt"," world");

const data=fs.readFileSync("data.txt");
console.log(data.toString());
*/

//console.log(os.freemem());
//console.log(os.totalmem());
//console.log(os.uptime());

/*
//save
const guests=[];
guests.push({
    name:"name1",
    address:"add1"
});

//console.log(guests);
const dataJSON = JSON.stringify(guests);
fs.writeFileSync("j_data.json",dataJSON);
*/

/*
//read
const dataBaffer= fs.readFileSync("j_data.json");
const data= JSON.parse(dataBaffer);
const dataJSON=dataBaffer.toString();
console.log(dataJSON[0].name);
*/