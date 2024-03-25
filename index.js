const  myArray = ["Guadalupe", "Ollie", "Aki"];
let party = "surprise";

function writeCards(myArray, party) {
    let myArrayOne = [];
    for ( let a = 0; a < myArray.length; a++) {

        myArrayOne.push(`Thank you, ${myArray[a]}, for the wonderful ${party} gift!`);
        //debugger;

    }
    return myArrayOne;
}




function countDown(myArray1) {
    while(myArray1 >= 0){
        console.log(myArray1)
        myArray1--
    }
}
countDown(4);