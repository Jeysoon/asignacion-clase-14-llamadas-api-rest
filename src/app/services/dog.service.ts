import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject, Observable, of, Subscriber } from 'rxjs';
import { Dog } from '../components/dogs-container/dogs-container.component';

@Injectable({
  providedIn: 'root'
})
export class DogService implements OnInit {
  localDogs: any;
_dogs = new BehaviorSubject([
  {
    image: 'https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723_960_720.jpg',
    breed: 'Bulldog',
    name: 'Buddy',
    weight: '40-50 lbs',
    height: '12-16 inches',
    size: 'Medium'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg',
    breed: 'Labrador',
    name: 'Luna',
    weight: '55-80 lbs',
    height: '21.5-24.5 inches',
    size: 'Big'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497__340.jpg',
    breed: 'Doberman',
    name: 'Duke',
    weight: '55-75 lbs',
    height: '21.5-24 inches',
    size: 'Big'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2017/07/24/15/07/akita-2534986__340.jpg',
    breed: 'Akita',
    name: 'Rocky',
    weight: '70-130 lbs',
    height: '24-28 inches',
    size: 'Medium'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2021/02/16/02/28/australian-6019636_960_720.jpg',
    breed: 'Australian Cattle Dog',
    name: 'Charlie',
    weight: '31-35 lbs',
    height: '17-20 inches',
    size: 'Medium'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2018/01/17/00/46/shiba-inu-3087207_960_720.jpg',
    breed: 'Shiba Inu',
    name: 'Rufus',
    weight: '17-23 lbs',
    height: '13.5-16.5 inches',
    size: 'Medium'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2023/01/24/13/17/animal-7741005_960_720.jpg',
    breed: 'Bichon Frise',
    name: 'Max',
    weight: '12-18 lbs',
    height: '9.5-11.5 inches',
    size: 'Small'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_960_720.jpg',
    breed: 'Corgi',
    name: 'Bailey',
    weight: '22-31 lbs',
    height: '10-12 inches',
    size: 'Small'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2010/12/13/10/20/beagle-puppy-2681_960_720.jpg',
    breed: 'Beagle',
    name: 'Oliver',
    weight: '18-30 lbs',
    height: '13-15 inches',
    size: 'Medium'
  },
  {
    image: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_960_720.jpg',
    breed: 'Poodle',
    name: 'Rosie',
    weight: '45-60 lbs',
    height: '15-20 inches',
    size: 'Small'
  },
]);

perros: any;
constructor() {
  this.localDogs = [
    {
      image: 'https://cdn.pixabay.com/photo/2014/12/10/05/50/english-bulldog-562723_960_720.jpg',
      breed: 'Bulldog',
      name: 'Buddy',
      weight: '40-50 lbs',
      height: '12-16 inches',
      size: 'Medium'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/02/19/15/46/labrador-retriever-1210559_960_720.jpg',
      breed: 'Labrador',
      name: 'Luna',
      weight: '55-80 lbs',
      height: '21.5-24.5 inches',
      size: 'Big'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2016/04/17/10/38/doberman-1334497__340.jpg',
      breed: 'Doberman',
      name: 'Duke',
      weight: '55-75 lbs',
      height: '21.5-24 inches',
      size: 'Big'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2017/07/24/15/07/akita-2534986__340.jpg',
      breed: 'Akita',
      name: 'Rocky',
      weight: '70-130 lbs',
      height: '24-28 inches',
      size: 'Medium'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2021/02/16/02/28/australian-6019636_960_720.jpg',
      breed: 'Australian Cattle Dog',
      name: 'Charlie',
      weight: '31-35 lbs',
      height: '17-20 inches',
      size: 'Medium'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2018/01/17/00/46/shiba-inu-3087207_960_720.jpg',
      breed: 'Shiba Inu',
      name: 'Rufus',
      weight: '17-23 lbs',
      height: '13.5-16.5 inches',
      size: 'Medium'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2023/01/24/13/17/animal-7741005_960_720.jpg',
      breed: 'Bichon Frise',
      name: 'Max',
      weight: '12-18 lbs',
      height: '9.5-11.5 inches',
      size: 'Small'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2020/03/31/19/20/dog-4988985_960_720.jpg',
      breed: 'Corgi',
      name: 'Bailey',
      weight: '22-31 lbs',
      height: '10-12 inches',
      size: 'Small'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2010/12/13/10/20/beagle-puppy-2681_960_720.jpg',
      breed: 'Beagle',
      name: 'Oliver',
      weight: '18-30 lbs',
      height: '13-15 inches',
      size: 'Medium'
    },
    {
      image: 'https://cdn.pixabay.com/photo/2019/02/06/15/18/puppy-3979350_960_720.jpg',
      breed: 'Poodle',
      name: 'Rosie',
      weight: '45-60 lbs',
      height: '15-20 inches',
      size: 'Small'
    },
  ];
 }
ngOnInit(): void {
  //Called after the constructor, initializing input properties, and the first call to ngOnChanges.
  //Add 'implements OnInit' to the class.

}
enviarPerros(){
return new Observable<Dog[]>((subscriptor: Subscriber<Dog[]>) => {
  subscriptor.next(this.localDogs);
})
}
getDogs(){
  return of(this.localDogs);
}
getDogsFromBehaviorSubject(){
  return this._dogs.asObservable();
}
}
