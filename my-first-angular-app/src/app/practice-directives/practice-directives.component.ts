import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-practice-directives',
  templateUrl: './practice-directives.component.html',
  styleUrls: ['./practice-directives.component.css']
})
export class PracticeDirectivesComponent implements OnInit {
  detailsDisplayedDivisibleByTwo = false;
  detailsDisplayed = 0;
  detailsDisplayClicks = [];

  constructor() {
    this.changeDetailsDisplayed();
  }

  ngOnInit() {
  }

  /**
   * Changes the details displayed. Increases it.
   * Calls for determining if it is divisible by two.
   * Function gets called from inside of the class.
   */

  changeDetailsDisplayed(){
    this.detailsDisplayed ++;
    this.determineDetailsDisplayedDivisibleByTwo();
  }

  /**
   * Determines if the details divisible is divisible
   * by two.
   * Function gets called from inside of the class.
   */

  determineDetailsDisplayedDivisibleByTwo(){
    this.detailsDisplayedDivisibleByTwo = this.detailsDisplayed % 2 === 0;
  }

  /**
   * Gets called from the template,
   * whenever the button is clicked.
   */

  onDetailsDisplayed(){
    this.detailsDisplayClicks.push(new Date());
    this.changeDetailsDisplayed();
  }
}
