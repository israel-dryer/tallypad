import { Component } from '@angular/core';
import {
  IonHeader,
  IonToolbar,
  IonTitle,
  IonContent,
  IonList,
  IonItem,
  IonLabel,
  IonIcon,
  IonNote,
  IonAvatar,
  IonRippleEffect
} from '@ionic/angular/standalone';
import { addIcons } from 'ionicons';
import { chevronForward } from 'ionicons/icons';
import { version } from '../../../package.json';

interface LauncherApp {
  id: string;
  name: string;
  description: string;
  icon: string;
  url: string;
}

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
  imports: [
    IonHeader,
    IonToolbar,
    IonTitle,
    IonContent,
    IonList,
    IonItem,
    IonLabel,
    IonIcon,
    IonNote,
    IonAvatar,
    IonRippleEffect
  ],
})
export class HomePage {
  version = version;
  apps: LauncherApp[] = [
    {
      id: 'catan-dice',
      name: 'Catan Dice',
      description: 'Dice roller and stats tracker for Catan',
      icon: 'assets/launcher-icons/catan-dice.png',
      url: 'https://catandice.tallypad.net'
    }
  ];

  constructor() {
    addIcons({ chevronForward });
  }

  launchApp(app: LauncherApp): void {
    window.location.href = app.url;
  }
}
