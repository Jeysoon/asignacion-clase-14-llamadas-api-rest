import { Component, OnInit } from '@angular/core';
import { DogService } from 'src/app/services/dog.service';
import { BreakpointObserver, BreakpointState } from '@angular/cdk/layout';
import { filter, map, Observable, tap } from 'rxjs';

export interface Dog {
  image: string;
  breed: string;
  name: string;
  weight: string;
  height: string;
  size: string;
}

@Component({
  selector: 'app-dogs-container',
  templateUrl: './dogs-container.component.html',
  styleUrls: ['./dogs-container.component.css'],
})
export class DogsContainerComponent implements OnInit {
  dogs$: Observable<Dog[]>;
  columns: number = 3;
  sizes: string[] = [];
  hel:any;
  constructor(private dogService: DogService, private breakpointObserver: BreakpointObserver) {
    // detect screen size changes
    this.breakpointObserver.observe([
      "(max-width: 500px)"
    ]).subscribe((result: BreakpointState) => {
      console.log('result', result);
      if (result.matches) {
          // hide stuff
          this.columns = 1
      } else {
          // show stuff
          this.columns = 3
      }
    });
    this.dogs$ = this.dogService.getDogsFromBehaviorSubject();
    this.dogService.getDogsFromBehaviorSubject().subscribe((data) => {
      this.hel = data;
    })

  }

  ngOnInit() {

  //  this.dogService.getDogs().subscribe((dog: any) => console.log('Dog', dog))
  }
}
