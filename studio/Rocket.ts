import { Astronaut } from "./Astronaut";
import { Cargo } from "./Cargo";
import { Payload } from "./Payload";

export class Rocket implements Payload {
    massKg: number;
    name: string;
    totalCapacityKg: number;
    cargoItems: Cargo[] = [];
    astronauts: Astronaut[] = [];
    constructor(name: string, totalCapacityKg: number){
        this.name = name;
        this.totalCapacityKg = totalCapacityKg;
    }

    sumMass(items: Payload[]): number{
        for(let i = 0; i < items.length; i++){
            let totalKg: number = 0;
            totalKg += items[i].massKg;
            return totalKg;
        }

    }

    currentMassKg(): number{
        let currentMass: number = 0;
        currentMass += this.sumMass(this.astronauts) + this.sumMass(this.cargoItems);
        return currentMass;
    }

    canAdd(item: Payload): boolean{
        return this.currentMassKg() + item.massKg <= this.totalCapacityKg;
     }
    
    addCargo(cargo: Cargo): boolean{
        if(this.canAdd(cargo)){
            this.cargoItems.push(cargo);
            return true;
        } 
        return false;
    }
    addAstronaut(astronaut: Astronaut): boolean{
        if(this.canAdd(astronaut)){
            this.astronauts.push(astronaut);
            return true;
        }
        return false;
    }
}