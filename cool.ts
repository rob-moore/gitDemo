import { Cat } from "./cat";
import { Dog } from "./dog";

export interface CoolInterface {
    id: number;
    cats: Cat;
    dogs: Dog;
    title: string;
    items: Object;
}