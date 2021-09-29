
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

    updateAnulNasterii(nume,prenume,anulNasterii){
        this.list.forEach( e => {
            if(e.nume == nume && e.prenume == prenume){
                e.anulNasterii = anulNasterii;
            }
        });
    }

    updateTara(nume, prenume, tara){

        this.list.forEach(e => {

            if(e.nume == nume && e.prenume == prenume){
                e.tara = tara;
            }

        })
    }

    deleteElement(id){

        let x = this.list.filter( e => e.id != id);

        this.list.clear;

        this.list =[...x];

    }

    save = () => {
        localStorage.clear();

        this.list.forEach( e => {

            localStorage.setItem(e.id, JSON.stringify(e));
        });
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