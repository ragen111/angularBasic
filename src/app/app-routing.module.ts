import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ChooseMainComponent } from './components/choose-main/choose-main.component';
import { ResultMainComponent } from './components/result-main/result-main.component';
const routes: Routes = [
  {
    path:'',component:ChooseMainComponent
  },
  {
    path:'result',component:ResultMainComponent
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
