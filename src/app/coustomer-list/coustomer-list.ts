import { Component } from '@angular/core';
import { customer } from './coustomer';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-coustomer-list',
  imports: [NgForOf],
  templateUrl: './coustomer-list.html',
  styleUrl: './coustomer-list.css',
})
export class CoustomerList {
  coustomerSelect?: customer;

  customers: customer[] = [
    {
      customerNo: 'CUST-001',
      name: 'Nimal Perera',
      address: 'No. 45, Galle Road',
      city: 'Colombo',
      country: 'Sri Lanka',
      contactNo: 771234567,
    },
    {
      customerNo: 'CUST-002',
      name: 'Kamal Fernando',
      address: '12/3, Kandy Road',
      city: 'Kandy',
      country: 'Sri Lanka',
      contactNo: 772345678,
    },
    {
      customerNo: 'CUST-003',
      name: 'Saman Jayasinghe',
      address: '78, Main Street',
      city: 'Galle',
      country: 'Sri Lanka',
      contactNo: 775678912,
    },
    {
      customerNo: 'CUST-004',
      name: 'Dilani Wickramasinghe',
      address: '22/1, Temple Lane',
      city: 'Kurunegala',
      country: 'Sri Lanka',
      contactNo: 776543210,
    },
    {
      customerNo: 'CUST-005',
      name: 'Ruwan Silva',
      address: '15, Lake View Road',
      city: 'Negombo',
      country: 'Sri Lanka',
      contactNo: 778901234,
    },
  ];
}
