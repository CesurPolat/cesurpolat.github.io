import { Routes } from '@angular/router';
import { PROJECTS } from './data/projects';
import { HomeComponent } from './features/home/home';
import { ProjectDetailComponent } from './features/project-detail/project-detail';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  ...PROJECTS.map((project) => ({
    path: `projects/${project.slug}`,
    component: ProjectDetailComponent,
    data: { projectSlug: project.slug }
  })),
  { path: '**', redirectTo: '' }
];
