import { IonicModule } from '@ionic/angular';
import { RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { TabsPageRoutingModule } from './tabs.router.module';

import { TabsPage } from './tabs.page';
import { ChatsPageModule } from '../chats/chats.module';
import { ContactsPageModule  } from '../contacts/contacts.module';
import { DiscoverPageModule } from '../discover/discover.module';
import { MePageModule } from '../me/me.module';

@NgModule({
  imports: [
    IonicModule,
    CommonModule,
    FormsModule,
    TabsPageRoutingModule,
    ChatsPageModule,
    ContactsPageModule,
    DiscoverPageModule,
    MePageModule
  ],
  declarations: [TabsPage]
})
export class TabsPageModule {}
