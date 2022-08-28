let filip = { name: "FIlip",  age:27, city:"Novi Pazar",
    all() {
        `${this.name}  is ${this.age} from ${this.city}`
    }
}

let stefan = { name: "Stefan",  age:24,country: "Serbia",
    all() {
        `${this.name}  is ${this.age} from ${this.city}`
    }
}

let friends = {...filip, id:23, country: "Serbia"}

console.log(friends)