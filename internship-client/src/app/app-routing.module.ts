import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { TableCssComponent } from './components/table-css/table-css.component';
import { TableFlexComponent } from './components/table-flex/table-flex.component';

const routes: Routes = [ {
  path: '',
  component: HomePageComponent
},
{
  path: 'table-css',
  component: TableCssComponent
},
{
  path: 'table-flex',
  component: TableFlexComponent
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
