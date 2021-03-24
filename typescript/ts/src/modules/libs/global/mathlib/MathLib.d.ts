/* Way 1  */
// declare module MathLib { 
//    export class Calculator { 
//       doSum(limit:number) : number; 
//    }
// }

/* Way 2  */
declare namespace MathLib {
   class Calculator {
      doSum(limit: number): number;
   }
}