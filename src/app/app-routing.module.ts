import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SelectionComponent } from './components/selection/selection.component';
import { EditComponent } from './edit/edit.component';
import { HomeComponent } from './home/home.component';
import { SectionComponent } from './home/section/section.component';

const routes: Routes = [
  { path: '',component: HomeComponent},
  { path: 'selection',component: SelectionComponent},
  { path: 'edit',component: EditComponent},


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
