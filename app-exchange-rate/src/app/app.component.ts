import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'app-exchange-rate';
  form: FormGroup = new FormGroup({
    currencyInput: new FormControl('', [Validators.required]),
    amountInput: new FormControl('', Validators.required),
    currencyOutput: new FormControl('', Validators.required)
  });

  currencyList =  [
    {
      "name": "PEN S/. - Peruvian Nuevo Sol",
      "value": 1
    },
    {
      "name": "USD $ - US Dollar",
      "value": 2
    }
  ];
  
  ngOnInit(): void {

    this.form = new FormGroup({
      currencyInput: new FormControl('', [Validators.required]),
      amountInput: new FormControl('', Validators.required),
      currencyOutput: new FormControl('', Validators.required)
    });

  }

  submit(){

    console.log(this.form.value);

  }
}
