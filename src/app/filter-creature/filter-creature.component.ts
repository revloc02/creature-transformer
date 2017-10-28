import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-filter-creature',
  templateUrl: './filter-creature.component.html',
  styleUrls: ['./filter-creature.component.css']
})
export class FilterCreatureComponent implements OnInit {
  value = 'Search...';
  values = '';
  constructor() { }

  ngOnInit() {
  }
  onKey(value: string) {
    this.values += value + ' | ';
  }
  onfocus() {
    this.value = 'forest';
  }
}
