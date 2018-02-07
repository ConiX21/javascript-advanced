//Functionnal
// Create a variable called add and store a function
// in it that adds two numbers.
var add = function (a, b) {
    return a + b;
};

//Methode invocation pattern

// Create myObject. It has a value and an increment
// method. The increment method takes an optional
// parameter. If the argument is not a number, then 1
// is used as the default.
var myObject = {
    value: 0,
    increment: function (inc) {
        this.value += typeof inc === 'number' ? inc : 1;
    }
};

myObject.increment();
console.log(myObject.value); // 1

myObject.increment(2);
console.log(myObject.value); // 3

//Function pattern

// Augment myObject with a double method.
myObject.double = function () {
    var that = this; // Workaround.
    var helper = function () {
        that.value = add(that.value, that.value);
    };
    helper(); // Invoke helper as a function.
};
// Invoke double as a method.
myObject.double();
console.log(myObject.value);


// Create a constructor function called Quo. 
// It makes an object with a status property.
var Quo = function (string) { this.status = string; };
// Give all instances of Quo a public method
// called get_status.
Quo.prototype.get_status = function () { return this.status; };
// Make an instance of Quo.
var myQuo = new Quo("confused");
document.writeln(myQuo.get_status());  // confused 



//Arguments

// Make a function that adds a lot of stuff.
// Note that defining the variable sum inside of // the function does not interfere with the sum // defined outside of the function. The function // only sees the inner one.
var sum = function () {
    var i, sum = 0;
    for (i = 0; i < arguments.length; i += 1) {
        sum += arguments[i];
    }
    return sum;
};
document.writeln(sum(4, 8, 15, 16, 23, 42)); // 108 



//Exception
var add = function (a, b) {
    if (typeof a !== 'number' || typeof b !== 'number') {
        throw { name: 'TypeError', message: 'add needs numbers' };
    } return a + b;
}

// Make a try_it function that calls the new add // function incorrectly.
var try_it = function () {
    try {
        add("seven");
    } catch (e) {
        document.writeln(e.name + ': ' + e.message);
    }
}
try_it();


//Closure
//Example 1
function creerFonction() {
    var nom = "Mozilla";
    function afficheNom() {
        console.log(nom);
    }
    return afficheNom;
}

var maFonction = creerFonction();
maFonction();

//Example 2
function faireAddition(x) {
    return function (y) {
        return x + y;
    };
};

var ajout5 = faireAddition(5);
var ajout10 = faireAddition(10);

console.log(ajout5(2));  // 7
console.log(ajout10(2)); // 12

//Exmple 3
var compteur = (function () {
    var compteurPrive = 0;
    function changeValeur(val) {
        compteurPrive += val;
    }
    return {
        increment: function () {
            changeValeur(1);
        },
        decrement: function () {
            changeValeur(-1);
        },
        valeur: function () {
            return compteurPrive;
        }
    };
})();

console.log(compteur.valeur()); /* Affiche 0 */
compteur.increment();
compteur.increment();
console.log(compteur.valeur()); /* Affiche 2 */
compteur.decrement();
console.log(compteur.valeur()); /* Affiche 1 */


//Callback
function some_function2(url, callback) {
    var httpRequest; // create our XMLHttpRequest object
    if (window.XMLHttpRequest) {
        httpRequest = new XMLHttpRequest();
    } else if (window.ActiveXObject) {
        // Internet Explorer is stupid
        httpRequest = new
            ActiveXObject("Microsoft.XMLHTTP");
    }

    httpRequest.onreadystatechange = function () {
        // inline function to check the status
        // of our request
        // this is called on every state change
        if (httpRequest.readyState === 4 &&
            httpRequest.status === 200) {
            callback.call(httpRequest.responseXML);
            // call the callback function
        }
    };
    httpRequest.open('GET', url);
    httpRequest.send();
}
// call the function
some_function2("text.xml", function () {
    console.log(this);
});
console.log("this will run before the above callback");