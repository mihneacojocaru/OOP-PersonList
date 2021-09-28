
import User from "../model/people.js";

class ControllUser {


    constructor(){

        this.list = [];

        this.read();

    }

    read = () => {
        
        let i = 1;

        while(localStorage.getItem(i)){

            let object = localStorage.getItem(i);

            object = JSON.parse(object);

            this.list.push(new User(object.id, object.nume, object.prenume, object.anulNasterii, object.tara));

            i++;
        }

    }

    consoleLog = () => {
        this.list.forEach (el => {
            console.log(el.printText());
        })
    }

    createHTML = () => { 
        
        let cont = document.getElementById('main');
        cont.innerHTML = "";
        this.list.forEach( el => {
            let card = `
    <div class="card">
        <h3>${el.nume} ${el.prenume}</h3>
        <p>Born in: ${el.anulNasterii}</p>
        <p>Country: ${el.tara}</p>
    </div>
     `;
     cont.innerHTML += card;
    })
    } 

    createCard = (nume, prenume, an, tara) => {
        let card = "";
    }


}

export default ControllUser;