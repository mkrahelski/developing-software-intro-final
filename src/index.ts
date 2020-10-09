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
