const yargs = require('yargs');
const argv = yargs
import { Arguments, Argv } from 'yargs';
import { calcHouseMaterials } from './calculator/index'
import { getHouseMaterials } from './calculator/index'



        yargs.command(
    
            "get-house-materials", 
            //nom
    
            "Creates house",
            
            {
                fullName: {
                    type: "string",
                    alias: "n",
                    description: "Declaration of fullname.",
                },
            },
    
            function (
                args: Argv<{
                   n: string;
                   fullName: string;
                }>
            ) 
            
            {           
                getHouseMaterials(fullname);
                console.log(argv);
            }
      
        );
yargs.help();
yargs.parse(); 
        
    
        yargs.command(
            
            "calc-house-materials",
    
            "Calculate stuff about the house",
    
            // define the parameters we need for our command
            {
                width: {
                    type: "number",
                    alias: "w",
                    description: "The width of the house",
                },
    
                length: {
                    type: "number",
                    alias: "l",
                    description: "The length of the house",
                },
    
                isfeet: {
                    type: "string",
                    alias: "yes",
                    description: "is feet?",
                },
    
                name:{
                    type: "string",
                    alias: "n",
                    description: "the name of the house",
                },
            },
    
            function (
                args: Arguments<{
                    width: number;
                    length: number;
                    isfeet: string;
                    name: string;
                    w: number;
                    l: number;
                    yes: string;
                    n:string;
    
                }>
            ) 
          
            {          
                console.log(argv);

                calcHouseMaterials(name, width, length, isfeet )

            }
      
      
            );
    
yargs.help();
yargs.parse(); 











































/*


const length:number = argv.lol;
const width:number = argv.kek;
const nom:string = argv.krek;

//node dist/index.js --lol=5 --ke=10 --krek=20

console.log(length, width, nom)


const l = 22;
const w = 24;
const nome = "Old Yeller";

function testOne(_length:number, _width:number, _name:string) {}



yargs.command({
    command : '',
    describe: "crashing this plane.",
    handler : function() {
        console.log("\nAdding a New Note!\n");
    }
})















//I mean I can write the functions for the calculator could use.
//Export, Import
//A shorter technical documentation.
//some tests as well. :I



//now it's cool you can pass it in. 
    //it's less cool that you can't do anything with it.




//const length = argv.length;
//console.log(length)














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





































