const billTotalInput=document.getElementById('billTotalInput')
const tipInput=document.getElementById('tipInput')
const numberOfPeopleDiv=document.getElementById('numberOfPeople')
const perPersonTotal=document.getElementById('perPersonTotal')


// // billTotalInput.value=234
// numberOfPeople.innerText=3
// perPersonTotal.innerText=billTotalInput.value/numberOfPeople.innerText
let totalPeople=Number(numberOfPeople.innerText)
let numOfPeople=Number(numberOfPeopleDiv.innerText)

const calculateBill=()=>{
    const bill=Number(billTotalInput.value)
    
    const tipPercentage=Number(tipInput.value)/ 100
    const tipAmount=bill*tipPercentage
    const totalAmount=bill+tipAmount
    const perPeople=totalAmount/numOfPeople
   // const perPerson=(bill+tip)/numberOfPeople.innerText
    // console.log(perPerson);
    perPersonTotal.innerText=`$${perPeople.toLocaleString('en-US')}`
}
const increasePeople=()=>{
    numOfPeople+=1
    numberOfPeopleDiv.innerText=numOfPeople
    calculateBill()
}

const decreasePeople=()=>{
    if (numOfPeople <= 1){
        throw 'You can not have less than 1 person'
    }
    numOfPeople-=1
    numberOfPeopleDiv.innerText=numOfPeople
    calculateBill()
}
// function decreasePeople(){
//     if( numberOfPeople ===1){


//     }
// }