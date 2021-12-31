export class Personne {
  id: number;
  names: string;
  firstname: string;
  path: string;
  diplome: string;
  job: string;
  resumer:string;


  constructor(id = 0,names='',firstname='',path='',diplome='',job='',resumer='') {
    this.id=id;
    this.names=names;
    this.firstname=firstname;
    this.path=path;
    this.diplome=diplome;
    this.job=job;
    this.resumer=resumer;
  }

}
