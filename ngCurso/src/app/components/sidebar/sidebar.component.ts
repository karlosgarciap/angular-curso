import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {PaisService} from "../../pais.service";

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

  paises: any[] = [];
  constructor(private router: Router, private activatedRoute: ActivatedRoute, private paisService: PaisService) { }

  ngOnInit() {
  }

    search(region:string) {
        this.paises = this.paisService.getPaisesByRegion(region).subscribe(
            (resp: any) => {
                this.paises = resp;
            }
        );
        this.router.navigate(['/search', region]);
        return false;
    }

    buscar(str: string) {
        this.paises = this.paisService.getPaisesByString(str).subscribe(
            (resp: any) => {
                this.paises = resp;
            }
        );
        this.router.navigate(['/search', str]);
        return false;
    }
}
