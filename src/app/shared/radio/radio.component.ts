import { Component, OnInit, Input } from '@angular/core';
import { RadioOption } from './radio-option.model';

@Component({
  selector: 'mt-radio',
  templateUrl: './radio.component.html'
})
export class RadioComponent implements OnInit {

  @Input() options: RadioOption[]

  constructor() { }

  value: any

  ngOnInit() {
  }

  setValue(value: any){
    this.value = value
  }

}
