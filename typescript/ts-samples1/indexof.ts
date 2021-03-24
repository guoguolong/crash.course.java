(function () {
    function pluck<T, K extends keyof T>(obj: T, names: K[]): T[K][] {
        const m = 'abc'
        return names.map(name => obj[name])
    }

    interface Person {
        name: string;
        age?: number;
    }

    // class PX implements Person {
    //     public name:string = 'Allen';
    //     public age:number = 23;
    //     private age2:number = 1323;
    //     constructor() {
    //         console.log(this.age2)
    //     }
    // }
    // const p = new PX;
    const person: Person = {
        name: 'Allen',
        age: 23
    }
    person.name = 'Koda';
    const ret = pluck(person, ['name', 'age']);
    console.log(ret)
})()
