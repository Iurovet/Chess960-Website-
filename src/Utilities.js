function numToPos(number) {
    let currPieces = ["", "", "", "", "", "", "", ""];
    let quotient = 0;
    let remainder = 0;

    /* Use Math.floor() and % for the quotient and remainder, respectively.
     * Keep only the quotient for subsequent steps.
     * The light- and dark-squared bishops will be at indices 2n + 1 and 2n, respectively.
    */
    for (let i = 0; i < 2; ++i) {
        quotient = Math.floor(number / 4);
        remainder = number % 4;
        currPieces[2*remainder + (1 - i)] = "bishop";
        number = quotient;
        console.log(number);
    }

    quotient = Math.floor(number / 6);
    remainder = number % 6;
    currPieces[currPieces.indexOf("", remainder)] = "queen"; // First free square, starting from remainder.
    number = quotient;
    console.log(number);

    // number is guaranteed to be a single digit at this point.
    currPieces = placeKnights(number, currPieces);

    /* The remaining 3 squares give Rook, King, Rook. Since we want to use successive free squares, 
     * it is enough to find the first blank index on each go.
     */
    currPieces[currPieces.indexOf("")] = "rook";
    currPieces[currPieces.indexOf("")] = "king";
    currPieces[currPieces.indexOf("")] = "rook";

    return currPieces;
}

function placeKnights(number, pieces) {
    let firstKnight = 0;
    let secondKnight = 0;
    let numBlanks = 0;
    
    // Find the n-th free squares (starting from index 0) on which to place the knights.
    switch(number) {
        case 0:
        case 1:
        case 2:
        case 3:
            firstKnight = 1;
            secondKnight = number + 2;
            break;
        case 4:
        case 5:
        case 6:
            firstKnight = 2;
            secondKnight = number - 1;
            break;
        case 7:
        case 8:
            firstKnight = 3;
            secondKnight = number - 3;
            break;
        case 9:
            firstKnight = 4;
            secondKnight = 5;
            break;
        default:
            break;
    }

    for (let i = 0; i < 8; ++i) {
        numBlanks += (pieces[i] === "" ? 1 : 0);

        // Place a knight if the current square is blank (and the correct number of blank squares counted).
        if (((numBlanks === firstKnight) || (numBlanks === secondKnight)) && (pieces[i] === "")) {
            pieces[i] = "knight";
        }
    }

    return pieces;
}

export {
    numToPos
}