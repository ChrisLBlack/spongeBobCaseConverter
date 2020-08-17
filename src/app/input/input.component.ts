import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  private textInput: string = '';
  private textOutput: string = '';

  makeSpongBobCase(input: string): void{
    let spCaseString: any = input.toLowerCase().split('');
    spCaseString = spCaseString.map((x, i) => {
      if(i % 2 === 0) {
        x = x.toUpperCase();
      }
      else {
        x = x.toLowerCase();
      }
      return x; 
    });
    input = spCaseString.join("");
    this.textOutput = input;
  }
}
