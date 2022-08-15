"use strict" 

let temperamentInput = document.getElementById("temperament")
let temperamentText = document.getElementById("temperamentValue")
temperamentInput.addEventListener("input", showValue)
function showValue(){temperamentText.textContent = temperamentInput.value}


let cats = []

function savePet(){
    let cat = {}
    cat.name=document.getElementById("name").value 
    cat.age=document.getElementById("age").value
    cat.weight=document.getElementById("weight").value
    cat.breed=document.getElementById("breed").value
    cat.gender=getGender()
    cat.neutered=neuteredCheck()
    cat.chipped=chipCheck()
    cat.temperament= document.getElementById("temperament").value     
    // showValue()
    cats.push(cat)
    render(cat)
    localStorage.setItem("cats",JSON.stringify(cats))
       
}

function getGender(){
    if(document.getElementById("male").checked)
        return "Male"
    else
        return "Female"
}

function neuteredCheck(){
    for(let i =0; i<document.getElementsByName("neutered").length; i++)
        if(document.getElementsByName("neutered")[i].checked)
            return "Yes"
        else
            return "No"    
}

function chipCheck(){
    for(let i=0; i<document.getElementsByName("chipped").length; i++)
        if (document.getElementsByName("chipped")[i].checked)
            return "Yes"
        else
            return "No"    
}

function render(cat,i){
    let tile = document.createElement("div")
    tile.className="tile"
    let tiles=  document.getElementById("tilecontainer")
    tiles.appendChild(tile) 

    let name = document.createElement("h1")
    tile.appendChild(name)
    name.innerText=cat.name
    
    let age = document.createElement("p")
    tile.appendChild(age)
    age.innerText= "Age: " + cat.age

    let weight = document.createElement("p")
    tile.appendChild(weight)
    weight.innerText= "Weight(kg): " + cat.weight

    let breed = document.createElement("p")
    tile.appendChild(breed)
    breed.innerText= "Breed: " + cat.breed

    let gender = document.createElement("p")
    tile.appendChild(gender)
    gender.innerText= "Gender: " + cat.gender

    let neutered = document.createElement("p")
    tile.appendChild(neutered)
    neutered.innerText= "Neutered: " + cat.neutered

    let chipped = document.createElement("p")
    tile.appendChild(chipped)
    chipped.innerText= "Chipped: " + cat.chipped

    let temperament = document.createElement("p")
    tile.appendChild(temperament)
    temperament.innerText= "Temperament: " + cat.temperament

    let deleteButton = document.createElement("button") //creates button element//
    deleteButton.setAttribute("id", 'delete');
    deleteButton.innerText="Delete" //adds text to button/
    deleteButton.addEventListener("click",deletePet) //creates an action for the button second argument is function to envoke//
    deleteButton.dataset.index=i //index is just a word can be named anything//
    tile.appendChild(deleteButton) //adds button to each card//
}

function showPets(){
    cats = JSON.parse(localStorage.getItem("cats"))
    if(cats==null){cats=[]}
    let tiles = document.getElementById("tilecontainer")
    tiles.innerHTML=""
    for(let i=0; i<cats.length; i++){
        render(cats[i],i)
    }
}

function deletePet(e){
    let button = e.target
    let i = button.dataset.index
    cats.splice(i,1)
    localStorage.setItem("cats",JSON.stringify(cats)) 
    showPets()
    }

    showPets()