import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class Example {
  onClickAlertservice(data: string) {
    alert('helloww......' + data);
  }
}
