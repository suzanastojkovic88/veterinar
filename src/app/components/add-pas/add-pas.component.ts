import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-add-pas',
  templateUrl: './add-pas.component.html',
  styleUrls: ['./add-pas.component.css']
})
export class AddPasComponent implements OnInit {
  @Output() addPas: EventEmitter<any> = new EventEmitter();

  ime:string;
  rasa:string

  constructor() { }

  ngOnInit() {
  }

  onSubmit() {
    const pas = {
      ime: this.ime,
      rasa: this.rasa,
      vakcinisan: false
    }

    this.addPas.emit(pas);
  }

}
