import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService, AuthenticationService } from 'src/app/_services';

@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;
  loading = false;
  submitted = false;
  returnUrl!: string;

  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService
  ) {
    // rediriger vers l'accueil si déjà connecté
    if (this.authenticationService.currentUserValue) {
      this.router.navigate(['/']);
    }
  }

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });

    // obtenir l'URL de retour à partir des paramètres de route ou par défaut à '/'
    this.returnUrl = this.route.snapshot.queryParams['returnUrl'] || '/';
  }

  // getter pratique pour un accès facile aux champs de formulaire
  get f() {
    return this.loginForm.controls;
  }

  onSubmit() {
    this.submitted = true;

    // réinitialiser les alertes lors de l'envoi
    this.alertService.clear();

    // arrêtez-vous ici si le formulaire est invalide
    if (this.loginForm.invalid) {
      return;
    }

    this.loading = true;
    this.authenticationService
      .login(this.f['username'].value, this.f['password'].value)
      .pipe(first())
      .subscribe(
        (data) => {
          this.router.navigate([this.returnUrl]);
        },
        (error) => {
          this.alertService.error(error);
          this.loading = false;
        }
      );
  }
}