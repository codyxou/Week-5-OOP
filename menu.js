//create Animal class with Name and Type parameters

class Animal {
    constructor(name, animalType){
        this.name = name;
        this.animalType = animalType;
    }
    describe(){
        return `${this.name} is a ${this.type}.`;
    }
}

//Class to create Rescues and empty array for animals that belong to that Rescue

class Rescue {
    constructor(name){
        this.name = name;
        this.animals = []; 
    }

    addAnimal(animal){
        if (animal instanceof Animal){
            this.animals.push(animal);
        }else {
            throw new Error (`Something unexpected happened. Please try again.`);
        }
    }

    describe(){
        return `${this.name} has ${this.animals.length} animals.`
    }
}



class MainMenu {
    constructor(){
        this.rescues=[];
        this.selectedRescue = null;
    }

//Main Menu options

    start(){
        let selection = this.mainMenuOptions();
        while(selection != 0){
            switch(selection){
            case '1':
                this.createRescue();
                break;
            case '2':
                this.viewRescue();
                break;
            case '3':
                this.deleteRescue();
                break;
            case '4':
                this.displayRescues();
            default:
                selection =0;
        }
        selection = this.mainMenuOptions();
    }
    alert(`Thanks for rescuing!`);
}

mainMenuOptions(){
    return prompt(`
    0) Exit
    1) Add New Rescue
    2) View a Rescue
    3) Delete a Rescue
    4) See all Rescues
    
    `);
}

animalMenuOptions(animalInfo){
    return prompt (`
    0) Back
    1) Add Animal
    2) Remove Animal
    ---------------------------
    ${animalInfo}
    `);

}
//Menu Functions - View, Create, Delete 

viewRescue(){
    let index = prompt (`Enter the index of the Rescue you would like to view.`);
    if (index >-1 && index < this.rescues.length){
        this.selectedRescue = this.rescues[index];
        let description = 'Rescue Name: ' + this.selectedRescue.name + '\n';

        for (let i=0; i<this.selectedRescue.animals.length; i++){
            description += i + '| ' + this.selectedRescue.animals[i].name + ' - ' + this.selectedRescue.animals[i].animalType + '\n'
        }

        let selection = this.animalMenuOptions(description);
        switch(selection){
            case '1':
                this.addAnimal();
                break;
            case '2':
                this.removeAnimal();
        }
    }
}

//Added alerts to most functions to give someone confirmation that their command was complete.

displayRescues(){
    let rescueName = '';
    for (let i = 0; i< this.rescues.length; i++){
        rescueName += i + '| ' + this.rescues[i].name + '\n';
    }
    alert(rescueName);
}

createRescue(){
    let name = prompt(`What is the name of the Rescue?`);
    this.rescues.push(new Rescue(name));
    alert(`${name} has been added to database!`)
}

addAnimal(){
    let name = prompt(`What is the name of the animal?`);
    let animalType = prompt(`What kind of animal?`);
    this.selectedRescue.animals.push(new Animal(name, animalType));
    alert(`${name} has been added!`)
}

deleteRescue(){
    let index = prompt (`Enter the index of the Rescue you would like to remove from the database.`);
    if (index > -1 && index < this.rescues.length){
        this.rescues.splice(index, 1);
    }
    alert(`The rescue has been deleted.`);
}

removeAnimal(){
    let index = prompt (`Enter the index of the Animal you would like to remove from the database.`);
    if (index> -1 && index < this.selectedRescue.animals.length){
        this.selectedRescue.animals.splice(index,1);
    }
    alert(`Animal has been removed from database. Thanks for adopting!`);
}
}
let menu = new MainMenu()
menu.start();




