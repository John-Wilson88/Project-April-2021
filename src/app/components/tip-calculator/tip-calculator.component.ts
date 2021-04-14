import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tip-calculator',
  templateUrl: './tip-calculator.component.html',
  styleUrls: ['./tip-calculator.component.css']
})
export class TipCalculatorComponent implements OnInit {

  billAmount = 0;
  tipPercentage = 0.2;
  tipAmount = 0;
  totalToBePaid = 0;

  constructor() { }

  ngOnInit(): void {
  }

  changeTipPercentage(percentage: number): void {
    this.tipPercentage = percentage;
    this.updateTheStuff();
  }
  updateBillAmount(amountEl: HTMLInputElement): void {
    this.billAmount = amountEl.valueAsNumber;
    this.updateTheStuff();
  }
  updateTheStuff() {
    this.tipAmount = this.billAmount * this.tipPercentage;
    this.totalToBePaid = this.tipAmount + this.billAmount;
  }
}
