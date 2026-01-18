import { bootstrapApplication } from '@angular/platform-browser';
import { RouteReuseStrategy, provideRouter, withPreloading, PreloadAllModules } from '@angular/router';
import { IonicRouteStrategy, provideIonicAngular } from '@ionic/angular/standalone';
import { isDevMode, InjectionToken } from '@angular/core';
import { provideServiceWorker } from '@angular/service-worker';

export const APP_VERSION = new InjectionToken<string>('APP_VERSION');
import { initializeApp } from 'firebase/app';
import { getAnalytics } from 'firebase/analytics';

import { routes } from './app/app.routes';
import { AppComponent } from './app/app.component';
import { environment } from './environments/environment';

// Initialize Firebase
const firebaseApp = initializeApp(environment.firebase);
const analytics = getAnalytics(firebaseApp);

bootstrapApplication(AppComponent, {
  providers: [
    {provide: APP_VERSION, useValue: '0.0.3'},
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy },
    provideIonicAngular(),
    provideRouter(routes, withPreloading(PreloadAllModules)),
    provideServiceWorker('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    }),
  ],
});
