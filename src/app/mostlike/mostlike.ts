import { NgFor } from '@angular/common';
import { Component } from '@angular/core';
import { Highlightarray } from '../CustomDirective/highlightarray';

@Component({
  selector: 'app-mostlike',
  imports: [NgFor, Highlightarray],
  templateUrl: './mostlike.html',
  styleUrl: './mostlike.css',
})
export class Mostlike {
  videoItems = [
    {
      name: 'Mountain Adventure',
      likes: 124,
      dislikes: 5,
      sheres: 32,
      imageUrl: 'https://picsum.photos/id/1018/400/300',
      discription: 'A thrilling mountain adventure with breathtaking views.',
    },
    {
      name: 'City Lights',
      likes: 98,
      dislikes: 12,
      sheres: 21,
      imageUrl: 'https://picsum.photos/id/1011/400/300',
      discription: 'Experience the vibrant city life illuminated at night.',
    },
    {
      name: 'Ocean Escape',
      likes: 156,
      dislikes: 7,
      sheres: 45,
      imageUrl: 'https://picsum.photos/id/1016/400/300',
      discription: 'Relax by the ocean with crystal-clear waters and calm waves.',
    },
    {
      name: 'Forest Walk',
      likes: 87,
      dislikes: 3,
      sheres: 18,
      imageUrl: 'https://picsum.photos/id/1020/400/300',
      discription: 'A peaceful walk through lush green forests and nature trails.',
    },
    {
      name: 'Desert Journey',
      likes: 65,
      dislikes: 9,
      sheres: 14,
      imageUrl: 'https://picsum.photos/id/1002/400/300',
      discription: 'An unforgettable journey across golden desert landscapes.',
    },
  ];

  mostLikeVedio = this.setMostLikeVedio();

  setMostLikeVedio() {
    let vedioarray = [...this.videoItems];

    return vedioarray.sort((first, second) => second.likes - first.likes)[0];
  }
}
