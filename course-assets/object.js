//litteral object

//Exmaple 1
var empty_object = {};

//example 2
var stooge = {
    "first-name": "Jerome",
    "last-name": "Howard"
};

//example 3 
var flight = {
    airline: "Oceanic",
    number: 815,
    departure: {
        IATA: "SYD",
        time: "2004-09-22 14:55",
        city: "Sydney"
    },
    arrival: {
        IATA: "LAX",
        time: "2004-09-23 10:42",
        city: "Los Angeles"
    }
};

//Get datas
stooge["first-name"] // "Jerome"
flight.departure.IATA // "SYD"

stooge["middle-name"] // undefined
flight.status // undefined
stooge["FIRST-NAME"] // undefined

// default value with || 
var middle = stooge["middle-name"] || "(none)";
var status = flight.status || "unknown";

//Error show
flight.equipment // undefined
flight.equipment.model // throw "TypeError"
flight.equipment && flight.equipment.model // undefined

//Update 
stooge['middle-name'] = 'Lester';
stooge.nickname = 'Curly';
flight.equipment = {
    model: 'Boeing 777'
};
flight.status = 'overdue';

//reference
var x = stooge;
x.nickname = 'Curly';
var nick = stooge.nickname;
// nick is 'Curly' because x and stooge
// are references to the same object
var a = {}, b = {}, c = {};
// a, b, and c each refer to a
// different empty object
a = b = c = {};
 // a, b, and c all refer to
 // the same empty object
