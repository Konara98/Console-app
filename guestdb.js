const fs=require('fs');
const chalk=require('chalk');

//guest -id, name, address, contact_no, visit_date
//addGuest, updateGuest, deleteGuest, readGuest, listGuest

const db_file="data.json";

const addGuest= (name,address,contact_no,visit_date)=>{
    const guests=loadGuest();
    const length=guests.length;
    let id=1;
    if(length>0){
        id=guests[length-1].id+1;
    }
    guests.push({
        id,
        name,       //name:name
        address,    //address:address
        contact_no, //contact_no:contact_no
        visit_date  //visit_date:visit_date
    });

    saveGuest(guests);
    console.log(chalk.blue("Data Saved!"));
}

const updateGuest= (id,name,address,contact_no,visit_date)=>{
    const guests=loadGuest();
    const guestIndex=guests.findIndex((guest)=> guest.id==id);

    if(guestIndex!=-1){
        const guest=guests[guestIndex];
        guest.name=name?name:guest.name;
        guest.address=address?address:guest.address;
        guest.contact_no=contact_no?contact_no:guest.contact_no;
        guest.visit_date=visit_date?visit_date:guest.visit_date;
        
        console.log(chalk.green("Record update!",id));
        saveGuest(guests);

    }else{
        console.log(chalk.green.inverse("No record found!"));
    }
}

const deleteGuest= (id)=>{
    const guests=loadGuest();
    const newGuests=guests.filter((guest)=> guest.id!=id);

    if(guests.length>newGuests.length){
        saveGuest(newGuests);
        console.log(chalk.red("Delete ",id));
    }else{
        console.log(chalk.red.inverse("No record found!"));
    }
}

const readGuest= (id)=>{
    const guests=loadGuest();
    const guest=guests.find((guest)=> guest.id==id);

    if(guest){
        console.log(chalk.yellow("Guest ",id));
        console.log(guest); 
    }else{
        console.log(chalk.yellow.inverse("No record found!"))
    }
}

const listGuest= ()=>{
    console.log(chalk.magenta("Guests List"));
    const guests=loadGuest();
    guests.forEach((guest)=>{
        console.log(guest);
    });
}

const saveGuest= (guests)=>{
    const dataJSON = JSON.stringify(guests);
    fs.writeFileSync(db_file,dataJSON);
}

const loadGuest= ()=>{
    try{
        const dataBaffer=fs.readFileSync(db_file);
        const dataJSON=dataBaffer.toString();
        return JSON.parse(dataJSON);
    } catch(e){
        return [];
    }
    
}

module.exports={
    addGuest,
    updateGuest,
    deleteGuest,
    readGuest,
    listGuest
}















/*
//data save file
const chalk = require('chalk');

//console.log("db.js");
//const name="lakshitha";
//const password=123;//

//create 
const add=()=> console.log(chalk.green("Add"),chalk.red("user"));

//view
const view=()=> console.log(chalk.blue("View"));

module.exports={
    add,
    view
}
*/