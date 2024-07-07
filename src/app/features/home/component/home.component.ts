import { Component, inject } from '@angular/core';
import { FormGroup, FormBuilder, Validators, FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from '../../../core/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent {

  private formBuilder = inject(FormBuilder);
  private localStorageService = inject(LocalStorageService);
  private router = inject(Router);

  public loginForm: FormGroup = this.formBuilder.group({
    ts: ['', [Validators.required]],
    publicKey: ['', [Validators.required]],
    privateKey: ['', [Validators.required]],
  });

  login(): void {
    console.log(this.loginForm.value);
    const { ts, publicKey, privateKey } = this.loginForm.value;
    const hash = this.localStorageService.generateHash(ts, privateKey, publicKey);
    this.localStorageService.saveHash(hash);
    this.localStorageService.savePublicKey(publicKey);
    alert('Hash generado y guardado en el almacenamiento local');
    this.router.navigate(['/series-list']);
  }
  // const loginValue = { ...this.loginForm.value };
  // this.loginService.login(loginValue).subscribe({
  //   next: (_) => {
  //
  //   },
  //   error: (e) => alert('User not Found'),
  // });
}

