import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components.component';
import { HeaderComponent } from '../../components/header/header.component';
import { FooterComponent } from '../../components/footer/footer.component';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import { DogsContainerComponent } from './dogs-container/dogs-container.component';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatCardModule } from '@angular/material/card';
import { SizeSelectorComponent } from './size-selector/size-selector.component';
import {MatSelectModule} from '@angular/material/select';
@NgModule({
  imports: [
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    MatGridListModule,
    MatCardModule,
    MatSelectModule

  ],
  declarations: [
    ComponentsComponent,
    HeaderComponent,
    FooterComponent,
    DogsContainerComponent,
    SizeSelectorComponent
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DogsContainerComponent,
    SizeSelectorComponent
  ]
})
export class ComponentsModule { }
