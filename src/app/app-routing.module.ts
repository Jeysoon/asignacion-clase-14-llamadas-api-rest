import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DogsContainerComponent } from 'src/app/components/dogs-container/dogs-container.component';

const routes: Routes = [
{path: '', component: DogsContainerComponent, pathMatch: 'full'},
{path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
