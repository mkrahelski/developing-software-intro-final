export interface outPutGeraldsExample {
    name: string,
     house : {
         width : number,
         length : number,
         outsideWallArea : number,
         insideWallArea : number,
         ceilingArea : number
    },
     materials : {
         lumber : {
            TwoByFour : number,
            FourByFour : number
        },
         plywood : {
             fourByEight : number
        },
         drywall : {
             fourByEight : number 
        }
    },
     waste : {
         lumber : {
             TwoByFour : number,
             FourByFour : number,
        },
         plywood : {
             FourByEight : number,
        },
         drywall : {
             FourByEight : number,
        }
    },
     purchase : {
         lumber : {
             TwoByFour : number,
             FourByFour : number,
        },
         plywood : {
             FourByEight : number,
        },
         drywall : {
            FourByEight : number,
        }
    }
}


