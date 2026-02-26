import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { User } from '../services/user';

export const adminGuard: CanActivateFn = () => {
  const adminService = inject(User);
  const router = inject(Router);
  const isAdmin = adminService.isAdminMode();
  console.log(isAdmin)
  if(isAdmin) return true;
  return router.createUrlTree(["/"])
};
