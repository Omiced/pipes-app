import { Component } from '@angular/core';

@Component({
  selector: 'app-basics-page',
  templateUrl: './basics-page.component.html',
  styleUrls: ['./basics-page.component.css'],
})
export class BasicsPageComponent {
  public nameLower: string = 'josue cano';
  public nameUpper: string = 'JOSUE CANO';
  public nameTitle: string = 'jOsUe CanO';

  public customDate: Date = new Date();
}
