import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

type SidebarMode = 'full' | 'mini' | 'closed';

@Injectable({
  providedIn: 'root',
})
export class SidebarService {
  currentSidebarMode = new BehaviorSubject<SidebarMode>('full');
  showFullSidebarOption: boolean = true;

  currentRightSidebarMode = new BehaviorSubject<boolean>(false);

  constructor() {}

  setSavedSidebarMode() {
    const isFlowmonoSidebarMode = localStorage.getItem('Flowmono_Sidebar_Mode');

    if (isFlowmonoSidebarMode !== null) {
      this.setSidebarMode(isFlowmonoSidebarMode as SidebarMode);
    }
  }

  setSidebarMode(mode: SidebarMode) {
    this.currentSidebarMode.next(mode);

    localStorage.setItem('Flowmono_Sidebar_Mode', mode);
  }

  checkWindowDimension() {
    if (window.matchMedia('(max-width: 575.98px)').matches) {
      this.showFullSidebarOption = false;

      if (localStorage.getItem('Flowmono_Sidebar_Mode') === 'full') {
        this.setSidebarMode('closed');
      }
    } else {
      this.showFullSidebarOption = true;
    }
  }

  getRightSidebarMode() {
    return this.currentRightSidebarMode.asObservable();
  }
}
