//Callback
function successCallback() {
    // Do stuff before send​
}

​function successCallback() {
    // Do stuff if success message received​
}

​function completeCallback() {
    // Do stuff upon completion​
}

​function errorCallback() {
    // Do stuff if error received​
}

$.ajax({
    url: "http://fiddle.jshell.net/favicon.png",
    success: successCallback,
    complete: completeCallback,
    error: errorCallback

});

//apply
//Change object this to 3 for this example
function callMe(arg1, arg2) {
    var s = "";

    s += "this value: " + this;
    s += "\n";
    for (i in callMe.arguments) {
        s += "arguments: " + callMe.arguments[i];
        s += "\n";
    }
    return s;
}

console.log("Original function:");
console.log(callMe(1, 2));

console.log("Function called with apply:");
console.log(callMe.apply(3, [4, 5]));


//Call

//Example 1
var animaux = [
    { espece: 'Lion', nom: 'Roi' },
    { espece: 'Éléphant', nom: 'Dumbo' }
];

for (var i = 0; i < animaux.length; i++) {
    (function (i) {
        this.print = function () {
            console.log('#' + i + ' ' + this.espece + ' : ' + this.nom);
        }
        this.print();
    }).call(animaux[i], i);
}

//Example 2
function saluer() {
    var reponse = [this.nom, "est un", this.role, "."].join(" ");
    console.log(reponse);
}

var personne1 = {
    nom: "Sénèque",
    role: "philosophe"
};

saluer.call(personne1); // Sénèque est un philosophe.