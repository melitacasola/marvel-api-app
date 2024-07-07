import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthInterceptor } from './interceptors/auth.interceptor';
import { LoadingOverlayComponent } from './loading-overlay/loading-overlay.component';
import { LoadInterceptor } from './loading-overlay/load.interceptor';
import { ErrorInterceptor } from './interceptors/handle-error.interceptor';
import { NotificationInterceptor } from './notification/notificacion.interceptor';




@NgModule({
  declarations: [
    LoadingOverlayComponent
  ],
  imports: [
    CommonModule
  ],
  providers: [
    { provide: HTTP_INTERCEPTORS, useClass: AuthInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: LoadInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor, multi: true },
    { provide: HTTP_INTERCEPTORS, useClass: NotificationInterceptor, multi: true }

  ],
  exports: [LoadingOverlayComponent]
})
export class CoreModule { }
