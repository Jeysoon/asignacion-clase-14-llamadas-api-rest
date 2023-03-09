import {
  Component,
  EventEmitter,
  OnDestroy,
  OnInit,
  Output,
} from '@angular/core';
import { MatSelectChange } from '@angular/material/select';
import { map, Subscription } from 'rxjs';
import { DogService } from 'src/app/services/dog.service';
import { Dog } from '../dogs-container/dogs-container.component';

@Component({
  selector: 'app-size-selector',
  templateUrl: './size-selector.component.html',
  styleUrls: ['./size-selector.component.css'],
})
export class SizeSelectorComponent implements OnInit, OnDestroy {
  sizes: string[] = [];
  allDogs: Subscription | undefined;
  filteredDogs: Subscription | undefined;
  @Output() dogs = new EventEmitter();
  constructor(private dogService: DogService) {
    this.dogService
      .getDogs()
      .pipe(
        map((dog: Dog[]) => {
          return dog.map((dog: Dog) => dog.size);
        })
      )
      .subscribe((data) => {
        this.sizes = [...new Set(['All', ...data])];
      });
  }

  ngOnInit() {
    const repeated = [
      'New Custom Attribute Untitled_4',
      'New Custom Attribute Untitled_4',
      'New Custom Attribute Untitled_3',
      'New Custom Attribute Untitled_1',
      'New Custom Attribute Untitled_2',
      'New Custom Attribute Untitled_1',
    ];
    console.log('repeated', repeated);
    const removeDuplicates = this.removeDuplicates(repeated);
    console.log('removeduPlicates', removeDuplicates);
    const unique = this.unique(repeated);
    console.log('unique', unique);
  }
   removeDuplicates(array : string[]){
    return [...new Set(array)];
    }

  unique(data:string[]){
     const newArr:string[] = [];
      data.forEach((item:string)=>{
        const found = newArr.indexOf(item);
        if(found === -1) newArr.push(item)
      })
      return newArr
    }
  ngOnDestroy(): void {
    this.allDogs?.unsubscribe();
    this.filteredDogs?.unsubscribe();
  }
  onSelect(event: MatSelectChange) {
    if (event.value === 'All') {
      this.allDogs = this.dogService.getDogs().subscribe((dogData) => {
        // console.log('dogDatonma', dogData);
        this.dogService._dogs.next(dogData);
      });
    } else {
      this.filteredDogs = this.dogService
        .getDogs()
        .pipe(
          map((dogs: Dog[]) => {
            // console.log('DOGS', dogs);
            return dogs.filter(
              (dog) => dog.size.toLowerCase() === event.value.toLowerCase()
            );
          })
        )
        .subscribe((dogData: any) => {
          // console.log('dogData', dogData);
          this.dogService._dogs.next(dogData);
          // this.dogs.emit(dogData);
        });
    }
  }
}
