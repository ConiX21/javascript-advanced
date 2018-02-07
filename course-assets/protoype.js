var stooge = {};
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

//Example 1
if (typeof Object.create !== 'function') {
    console.log('here')
    Object.create = function (o) {
        var F = function () { };
        F.prototype = o;
        return new F();
    };
}
var another_stooge = Object.create(stooge);
console.log(another_stooge["first-name"])
console.log(typeof Object.create)

//Example 2
another_stooge['first-name'] = 'Harry';
another_stooge['middle-name'] = 'Moses';
another_stooge.nickname = 'Moe';

console.log(another_stooge['middle-name']);

//Example 3
stooge.profession = 'actor';
another_stooge.profession // 'actor'

//Reflection
typeof flight.number // 'number'
typeof flight.status // 'string'
typeof flight.arrival // 'object'
typeof flight.manifest // 'undefined'

typeof flight.toString // 'function'
typeof flight.constructor // 'function'


console.log(flight.hasOwnProperty('number')) // true
console.log(flight.hasOwnProperty('constructor'))// false
console.log(flight.hasOwnProperty('toString'))// false


//Enumeration
//Example 1
var name;
for (name in another_stooge) {
    if (typeof another_stooge[name] !== 'function') {
        console.log(name + ': ' + another_stooge[name]);
    }
}
//Example 2 
var i;
var properties = [
    'first-name',
    'middle-name',
    'last-name',
    'profession'
];
for (i = 0; i < properties.length; i += 1) {
    console.log(properties[i] + ': ' +
        another_stooge[properties[i]]);
}

//Delete
console.log(another_stooge.nickname) // 'Moe'
// Remove nickname from another_stooge, revealing
// the nickname of the prototype.

delete another_stooge.nickname;
console.log(another_stooge.nickname) // 'undefined'