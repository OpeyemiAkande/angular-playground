import { Component, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { Router } from '@angular/router';
import { MessageService } from 'primeng/api';
import { User } from 'src/app/@core/interfaces/book.interface';
import { AuthService } from 'src/app/@core/services/auth/auth.service';
import { regexValidator } from 'src/app/@core/utils/helpers';

// import * as CryptoJs from 'crypto-js';
// import * as CryptoJS from 'crypto-js';
import { DropdownMenuItem } from 'src/app/@core/shared/components/ui/dropdowns/dropdown-menu/dropdown-menu.component';

@Component({
  selector: 'app-sign-in',
  templateUrl: './sign-in.component.html',
  styleUrls: ['./sign-in.component.css'],
  providers: [MessageService],
})
export class SignInComponent implements OnInit {
  signInForm: FormGroup;

  open1: boolean = false;
  open2: boolean = false;

  plaintext = 'Hello, World!';
  // key = CryptoJS.enc.Base64.parse(
  //   's+hKziXUsgcGV61NN4aO7hO10Uw17C92FhIRSmb8YfY='
  // );
  // iv = CryptoJS.enc.Base64.parse('af8qjQqxi7TG9vz3h/eJsQ==');

  encrypted = '';
  decrypted = '';
  dropdownItems: DropdownMenuItem[] = [
    {
      label: 'Sign In',
      value: 'sign-in',
    },
    {
      label: 'Sign Out',
      value: 'sign-out',
    },
  ];

  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private messageService: MessageService,
    private router: Router,
  ) {}

  ngOnInit(): void {
    this.buildSignInForm();
    console.log(this.formInvalid);

    // this.encrypted = this.encrypt(this.plaintext);
    // this.decrypted = this.decrypt(this.encrypted);
    console.log('decrypted', this.decrypted);
  }

  show() {
    this.messageService.add({
      severity: 'success',
      summary: 'Sign in',
      detail: 'You have signed in successfully',
    });
  }

  buildSignInForm() {
    this.signInForm = this.fb.group({
      email: [null, [Validators.required, Validators.email]],
      password: [
        null,
        [
          Validators.required,
          regexValidator(new RegExp('^(?=.*?[A-Z])'), {
            uppercaseLetter: true,
          }),
          regexValidator(new RegExp('(?=.*?[a-z])'), { lowercaseLetter: true }),
          regexValidator(new RegExp('(?=.*?[0-9])'), { number: true }),
          regexValidator(new RegExp('(?=.*?[#?!@$%^&*-])'), {
            specialCharacter: true,
          }),
          regexValidator(new RegExp('.{8,}$'), { minimum: true }),
        ],
      ],
    });
  }

  get email() {
    return this.signInForm?.get('email') as FormControl;
  }
  get password() {
    return this.signInForm?.get('password') as FormControl;
  }

  get formInvalid() {
    return !this.signInForm.valid;
  }

  signInUser() {
    const { email, password } = this.signInForm.value;
    this.authService.getUserByEmail(email as string).subscribe(
      (response) => {
        if (response.length > 0 && response[0].password === password) {
          Object.keys(response[0]).forEach((key) => {
            sessionStorage.setItem(key, response[0][key as keyof User]);
          });

          this.messageService.add({
            severity: 'success',
            summary: 'Sign in',
            detail: 'You have signed in successfully',
          });
          this.router.navigate(['/app']);
        } else {
          this.messageService.add({
            severity: 'error',
            summary: 'Error',
            detail: 'email or password is wrong',
          });
        }
        console.log(response);
      },
      (error) => {
        this.messageService.add({
          severity: 'error',
          summary: 'Error',
          detail: 'Something went wrong',
        });
      },
    );
  }

  toggle(section: number) {
    if (section === 1) {
      this.open1 = !this.open1;
    } else if (section === 2) {
      this.open2 = !this.open2;
    }
  }

  onSubmit() {}

  onItemSelected(event: any) {
    console.log(event);
  }

  onOpenChange(event: any) {
    console.log(event);
  }
}
