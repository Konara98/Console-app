const yargs=require('yargs');
const db=require('./guestdb');

//guest -id, name, address, contact_no, visit_date

//console.log(process.argv);
//console.log(yargs.argv);
//yargs.version("1.1.2");

//add
yargs.command({
    command:'add',
    describe:'To add guest',
    builder:{
        name:{
            describe:"name",
            demandOption:true,
            type:"string"
        },
        address:{
            describe:"address",
            demandOption:true,
            type:"string"
        },
        contact_no:{
            describe:"contact number",
            demandOption:true,
            type:"string"
        },
        visit_date:{
            describe:"contact number",
            demandOption:true,
            type:"string"
        }
    },
    handler(argv){
        db.addGuest(argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});

//update
yargs.command({
    command:'update',
    describe:'To update details of a guest',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        },
        name:{
            describe:"name",
            type:"string"
        },
        address:{
            describe:"address",
            type:"string"
        },
        contact_no:{
            describe:"contact number",
            type:"string"
        },
        visit_date:{
            describe:"contact number",
            type:"string"
        }
    },
    handler(argv){
        db.updateGuest(argv.id,argv.name,argv.address,argv.contact_no,argv.visit_date);
    }
});

//delete
yargs.command({
    command:'delete',
    describe:'To delete a guest',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        }
    },
    handler(argv){
        db.deleteGuest(argv.id);
    }
});

//read
yargs.command({
    command:'read',
    describe:'To read a guest',
    builder:{
        id:{
            describe:"ID",
            demandOption:true,
            type:"number"
        }
    },
    handler(argv){
        db.readGuest(argv.id);
    }
});

//list
yargs.command({
    command:'list',
    describe:'To add guest',
    handler(){
        db.listGuest();
    }
});


//yargs.parse();
console.log(yargs.argv);

/*
const command=process.argv;

if(command[2]==='add'){
    db.addGuest();
}else if(command[2]==='update'){
    db.updateGuest();
}else if(command[2]==='delete'){
    db.deleteGuest();
}else if(command[2]==='read'){
    db.readGuest();
}else if(command[2]==='list'){
    db.listGuest();
}else{

}
*/


/*
//const chalk= require('chalk');
const db= require("./guestdb");
//console input

db.add();
db.view();
*/