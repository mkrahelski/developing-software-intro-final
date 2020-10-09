const yargs = require('yargs');
import { argv } from "process";
import { Arguments, Argv, number } from "yargs";


import { dryWall } from './modules/drywall';
import { masterCalc } from './modules/master';


console.log(process.argv);

//const length = argv.length;
//console.log(length)






yargs
  .command('get', 'make a get HTTP request', function (yargs) {
    return yargs.option('url', {
      alias: 'u',
      default: 'http://yargs.js.org/'
    })
  })
  .help()
  .argv















function testOne(length:number, width:number, name:string) {}



//node dist/index.js --name "Hell"


//we need to populate to house. extend it across a function.
let House = {
    drywall: 0,
    plates: 0,
    plywood: 0,
    posts: 0,
    studs: 0,
    }
//so we have house. We can print house.

const balpha = (c:object) => console.log(c)
balpha(House);


//const sayHello = () => console.log("sayHello")


















/*
        command<O extends { [key: string]: Options }>(
            command: string | ReadonlyArray<string>,
            description: string,
            builder?: O,
            handler?: (args: Arguments<InferredOptionTypes<O>>) => void,
            middlewares?: MiddlewareFunction[],
            deprecated?: boolean | string,
*/


/*
 function infuseMain(yargs:Argv, a = () =>{} ):void {
    //so in theory we export meme wood needed. Which has flags for name. And flags for extracting name?
    
        yargs.command(
    
            "saving-this-house", 
            //nom
    
            "Creates house",
            
            {
                fullName: {
                    type: "string",
                    alias: "n",
                    description: "Declaration of name.",
                },

                length: {
                    type: "string",
                    alias: "n",
                    description: "Declaration of fullname.",
                },

                width: {
                    type: "string",
                    alias: "n",
                    description: "Declaration of fullname.",
                },

            },
    
//* breaks on overload call O_o
    

        );
    }


infuseMain(yargs)

// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();



*/






































/*
yargs.command({ //yargs command contains an object.
    command: 'process-house',
    describe: 'Create a new house file and generate a log output of all required supplies.',


})
// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();




yargs.command({ //yargs command contains an object.
    commmand: 'pull-house',
    describe: 'checks to see if house exists, if it does reads house. if not throws error.'

})
// tell yargs to include the --help flag
yargs.help();

// tell yargs to parse the parameters
yargs.parse();







console.log("Hello!");

const x = []; //wow it fixed it used to be var x = [];

//I don't think I need to do loops. just something simple but effective.
//I am not looking for extra work. Just understanding and ease of use.



let sum = (x: number, y: number): number => {
    return x + y;
}

sum(10, 20); //returns 30

let T = sum(10,20);

//wait okay, the function can be passed into a variable
//to turn any var into a function. Or it can be initialized in that case
//it gives the return. I feel kinda retarded tbh.
//but then why did initialized code generate function print out earlier oh well.

console.log(T);



let summer = (a:any, b:any) => a + b;
const b = summer('Hello','hey');
//right way to pass it in comma and all that.
 console.log(b);


let double = (n: number) => n *     ;

double(3);


let g = (n:number, z:number) => {n+z; return (n+z);}
//this is also somehow valid :/
//I had to do that as the return because I don't think it will be able to set itself in there
//or it might with a let x = n+z; return x;
//we can also make it void{}


let alpha = (x:number, y:number,) => void{};




function MapHouse(a:object){
//map here

} 






//how to use .map 
//The Map object holds key-value pairs and remembers the original insertion order of the keys. 
//Any value (both objects and primitive values) may be used as either a key or a value.
//

//good it just prints them all.


*/
