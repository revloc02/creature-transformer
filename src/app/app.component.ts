import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'; // <-- NgModel lives here
import { Component, Input } from '@angular/core';
import { SearchPipe } from './app.search.pipe';
import { FilterCreatureComponent } from './filter-creature/filter-creature.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'app';
}

export class Item {
  id: number;
  text: string;
}

const ITEMS: Item[] = [
  { id: 11, text: 'Mr. Nice' },
  { id: 12, text: 'Narco' },
  { id: 13, text: 'Bombasto' },
  { id: 14, text: 'Celeritas' },
  { id: 15, text: 'Magneta' },
  { id: 16, text: 'RubberMan' },
  { id: 17, text: 'Dynama' },
  { id: 18, text: 'Dr IQ' },
  { id: 19, text: 'Magma' },
  { id: 20, text: 'Tornado' }
];
