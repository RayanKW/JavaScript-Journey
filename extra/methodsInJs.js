const person= {Name:"john",
               yearBorn: 1998,
            //method
            age: function getAge(){
                return 2020 - this.yearBorn;
            },
            greeting(){
                return `hello ${this.Name}`;
            },
            helloFunct: () => {
                return `Heeey my name is junior and I am,
                 12 years old`;

            }
        }
       document.body.innerHTML = `<p>The age is ${person.age()} <br> ${person.greeting()}<hr> <br>${person.helloFunct()}</p>`  