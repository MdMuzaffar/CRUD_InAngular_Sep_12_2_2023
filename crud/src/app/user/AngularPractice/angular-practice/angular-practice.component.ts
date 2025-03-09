import { Component, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-angular-practice',
  templateUrl: './angular-practice.component.html',
  styleUrls: ['./angular-practice.component.css'],
  // schemas: [NO_ERRORS_SCHEMA],
})
export class AngularPracticeComponent {
  course = [1, 2];

  searchText: string = '';
}
