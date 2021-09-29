class User {

    constructor(id,nume,prenume,anulNasterii,tara){
        this.id = id;
        this.nume = nume;
        this.prenume = prenume;
        this.anulNasterii = anulNasterii;
        this.tara = tara;

        this.createHTML;
    }

    printText = () => {
        let text = "";

        text += "Nume: " + this.nume + "; Prenume: " + this.prenume + "; Anul Nasterii: " + this.anulNasterii + "; Tara: " + this.tara;

        return text;
    }

    createHTML = () => { 
        
        let card = `
    <div class="card">
        <h3>${this.nume} ${this.prenume}</h3>
        <p>Born in: ${this.anulNasterii}</p>
        <p>Country: ${this.tara}</p>
    </div>
     `;

     return card;
    } 

} 


export default User;