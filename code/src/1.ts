
    {
        function formatString(input: string, toUpper?: boolean): string{
            if(toUpper === false){
                return input.toLowerCase();
            }
            else{
                return input.toUpperCase();
            }
          }
    
    
    
          
        function filterByRating(items: { title: string; rating: number }[]): { title: string; rating: number }[]{
            const filter=items.filter(books=>books.rating>=4)
            return filter;
         
        }
    
    
          
        function concatenateArrays<T>(...arrays: T[][]): T[]{
             return arrays.flat();
        }
    
    
    
    
    
    
        class Vehicle{    
            constructor( private make:string,private year:number) {}
           public getInfo(){
              console.log(`Make:${this.make},Year:${this.year}`);
            }
        }
        class Car extends Vehicle{
        
            constructor(make:string, year:number,private model:string ) {
                super(make,year);
                   
            }
            getModel() {
                console.log(`Model: ${this.model}`);
              }
        }
    
    
    
        
        function processValue(value: string | number):number {
            if(typeof value === "string"){
                return value.length;
             
            }
            else {
             return value*2;
            }
        }
    
    
    
    
        interface Product {
            name: string;
            price: number;
        }
        
        function getMostExpensiveProduct(products: Product[]): Product | null {
            if (products.length == 0) {
                console.log("This Array is Empty");
                return null;
            }
            else {
                return products.reduce((product,high)=>high.price>product.price?high:product);
            }
        }
    
    
    
    
    
        enum Day {
            Monday,
            Tuesday,
            Wednesday,
            Thursday,
            Friday,
            Saturday,
            Sunday
          }
          
          function getDayType(day: Day):string {
            if (day === Day.Saturday || day === Day.Sunday) {
              return "Weekend";
            }
            else{
                return "Weekday";
            }
          }
    
    
          async function squareAsync(n: number): Promise<number>{
            return new Promise((resolve,rejects)=>{
                setTimeout(()=>{
                    if(n<0){
                        rejects("The given number is negative")
                    }else{
                        resolve (n*n);
                    }
                }, 1000)
            })
        }
    
    
    
    
    }
