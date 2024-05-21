import { Routes } from '@angular/router';
import { PageNotFoundComponent } from './pages/page-not-found/page-not-found.component';
import { AlbumComponent } from './pages/album/album.component';
import { ObtainSheetsComponent } from './pages/obtain-sheets/obtain-sheets.component';

export const routes: Routes = [
  { path: 'album',component: AlbumComponent},
  { path: 'sheets',component: ObtainSheetsComponent},
  { path: '', redirectTo: '/album', pathMatch: 'full' },
  { path: '**', component: PageNotFoundComponent }
];
