import { MessageService } from 'primeng/api';
import { Component } from '@angular/core';
import { SidebarService } from 'src/app/@core/services/sidebar.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent {
  constructor(
    public sidebarService: SidebarService,
    private messageService: MessageService,
    private router: Router
  ) {}

  signOut() {
    sessionStorage.clear();
    this.messageService.add({
      severity: 'success',
      summary: 'Sign out',
      detail: 'You have successfully signed out.',
    });
    this.router.navigate(['auth/sign-in']);

    console.log('inside sign out');
  }
}
