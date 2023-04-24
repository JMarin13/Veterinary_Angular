import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainComponent } from './main/main.component';
import { VirtualStoreComponent } from './virtual-store/virtual-store.component';

const routes: Routes = [
  { path: '', component: MainComponent },
  { path: 'virtual-store', component: VirtualStoreComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
