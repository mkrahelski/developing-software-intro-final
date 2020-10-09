const posts = 3.5; //3.5 inches wide.
//posts exists every 8 feet, 


//each function is made up of necessary operand
//each input is considered to be in feet




export function calcPosts(length:number, width:number){


//though technically for the amount of posts we don't need to inner wall. We just need to know how long they are.


    const postsTot = (Math.ceil(length)) + (Math.ceil(width))

    return postsTot

}