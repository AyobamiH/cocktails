


            
             
class CreateElement{
    constructor(){

        this.allCockTails = document.querySelector('.allCockTails')
        this.section = document.createElement("section")
        this.h1 = document.createElement("h1");
        this.h2 = document.createElement('h2')  
        this.img = document.createElement('img')   
    }


    emptyCockTailSection(){
        this.allCockTails.innerHTML = ''
    }

    newSection(){
        this.section.appendChild(this.h1)
        this.section.appendChild(this.img)
        this.section.appendChild(this.h2)
        this.allCockTails.appendChild(this.section)
    }
    
}



function fetchDrinks(){
    let drink = document.querySelector('input').value
    
    let allElements = new CreateElement()
    allElements.emptyCockTailSection()
    if(!drink){
        let noDrink = new CreateElement()
        noDrink.emptyCockTailSection()
        
        noDrink.h1.innerText= 'Enter a drink please'
        noDrink.allCockTails.appendChild(noDrink.h1)
        
    }else{
        
        fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + drink)
        .then(res => res.json())
        .then( data =>{
           if(data.drinks == null){
                let noDrink = new CreateElement()
                noDrink.emptyCockTailSection()
                
                noDrink.h1.innerText= 'Drink not Found'
                noDrink.allCockTails.appendChild(noDrink.h1)
           }else{
                let allDrinks = data.drinks
                //console.log(allDrinks)
                
                for(let i=0; i < allDrinks.length; i++){
                    
                    let newElements = new CreateElement()
                    newElements.h1.innerText =  `${allDrinks[i].strDrink}`
                    newElements.h2.innerText = `${allDrinks[i].strInstructions}`
                    newElements.img.src = `${allDrinks[i].strDrinkThumb}`
                    newElements.newSection()


                }
           }
        
        })
        .catch(err => {
            console.log(err)
        })
        
    }
}



let button = document.querySelector('button').addEventListener('click', fetchDrinks)


// function getDrink(){
//     // oldSection.removeChild('section')
//     let drink = document.querySelector('input').value
//     let allCockTail =  document.querySelector('.allCockTails')
//        allCockTail.innerHTML=''
//     console.log(drink)
//     if(!drink){
//         const h2 = document.createElement('h2')
//         h2.innerText = 'Enter a drink please'
//         allCockTail.appendChild(h2)
//     }else{
//         fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + ` ${drink}`)
//         .then(res => res.json())
//         .then( data =>{   
//         let allDrinks = data.drinks
        
        
       
//         for(let i=0; i < allDrinks.length; i++){
        
//             const newSection= document.createElement("section");
//             const newH2 = document.createElement("h2");
//             const newH3 = document.createElement("h3");
//             const newImg = document.createElement('img')           
//             const oldSection = document.querySelector('.allCockTails')
//             newH2.innerText =  ` ${allDrinks[i].strDrink}`
//             newH3.innerText = `${allDrinks[i].strInstructions}`   
//             newImg.src = `${allDrinks[i].strDrinkThumb}`
//             newSection.appendChild(newH2)
//             newSection.appendChild(newImg)
//             newSection.appendChild(newH3)
//             oldSection.appendChild(newSection)
            

            
        
        
//         }
//         // for(let i=1; i < 16; i++){
//         //                 console.log(allCockTail.appendChild(`<span>${allDrinks[i]}.strIngredient${i}</span>`))

//         // }
//     })

//     .catch(err => {
//         console.log(err)
//     })


//     }
    
    
    
// }

 

// function getDrink(){
//     // oldSection.removeChild('section')
//     let drink = document.querySelector('input').value
//     let allCockTail =  document.querySelector('.allCockTails')
//        allCockTail.innerHTML=''
//     console.log(drink)
//     if(!drink){
//         const h2 = document.createElement('h2')
//         h2.innerText = 'Enter a drink please'
//         allCockTail.appendChild(h2)
//     }else{
//         fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?s=' + ` ${drink}`)
//         .then(res => res.json())
//         .then( data =>{   
//         let allDrinks = data.drinks
        
        
       
//         for(let i=0; i < allDrinks.length; i++){
        
//             const newSection= document.createElement("section");
//             const newH2 = document.createElement("h2");
//             const newH3 = document.createElement("h3");
//             const newImg = document.createElement('img')           
//             const oldSection = document.querySelector('.allCockTails')
//             newH2.innerText =  ` ${allDrinks[i].strDrink}`
//             newH3.innerText = `${allDrinks[i].strInstructions}`
                    
//             newImg.src = `${allDrinks[i].strDrinkThumb}`
//             newSection.appendChild(newH2)
//             newSection.appendChild(newImg)
//             newSection.appendChild(newH3)
//             oldSection.appendChild(newSection)
        
        
//         }
//     })

//     .catch(err => {
//         console.log(err)
//     })


//     }
    
    
    
// }



// function getDrinkByFirstLetter(){
//     // oldSection.removeChild('section')
    
//     let userRequest = document.querySelector('input').value
    
//     fetch(`https://www.thecocktaildb.com/api/json/v1/1/search.php?f=${userRequest}`)
//     .then(res => res.json())
//     .then( data =>{   
//         let allDrinks = data.drinks
        
        
//         document.querySelector('.allCockTails').innerHTML=''
//            for(let i=0; i < allDrinks.length; i++){
            
//                 const newSection= document.createElement("section");
//                 const newH2 = document.createElement("h2");
//                 const newImg = document.createElement('img')           
//                 const oldSection = document.querySelector('.allCockTails')
//                 newH2.innerText =  ` ${allDrinks[i].strDrink}`
//                 //Create new image and Add Drink image to new newImg
                
//                 newImg.src = `${allDrinks[i].strDrinkThumb}`
//                 newSection.appendChild(newH2)
//                 newSection.appendChild(newImg)

//                 oldSection.appendChild(newSection)
         
            
//         }
        

           
    
        

//     })

//     .catch(err => {
//         console.log(err)
//     })
    
// }



//The user will enter a cocktail. Get a cocktail name, photo, and instructions and place them in the DOM
