import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';

const routes: Routes = [
  {path: "", component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'fromEvent', component: FromEventComponent}
  ]}
  // {path: "promise"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
