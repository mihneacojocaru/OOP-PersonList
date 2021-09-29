import ControllUser from "../controller/readPeople.js";
import readPeople from "../controller/readPeople.js";

class ViewMain{

    constructor(){

        this.readPeople = new ControllUser();

        this.container = document.querySelector(".container");

        this.header = document.createElement("header");

        this.container.appendChild(this.header);

        this.setHeader();

        this.main = document.createElement('main');

        this.container.appendChild(this.main);

        this.setMain();

    }


    setHeader = () => {
        let h1 = document.createElement('h1');
        h1.textContent = "OOP TEMA 2 People List";
        this.header.appendChild(h1);
    }

    setMain = () => {

        let card = "";

        this.readPeople.list.forEach(e => {
            card += e.createHTML();
        })

        this.main.innerHTML = card;
    }

}

export default ViewMain;