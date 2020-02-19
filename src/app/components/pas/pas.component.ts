import { Component, OnInit, Input, EventEmitter, Output } from '@angular/core';
import { PasService } from '../../services/pas.service';

import { Pas } from 'src/app/models/Pas';

@Component({
  selector: 'app-pas',
  templateUrl: './pas.component.html',
  styleUrls: ['./pas.component.css']
})
export class PasComponent implements OnInit {
  @Input() pas: Pas;
  @Output() deletePas: EventEmitter<Pas> = new EventEmitter();

  constructor(private pasService:PasService) { }

  ngOnInit() {
  }

  setClasses() {
    let classes = {
      pas: true,
      'is-complete': this.pas.vakcinisan
    }

    return classes;
  }

  onToggle(pas) {

    pas.vakcinisan = !pas.vakcinisan;
    this.pasService.toggleCompleted(pas).subscribe(pas => console.log(pas));
  }

  onDelete(pas) {
    this.deletePas.emit(pas);
  }

}