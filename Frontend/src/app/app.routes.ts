import { Routes } from '@angular/router';
import { HomeComponent } from './features/home/components/home/home.component';
import { ChampionsComponent } from './features/champions/component/champions/champions.component';
import { ItemsComponent } from './features/items/component/items/items.component';

export const routes: Routes = [
    {path:'',component: HomeComponent},
    {path:'champions',component:ChampionsComponent},
    {path:'items', component:ItemsComponent}
];
