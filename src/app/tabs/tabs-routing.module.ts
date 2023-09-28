import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TabsPage } from './tabs.page';

const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: 'tab1',
        loadChildren: () =>
          import('../tab1/tab1.module').then((m) => m.Tab1PageModule),
      },
      {
        path: 'tab2',
        loadChildren: () =>
          import('../tab2/tab2.module').then((m) => m.Tab2PageModule),
      },
      {
        path: 'tab3',
        loadChildren: () =>
          import('../tab3/tab3.module').then((m) => m.Tab3PageModule),
      },
      {
        path: 'materias',
        loadChildren: () =>
          import('../materias/materias.module').then(
            (m) => m.MateriasPageModule
          ),
      },
      {
        path: 'editarmateria/:id',
        loadChildren: () =>
          import('../editarmateria/editarmateria.module').then(
            (m) => m.EditarmateriaPageModule
          ),
      },
      {
        path: 'nuevamateria',
        loadChildren: () =>
          import('../nuevamateria/nuevamateria.module').then(
            (m) => m.NuevamateriaPageModule
          ),
      },
      {
        path: 'estudiantes',
        loadChildren: () =>
          import('../estudiantes/estudiantes.module').then(
            (m) => m.EstudiantesPageModule
          ),
      },
      {
        path: 'editarestudiante/:id',
        loadChildren: () =>
          import('../editarestudiante/editarestudiante.module').then(
            (m) => m.EditarestudiantePageModule
          ),
      },
      {
        path: 'nuevoestudiante',
        loadChildren: () =>
          import('../nuevoestudiante/nuevoestudiante.module').then(
            (m) => m.NuevoestudiantePageModule
          ),
      },
      {
        path: 'estudiantesmaterias/:id',
        loadChildren: () =>
          import('../estudiantesmaterias/estudiantesmaterias.module').then(
            (m) => m.EstudiantesmateriasPageModule
          ),
      },
      {
        path: '',
        redirectTo: '/tabs/tab1',
        pathMatch: 'full',
      },
    ],
  },
  {
    path: '',
    redirectTo: '/tabs/tab1',
    pathMatch: 'full',
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
})
export class TabsPageRoutingModule {}
