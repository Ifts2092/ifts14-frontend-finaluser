import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { CareerComponent } from './pages/career/career.component';
import { BlogComponent } from './pages/blog/blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BlogPageComponent } from './pages/blog-page/blog-page.component';
import { RequirementComponent } from './pages/requirement/requirement.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'carreras/:career', component: CareerComponent },
  { path: 'novedades', component: BlogComponent },
  { path: 'institucional/noticia/:id', component: BlogPageComponent },
  { path: 'institucional/:section', component: BlogComponent },
  { path: 'institucional/:section/:category', component: BlogComponent },
  { path: 'contacto', component: ContactComponent },
  { path: 'requisitos', component: RequirementComponent },
  { path: '**', component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
