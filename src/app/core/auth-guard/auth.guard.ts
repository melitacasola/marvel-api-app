import { CanActivateFn, Router } from '@angular/router';

import { inject } from '@angular/core';
import { LocalStorageService } from '../services/local-storage.service';

export const authGuard: CanActivateFn = (route, state) => {

  const router = inject(Router);

  const authService = inject(LocalStorageService);

  if (authService.getHash() && authService.getPublicKey()) {
    return true;
  } else {
    return router.navigate(['/home']);
  }
};
