const createPet = function (name) {
    let sex;

    return {
        // setName(newName) is equivalent to setName: function (newName)
        // in this context
        setName(newName) {
            name = newName;
        },

        getName() {
            return name;
        },

        getSex() {
            return sex;
        },

        setSex(newSex) {
            if (
                typeof newSex === "string" &&
                (newSex.toLowerCase() === "male" || newSex.toLowerCase() === "female")
            ) {
                sex = newSex;
            }
        },
    };
};

const pet = createPet("Dog");
console.log(pet.getName()); // Dog

pet.setName("Oliver");
pet.setSex("male");
console.log(pet.getSex()); // male
console.log(pet.getName()); // Oliver