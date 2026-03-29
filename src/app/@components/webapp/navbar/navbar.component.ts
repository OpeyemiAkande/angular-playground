import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';
import { User } from 'src/app/@core/interfaces/auth.interface';
import { AuthService } from 'src/app/@core/services/auth/auth.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css'],
})
export class NavbarComponent implements OnInit {
  sidebarState: boolean = false;
  currentUser: User;
  userFullName: string;
  role: string;
  @Output() showSidebar: EventEmitter<boolean> = new EventEmitter();

  constructor(private authService: AuthService, private router: Router) {}

  ngOnInit(): void {
    this.currentUser = this.authService.getCurrentUser();
    this.userFullName = sessionStorage.getItem('fullName')!;
    this.role = sessionStorage.getItem('role')!;
  }

  toggleSidebar() {
    console.log('toggle clicked');
    this.sidebarState = !this.sidebarState;
    this.showSidebar.emit(this.sidebarState);
  }

  logout() {
    localStorage.clear();
    sessionStorage.removeItem('email');
    this.router.navigateByUrl('auth/sign-in');
  }
}
