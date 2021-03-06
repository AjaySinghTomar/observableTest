import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { promise } from 'protractor';
import { AppComponent } from './app.component';
import { HeaderComponent } from './include/header/header.component';
import { FromEventComponent } from './observable/from-event/from-event.component';
import { IntervalComponent } from './observable/interval/interval.component';
import { ListComponent } from './observable/list/list.component';
import { ObservableComponent } from './observable/observable.component';
import { OfFromComponent } from './observable/of-from/of-from.component';
import { ToArrayComponent } from './observable/to-array/to-array.component';
import { PromiseComponent } from './promise/promise.component';

const routes: Routes = [
  {path: "", component: PromiseComponent},
  {path: "promise", component: PromiseComponent},
  {path: "observable", component: ObservableComponent, children: [
    {path: '', component: ListComponent},
    {path: 'fromEvent', component: FromEventComponent},
    {path: 'interval', component: IntervalComponent},
    {path: 'ofFrom', component: OfFromComponent},
    {path: 'toArray', component: ToArrayComponent}
  ]}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
