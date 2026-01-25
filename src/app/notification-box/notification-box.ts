import { NgClass } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-notification-box',
  imports: [NgClass],
  templateUrl: './notification-box.html',
  styleUrl: './notification-box.css',
})
export class NotificationBox {
  notificationValue: boolean = false;

  closeNotification() {
    this.notificationValue = !this.notificationValue;
  }
}
