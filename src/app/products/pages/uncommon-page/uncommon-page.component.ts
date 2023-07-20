import { Component } from '@angular/core';
import { Observable, interval, tap } from 'rxjs';

@Component({
  selector: 'app-uncommon-page',
  templateUrl: './uncommon-page.component.html',
  styleUrls: ['./uncommon-page.component.css'],
})
export class UncommonPageComponent {
  // i18nselect
  public name: string = 'Fernando';
  public sex: 'male' | 'female' = 'male';
  public invitationMap = {
    male: 'invitarlo',
    female: 'invitarla',
  };
  changeCliente(): void {
    this.name = 'Karen';
    this.sex = 'female';
  }
  // i18plural

  public clients: string[] = [
    'Kira',
    'Peperra',
    'Dexter',
    'Josue',
    'Sebas',
    'Esa',
    'Benja',
  ];
  public clientsMap = {
    '=0': 'No tenemos ningun cliente esperanding',
    '=1': 'Tenemos un cliente esperanding',
    other: 'Tenemos # clientes esperanding',
  };

  deleteClient(): void {
    this.clients.shift();
  }

  // keyvalue pipe
  public person = {
    name: 'Josue',
    age: 29,
    address: 'Tecamac Mexico',
  };

  // async pipe
  public myObservableTimer: Observable<number> = interval(2000).pipe(
    tap((value) => console.log('Tap: ', value))
  );

  public promiseValue: Promise<string> = new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve('Tenemos data en la promesa');
    }, 3000);
  });
}
