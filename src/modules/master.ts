//master joins. This function is inputted into yargs, 

//it executes joins every function. It also updates the properties of house. I do't know if it'l
//will be here or will have to be imported, exported, that house, or if I need a class. 

//Maybe read up on classes.

//If a name is passed. Which means if a name is true. If string value >0 or something, it's true
//but it starts out as false. THen it creates a house.

//House it also checks if there is a file by that name. If so it just passes you. 
//It doesn't over write it.

//This function is passed into index. and populated by yargs inputs.


//basically export
//fun master
//imports each of the function into itself. and then runs them.

//Than that function is imported into index.ts



import { dryWall } from './drywall';

export function masterCalc(l:number, w:number, name:string, o:object, 
    a = (l:number, w:number)=>{}, 
    b = (o:object) =>{})

    {

    console.log(l+w)
    console.log("Logic worked. How to generate yargs backbone?")
    

    b(o);

    }

//////////////////////////////////////