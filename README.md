# Focus College ACSD Final

This respository is intended for the use of Focus College Students enrolled in the Advanced Certificate of Software Development located in Kelowna, BC and Surrey, BC.

---

You can remove everything below the above line once you're ready to edit this file.

## Getting Started

Please read the [Final Test Requirements](./assignment/readme.md)

---------------------
## __FEATURE TSC__

### READ to USE

This repository uses typescript.

To also know how to use typescript. Read the examples below.

To compile project. (which compiles index.ts in src folder dir)
Use the script below, and enter it into your terminal.
~~~~~
npm run compile
~~~~~
To run the compiled project.Use this different script!
~~~~~
npm run fun
~~~~~~
And last but not least if you want to do both compile and have fun. Use this script.
~~~~~~
npm run build
~~~~~~
-----------------------
---------------------
## __FEATURE ESLINT__

### READ to USE

To use lint read/follow the method shown below.

To lint, use the script below, and enter it into your terminal.
~~~~~
npm run lint
~~~~~~
To use lint during compiling and run time. Use the command below. The example is the instruction.
~~~~~~~
npm run build:devkit
~~~~~~~
---------------------
## __FEATURE Prettier__ 

### READ to USE

To use lint read/follow the method shown below.

To lint, use the script below, and enter it into your terminal.
~~~~~
npm run format
~~~~~
To use lint prettier as part of compiling and run time. Use the command below. The example is the instruction.
~~~~~~~
npm run build:devkit
~~~~~~~

--------------------- 
## __FEATURE Testing__ 

### READ to USE

To use testing functionality of mocha and chai read/follow the method shown below.

To test, use the script below, and enter it into your terminal.
~~~~~
npm run format
~~~~~
To use the testing functionality as part of compiling and run time. Use the command below. The example is the instruction.
~~~~~~~
npm run build:devkit
~~~~~~~
--------------------------

## __FEATURE Instabul Coverage__ 

### READ to USE

To use testing functionality of mocha and chai read/follow the method shown below.

To test with coverage, use the script below, and enter it into your terminal.
~~~~~~~~~
npm run nyc
~~~~~~~~~
-------------------------


## __Yargs__ 

### READ to USE

The commands written in yargs can be acessed using these two key words in the format listed below

~~~~~~
--get-house-materials 

--calc-house-materials
~~~~~~~~


Once inputted into the function --help flags can be used to determine paramaters on the fly.

-----

###  __--get-house-materials__

Description: generates a console.log of passed arguments, using one paramater name for it's outputs.

~~~~~
--name
//name paramater can be initialized with this keyword
//the complete expression would look like this.

--name "Jack."
--name "John Doe" //this is also fine.~~~~~~
~~~~~


### __--calc-house-materials__

Description: generates a console.log of passed arguments, using four parameters.


~~~~~
--length
--width
--isfeet
--name


//the complete expression would look like this.

--calc-house-materials --length 8 --width 8 --isfeet yes --name "Nolan Brown"
~~~~~

## Pre-use.
    -compile using npm run compile
    -preface each expression with 'node dist/index.js' without the quotes


------------------

### __Function calcHouseMaterials__

This function takes in 4 parameters. It gives back a console.log of arguments.
~~~~
    -name
    -width
    -length
    -is feet
~~~~

Possible errors. Currently none functional with yargs.

### __Function getHouseMaterials__

This function takes in 1 paramater name. It gives back a console.log of arguments

Ex.
~~~~~~~
--name "John
~~~~~~~~

Possible errors, none functional in current yargs but can be called otherwise in main index.