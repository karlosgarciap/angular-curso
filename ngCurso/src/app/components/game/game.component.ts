import { Component, OnInit } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ActivatedRoute, Router} from "@angular/router";
import {PaisService} from "../../pais.service";

@Component({
  selector: 'app-game',
  templateUrl: './game.component.html',
  styleUrls: ['./game.component.css']
})
export class GameComponent implements OnInit {

  pais: any = {};
  answers: any[] = [];
  numberOfQuestions: number = 0;
  rightAnswers: number = 0;
  accuracy: number = 0;

  constructor(private http: HttpClient, private router: Router,
              private activatedRoute: ActivatedRoute,
              private paisService: PaisService) {

      this.paisService.getRandomPais().subscribe(
          (resp: any) => {
              this.pais = resp[Math.floor(Math.random() * resp.length)];
              console.log(this.pais);
              this.answers.push(this.pais.capital);
          }
      );

      this.paisService.getRandomPais().subscribe(
          (resp: any) => {
              let i = 0;
              for (i = 0; i < 2; i++) {
                  this.answers.push(resp[Math.floor(Math.random() * resp.length)].capital);
              }

              console.log(this.answers);
              this.answers = this.answers.sort(function() {return Math.random() - 0.5});
              console.log(this.answers);
          }
      );

  }

  ngOnInit() {
  }

    testAnswer(answer, rightAnswer) {
        this.numberOfQuestions ++;
        (answer === rightAnswer) ? this.rightAnswers++ : console.log('error');

        this.accuracy = Math.round(this.rightAnswers / this.numberOfQuestions * 100);
        this.router.navigate(['/game']);
        return false;
    }
}
