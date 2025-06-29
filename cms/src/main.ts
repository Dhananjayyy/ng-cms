import { bootstrapApplication } from '@angular/platform-browser';
import { appConfig } from './app/app.config';
import { isPlatformBrowser } from '@angular/common';
import { PLATFORM_ID, inject } from '@angular/core';
import { App } from './app/app';

declare var netlifyIdentity: any;

bootstrapApplication(App, appConfig)
  .then(() => {
    
    // Only run on browser side (not during SSR)
    if (typeof window !== 'undefined' && typeof netlifyIdentity !== 'undefined') {
      netlifyIdentity.on('init', (user: any) => {
        if (!user) {
          netlifyIdentity.on('login', () => {
            document.location.href = '/admin/';
          });
        }
      });
    }
  })
  .catch((err) => console.error(err));