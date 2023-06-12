const human={
    firstName: "Anne",
    lastName: "Kira",
    age:20,
    intro:function(){
        console.log("Hello am " +this.firstName +" "+ this.lastName);
    },
    travel:function(){
        console.log(this.lastName+" will go to Zambia");
    }
}
console.log(human.firstName);
console.log(human['age']);
console.log(human);
human.intro()
human.travel()

//Another way to create an object.
const person= new Object();
person.firstName='Johnte';
person.age=23;
person.home="Uganda";
console.log(person);

const person2={
    greet: function(){
        console.log("Hello World. You are not ready for me");
    }

}
person2.greet();
person2.subtract = console.log(35-40);

function school(name){
    this.name=name
    console.log(this.name);
}
const Johnte = new school("Johnte")

const a = 32;
const b = "Anne";
const c = true
const object1 = {age:a, name:b, single:c}
console.log(object1);