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
   
};

function selectionSort() {
   
}

function insertionSort() {

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

function linearSerach() {
    
}

function binarySearch() {


}


