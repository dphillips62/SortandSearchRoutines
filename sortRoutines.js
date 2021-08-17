var introDiv = document.getElementById("Intro")
var bubbleDiv = document.getElementById("Bubble")
var selectionDiv = document.getElementById("Selection")
var insertionDiv = document.getElementById("Insertion")
var generateStringsDiv = document.getElementById("generateStrings")
var sortNumber = 0;
var string_Length = document.getElementById("strLength");
var string_Number = document.getElementById("strNumber");
var theOutput = document.getElementById("txtOutput");
var searchText = document.getElementById("strSearchText")
var itemsSorted = false;


var strArray = [];

document.body.onload = function () { //when the page loads get a random number
    introDiv.style.display = "block"
    bubbleDiv.style.display = "none"
    selectionDiv.style.display = "none"
    insertionDiv.style.display = "none"
    generateStringsDiv.style.display = "none"
    sortNumber = 0;
}

function runBubble() {
    introDiv.style.display = "none"
    bubbleDiv.style.display = "block"
    selectionDiv.style.display = "none"
    insertionDiv.style.display = "none"
    generateStringsDiv.style.display = "block"
    sortNumber = 1;
}

function runSelection() {
    introDiv.style.display = "none"
    bubbleDiv.style.display = "none"
    selectionDiv.style.display = "block"
    insertionDiv.style.display = "none"
    generateStringsDiv.style.display = "block"
    sortNumber = 2;
}

function runInsertion() {
    introDiv.style.display = "none"
    bubbleDiv.style.display = "none"
    selectionDiv.style.display = "none"
    insertionDiv.style.display = "block"
    generateStringsDiv.style.display = "block"
    sortNumber = 3;
}

function mainMenu() {
    introDiv.style.display = "block"
    bubbleDiv.style.display = "none"
    selectionDiv.style.display = "none"
    insertionDiv.style.display = "none"
    generateStringsDiv.style.display = "none"
    sortNumber = 0;
    theOutput.value = "";
    txtSortOutput.value = "";
    string_Length.value = ""
    string_Number.value = ""
}

function pickSorts() {
    txtSortOutput.value = "";
    switch (sortNumber) {
        case 1: bubbleSort()
            break;
        case 2: selectionSort()
            break;
        case 3: insertionSort()
            break;
        default:
    }

}

function generateStrings() {

    str_Length = string_Length.value;
    str_Number = string_Number.value;

    var random_string = "";
    var random_ascii;
    theOutput.value = "";
    strArray = [];

    for (var j = 0; j < str_Number; j++) {
        for (var i = 0; i < str_Length; i++) {
            random_ascii = Math.floor(Math.random() * 25 + 97);
            random_string += String.fromCharCode(random_ascii);
        }
        strArray.push(random_string)
        random_string = "";
    }
    for (i = 0; i < strArray.length; i++) {
        if (i == strArray.length - 1) {
            theOutput.value = theOutput.value + strArray[i]
        } else {
            theOutput.value = theOutput.value + strArray[i] + "\n"
        }
    }
    itemsSorted = false;
}

function bubbleSort() {
    var swapped = true,
        swapping = 0,
        len = strArray.length - 1;
    //Bubble Sort
    while (swapped === true) {
        swapped = false;
        i = 0;
        while (i < len) {
            if (strArray[i] > strArray[i + 1]) {
                swapping = strArray[i];
                strArray[i] = strArray[i + 1];
                strArray[i + 1] = swapping;
                swapped = true;
            };
            i++;
        };
        len--;
    }
    displayArray();
};

function selectionSort() {

    var len = strArray.length - 1,
        max = 0,
        posmax = 0,
        swapping = 0,
        i = 0;

    while (len > 0) {
        i = 0;
        max = strArray[i]; //initially, set max to the first item in the array
        posmax = i;
        while (i < len) {
            //this loop searches for the highest value in the unsorted portion of the array
            i++;
            if (strArray[i] > max) {
                max = strArray[i];
                posmax = i;
            }
        }
        swapping = strArray[posmax]; //this swaps the max item with the last item in the unsorted portion
        strArray[posmax] = strArray[len];
        strArray[len] = swapping;
        len--;
    }
    displayArray();
}

function insertionSort() {

    var total = strArray.length,
        first = 0,
        positionofnext = total - 1,
        current = 0,
        next = 0;

    while (positionofnext >= first) {
        next = strArray[positionofnext];
        current = positionofnext;

        while (current < total && next > strArray[current + 1]) {
            //look for the position into which to insert the current name, and shuffle the
            //sorted elements along until we find it
            current++;
            strArray[current - 1] = strArray[current];
        }
        strArray[current] = next; //put the current name to be sorted into its correct place
        positionofnext--; //effectively shorten the length of the unsorted portion of the array
    }
    displayArray();
}

function displayArray() {
    for (i = 0; i < strArray.length; i++) {
        if (i == strArray.length - 1) {
            txtSortOutput.value = txtSortOutput.value + strArray[i];
        } else {
            txtSortOutput.value = txtSortOutput.value + strArray[i] + "\n";
        }
    }
    itemsSorted = true;
}

function linearSearch() {
    var theFind = document.getElementById("strFind").value;
    var i = 0;
    var foundIt = false;
    while (foundIt === false && i <= strArray.length - 1) {
        if (strArray[i] != theFind) {
            i++;
        } else {
            foundIt = true;
        }
    }
    if (foundIt) {
        alert("Name found at position " + (i + 1));
    } else {
        alert("Name not found");
    }
}

function binarySearch() {

    if (itemsSorted && searchText.value != "") {
        var lower = 0,
            upper = strArray.length - 1,
            foundit = false,
            middle = 0,
            positionfound = 0;

        do {
            middle = Math.floor((upper + lower) / 2);
            if (searchText.value === strArray[middle]) {
                foundit = true;
                positionfound = middle;
            } else {
                if (searchText.value < strArray[middle]) {
                    upper = middle - 1;
                } else {
                    lower = middle + 1;
                }
            }
        }
        while (foundit === false && lower <= upper);

        if (foundit) {
            alert('Name found at position  ' + Number(positionfound + 1));
        } else {
            alert('Name not found');
        }
    } else {
        alert("Items not sorted or string not entered as yet. Please select a sort or enter a string.")
    }

}


