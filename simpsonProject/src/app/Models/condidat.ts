export class Condidat {
  public id: number;
  public prenom: string;
  public nom: string;
  public age: number;
  public proffession: string;
  public image: string;

constructor(id: number, prenom: string, nom: string ,age: number , proffession: string , image: string) {
    this.id = id;
    this.prenom = prenom;
    this.nom = nom;
    this.age = age;
    this.proffession = proffession;
    this.image = image;
  }
}

