let bandNumber = 1

const takeNumber = function (bandName) {
    console.log(bandNumber+". " + bandName);
    bandNumber = bandNumber+1;
}

const scum = takeNumber("Galactic Scum")
console.log(scum)  // This should print "1. Galactic Scum" in the console

const under = takeNumber("Underdogs")
console.log(under)  // This should print "2. Underdogs" in the console

const prince = takeNumber("Prince")
console.log(prince)