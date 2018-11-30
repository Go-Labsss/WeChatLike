import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { TabsPage } from './tabs.page';
import { ChatsPage } from '../chats/chats.page';
import { ContactsPage } from '../contacts/contacts.page';
import { DiscoverPage } from '../discover/discover.page';
import { MePage } from '../me/me.page';


const routes: Routes = [
  {
    path: 'tabs',
    component: TabsPage,
    children: [
      {
        path: '',
        redirectTo: '/tabs/(chats:chats)',
        pathMatch: 'full',
      },
      {
        path: 'chats',
        outlet: 'chats',
        component: ChatsPage
      },
      {
        path: 'contacts',
        outlet: 'contacts',
        component: ContactsPage
      },
      {
        path: 'discover',
        outlet: 'discover',
        component: DiscoverPage
      },
      {
        path: 'me',
        outlet: 'me',
        component: MePage
      }
    ]
  },
  {
    path: '',
    redirectTo: '/tabs/(chats:chats)',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TabsPageRoutingModule {}
