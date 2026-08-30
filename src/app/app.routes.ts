import { Routes } from '@angular/router';
import { Skills} from './components/skills/skills';
import { Content } from './components/content/content';
import { Contato } from './components/contato/contato';
import { Experiencia } from './components/experiencia/experiencia';
import { Projetos } from './components/projetos/projetos';
import { Formacao } from './components/formacao/formacao';

export const routes: Routes = [
    { path: '', redirectTo: 'home', pathMatch: 'full' },
    {path:"skills", component: Skills},
    {path: "home", component:Content},
    {path : "contato", component:Contato},
    {path : "experiencia", component:Experiencia},
    {path : "projetos", component:Projetos},
    {path : "formacao", component:Formacao},
    { path: '**', redirectTo: 'home' },
];
