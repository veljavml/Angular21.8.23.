import { Component } from '@angular/core';
import { MatTable, MatTableDataSource } from '@angular/material/table';
import { Proizvod } from 'src/app/model/proizvod';
import { ProizvodService } from 'src/app/services/proizvod.service';

@Component({
  selector: 'app-prikaz',
  templateUrl: './prikaz.component.html',
  styleUrls: ['./prikaz.component.css']
})
export class PrikazComponent {

  constructor(private servis:ProizvodService){}

  ngOnInit(): void {
    this.servis.uciajProizvode().subscribe((podatak=>{
      console.log(podatak);
      this.dataSource.data=podatak;
    }))
  }

  dataSource = new MatTableDataSource<Proizvod>();
  displayedColumns: string[] = ['id', 'naziv', 'boja', 'cena','kategorija','datumKreiranja','slika','brisanje'];

  obrisiProizvod(id:number){
    
    if(confirm("Da li ste sigurni da zelite da obrisete proizvod?"))
    {
      this.servis.obrisiProizvod(id);
    }
    else{
      console.log("Niste obrisali proizvod");
    }
    
  }


  filter(event: any) {
    if (!event.target.value)
   return;
    this.dataSource.filter = event.target.value.trim().toLowerCase()
    }

}
