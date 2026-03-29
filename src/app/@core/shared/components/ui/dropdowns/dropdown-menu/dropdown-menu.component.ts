import {
  Component,
  Input,
  Output,
  EventEmitter,
  TemplateRef,
  ViewChild,
  ElementRef,
  HostListener,
  OnDestroy,
  ContentChild,
} from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';

export interface DropdownMenuItem {
  label: string;
  value?: any;
  disabled?: boolean;
  destructive?: boolean;
  separator?: boolean;
  shortcut?: string;
  icon?: string;
  children?: DropdownMenuItem[];
}

@Component({
  selector: 'app-dropdown-menu',
  templateUrl: './dropdown-menu.component.html',
  styleUrls: ['./dropdown-menu.component.css'],
  animations: [
    trigger('dropdownAnimation', [
      state(
        'closed',
        style({
          opacity: 0,
          transform: 'scale(0.95)',
          visibility: 'hidden',
        })
      ),
      state(
        'open',
        style({
          opacity: 1,
          transform: 'scale(1)',
          visibility: 'visible',
        })
      ),
      transition('closed => open', [animate('150ms ease-out')]),
      transition('open => closed', [animate('100ms ease-in')]),
    ]),
  ],
})
export class DropdownMenuComponent implements OnDestroy {
  @Input() items: DropdownMenuItem[] = [];
  @Input() placement: 'bottom-start' | 'bottom-end' | 'top-start' | 'top-end' =
    'bottom-start';
  @Input() contentClasses: string = '';
  @Input() triggerId: string = `dropdown-trigger-${Math.random()
    .toString(36)
    .substr(2, 9)}`;

  @Output() itemSelected = new EventEmitter<DropdownMenuItem>();
  @Output() openChange = new EventEmitter<boolean>();

  @ViewChild('trigger', { static: false }) triggerRef!: ElementRef;
  @ViewChild('content', { static: false }) contentRef!: ElementRef;

  isOpen = false;
  activeSubmenu: DropdownMenuItem | null = null;
  transformOrigin = 'top left';
  private submenuTimeout: any;

  toggle(): void {
    this.isOpen ? this.close() : this.open();
  }

  open(): void {
    this.isOpen = true;
    this.openChange.emit(true);
    this.updatePosition();

    // Focus first item after animation
    setTimeout(() => {
      this.focusFirstItem();
    }, 150);
  }

  close(): void {
    this.isOpen = false;
    this.activeSubmenu = null;
    this.openChange.emit(false);
    this.triggerRef?.nativeElement?.focus();
  }

  onItemClick(item: DropdownMenuItem, event: Event): void {
    if (item.disabled) return;

    event.stopPropagation();
    this.itemSelected.emit(item);
    this.close();
  }

  openSubmenu(item: DropdownMenuItem): void {
    if (item.disabled || !item.children) return;

    clearTimeout(this.submenuTimeout);
    this.activeSubmenu = item;
  }

  closeSubmenu(): void {
    this.submenuTimeout = setTimeout(() => {
      this.activeSubmenu = null;
    }, 100);
  }

  onTriggerKeydown(event: KeyboardEvent): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
      case 'ArrowDown':
        event.preventDefault();
        this.open();
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.open();
        // Focus last item
        setTimeout(() => {
          this.focusLastItem();
        }, 150);
        break;
    }
  }

  onItemKeydown(event: KeyboardEvent, item: DropdownMenuItem): void {
    switch (event.key) {
      case 'Enter':
      case ' ':
        event.preventDefault();
        this.onItemClick(item, event);
        break;
      case 'ArrowDown':
        event.preventDefault();
        this.focusNextItem(event.target as HTMLElement);
        break;
      case 'ArrowUp':
        event.preventDefault();
        this.focusPreviousItem(event.target as HTMLElement);
        break;
      case 'ArrowRight':
        if (item.children) {
          event.preventDefault();
          this.openSubmenu(item);
        }
        break;
      case 'ArrowLeft':
        event.preventDefault();
        this.activeSubmenu = null;
        break;
      case 'Escape':
        event.preventDefault();
        this.close();
        break;
    }
  }

  onSubmenuKeydown(event: KeyboardEvent, item: DropdownMenuItem): void {
    switch (event.key) {
      case 'ArrowRight':
        event.preventDefault();
        this.openSubmenu(item);
        break;
      default:
        this.onItemKeydown(event, item);
    }
  }

  @HostListener('document:keydown', ['$event'])
  onDocumentKeydown(event: KeyboardEvent): void {
    if (this.isOpen && event.key === 'Escape') {
      this.close();
    }
  }

  private updatePosition(): void {
    // Update transform origin based on placement
    switch (this.placement) {
      case 'bottom-start':
        this.transformOrigin = 'top left';
        break;
      case 'bottom-end':
        this.transformOrigin = 'top right';
        break;
      case 'top-start':
        this.transformOrigin = 'bottom left';
        break;
      case 'top-end':
        this.transformOrigin = 'bottom right';
        break;
    }
  }

  private focusFirstItem(): void {
    const firstItem = this.contentRef?.nativeElement?.querySelector(
      '[role="menuitem"]:not([tabindex="-1"])'
    );
    firstItem?.focus();
  }

  private focusLastItem(): void {
    const items = this.contentRef?.nativeElement?.querySelectorAll(
      '[role="menuitem"]:not([tabindex="-1"])'
    );
    const lastItem = items?.[items.length - 1];
    lastItem?.focus();
  }

  private focusNextItem(currentElement: HTMLElement): void {
    const items = Array.from(
      this.contentRef?.nativeElement?.querySelectorAll(
        '[role="menuitem"]:not([tabindex="-1"])'
      ) || []
    );
    const currentIndex = items.indexOf(currentElement);
    const nextIndex = (currentIndex + 1) % items.length;
    (items[nextIndex] as HTMLElement)?.focus();
  }

  private focusPreviousItem(currentElement: HTMLElement): void {
    const items = Array.from(
      this.contentRef?.nativeElement?.querySelectorAll(
        '[role="menuitem"]:not([tabindex="-1"])'
      ) || []
    );
    const currentIndex = items.indexOf(currentElement);
    const previousIndex =
      currentIndex === 0 ? items.length - 1 : currentIndex - 1;
    (items[previousIndex] as HTMLElement)?.focus();
  }

  trackByFn(index: number, item: DropdownMenuItem): any {
    return item.value || item.label || index;
  }

  ngOnDestroy(): void {
    clearTimeout(this.submenuTimeout);
  }
}
