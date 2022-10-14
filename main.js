//cross array
let array1 = [5, 7, 14, 5];
let array2 = [6, 2, 22, 1];



function crossArray(arraynum1, arraynum2)
{
    let arrayIndex1=[];
    for (i = 0; i < arraynum1.length; i++){
    
    //array incremental modifications
    arrayIndex1.push(arraynum1[i]);
    arrayIndex1.push(arraynum2[i]);
   

    }

    return `Array 1: ${arrayIndex1}` 
}

console.log(crossArray(array1,array2));

//foundcat

//global array
let catArray = ["dog", "bear", "cheese", "cat", "fox"];
let noCatArray = ["hi", "bye", "why", "try"];

function foundCat(array) {

    return array.includes('cat');

}
console.log(foundCat(catArray));
console.log(foundCat(noCatArray));


//oddOnesOut

let oddOnesOut1 = [1,2,1,1,3,5,1]; 
let oddOnesOut2 = [0,-1,5,1,5,0] ;
let oddOnesOut3 = [1,1,1,1,1,1];
let newArray =[];
function oddOnesOut(array){

     
    for(let i = 0; i <array.length; i++ )
    {
        
        if (array[i] % 2 !== 0)
        {
          newArray.push(array[i]);
        } else
        {newArray.splice(array[i]);}
        
    }

    return newArray
}

console.log(oddOnesOut(oddOnesOut1));


//stringSpace .split makes the string an array of characters
//.join allows a space to be added between the array items

let spaceString = "string";
function stringSpace (string){
  let newString = ""
   for(let i = 0; i < string.length; i++){
    newString = string.split('').join(' ');
   }
    return newString
}

console.log(stringSpace(spaceString))

//stringCompareCounter

let counter = 0;
let compareArray1 = ['dog', 'cat', 'sheep','cat','cows'];
let compareArray2 = ['dog', 'cat', 'birds','cat','moose'];

function stringCompareCounter (compareArray1,compareArray2){

     for(let i = 0; i < compareArray1.length; i++)
     {
       if(compareArray1[i] === compareArray2[i]){
                   counter += 1;
       } else { counter += 0;}
     }
     return counter
}


console.log(stringCompareCounter(compareArray1,compareArray2))

//duplicate

let duplicate1 =['hi', 'wow', 'hey', 'hi']
let duplicate2 = ['one', 'two' ,'three']
let duplicate3 = [1,7,32,1,10,2,11]
let dupArray = [];
let duplication = true;
function duplicate(array){

   //outer loop
  for (let i = 0; i < array.length; i++){
       //incrementing array1
       dupArray = array[i];
//inner loop 
    for(let e = 0; e < array.length; e++)
      {
        //incrementing array2
        array = array[i];
        if (dupArray[e] === array[i]){
        
        duplication = true;
        break;

        } else {
          duplication = false;

        }
      }

  }
   return duplication
}
console.log(duplicate(duplicate1))
console.log(duplicate(duplicate2))
console.log(duplicate(duplicate3))



let character1 = {
  name: 'Cloud',
  atk: 100,
  def: 90
}

let character2 = {
  name: 'Sephiroth',
  atk: 150,
  def: 50
}

function damageCalulator(character1, character2){

  
  let character1atk = character1.atk;
  let character2def = character2.def;
  attackOne = character1atk - character2def;
  characterName2 = character2.name
  characterName1 = character1.name
  

  

  return ` ${characterName1} deals ${attackOne} damage to ${characterName2} `;

}

console.log(damageCalulator(character1, character2))
console.log(damageCalulator(character2, character1))