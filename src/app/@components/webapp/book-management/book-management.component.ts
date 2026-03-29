import {
  Component,
  OnInit,
  OnDestroy,
  ViewChild,
  SimpleChanges,
  OnChanges,
} from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator, PageEvent } from '@angular/material/paginator';
import { MatSort, Sort } from '@angular/material/sort';
import { debounceTime, Subscription } from 'rxjs';
import { Book, BooksResponse } from 'src/app/@core/interfaces/book.interface';
import { BookManagementService } from 'src/app/@core/services/book-management/book-management.service';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material/dialog';
import { ConfirmationService, MessageService } from 'primeng/api';
import { FormControl } from '@angular/forms';

@Component({
  selector: 'app-book-management',
  templateUrl: './book-management.component.html',
  styleUrls: ['./book-management.component.css'],
})
export class BookManagementComponent implements OnChanges, OnInit, OnDestroy {
  displayedColumns: string[] = [
    'coverImageUrl',
    'title',
    'author',
    'genre',
    'publicationDate',
    'publisher',
    'pages',
    'action',
  ];
  dataSource = new MatTableDataSource<Book>([]);

  books: Book[] = [];
  subscription: Subscription = new Subscription();
  page: number = 1;
  totalRecords: number;
  showAdd: boolean = false;
  resetAddForm: boolean = false;

  sortedData = this.books.slice();
  searchControl: FormControl = new FormControl();

  @ViewChild(MatPaginator) paginator: MatPaginator | any;
  @ViewChild(MatSort) sort: MatSort | any;

  constructor(
    private bookManagementService: BookManagementService,
    private router: Router,
    private dialog: MatDialog,
    private messageService: MessageService,
    private confirmationService: ConfirmationService
  ) {}

  ngOnChanges(changes: SimpleChanges) {
    console.log(changes);
  }

  ngOnInit(): void {
    this.getBooks(this.page);
    this.subscription.add(this.subscribeToSearch());
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;

    setTimeout(() => {
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    });

    this.bookManagementService.getUserToken().subscribe(
      (response) => {
        console.log('API response:', response);
      },
      (error) => {
        console.error('API error:', error);
      }
    );
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    // this.dataSource.sort = this.sort;
  }

  subscribeToSearch() {
    return this.searchControl.valueChanges
      .pipe(debounceTime(500))
      .subscribe((value) => {
        if (value.length > 0) {
          this.bookManagementService.textSearch(value).subscribe((books) => {
            this.books = books;
            this.setDataSource(books);
          });
        } else {
          this.getBooks(this.page);
        }
      });
  }

  getBooks(page: number): void {
    const subscription = this.bookManagementService
      .getBooks(page)
      .subscribe((response: BooksResponse) => {
        if (response && response.data) {
          this.books = response.data;
          this.sortedData = this.books.slice();
          this.totalRecords = response.items;
          this.setDataSource(this.books);
          this.page = page;
        }
        console.log(this.books);
      });

    this.subscription.add(subscription);
  }

  setDataSource(data: Book[]) {
    this.dataSource = new MatTableDataSource(data);
  }

  onSelectRow(row: any) {
    this.router.navigate(['/app/book-management/details'], {
      queryParams: { id: row.id },
    });
  }

  onDeleteRecord(row: any) {
    this.confirmationService.confirm({
      message: `Do you want to delete '${row.title}'?`,
      header: 'Delete Confirmation',
      icon: 'pi pi-info-circle',
      accept: () => {
        this.messageService.add({
          severity: 'error',
          summary: 'Confirmed',
          detail: `'${row.title}' deleted`,
        });
        this.bookManagementService.deleteBook(row.id).subscribe((response) => {
          console.log(response, this.paginator.pageIndex + 1);
          this.bookManagementService.getBooks(this.paginator.pageIndex + 1);
        });
      },
      reject: (type: any) => {
        this.messageService.add({
          severity: 'info',
          summary: 'Rejected',
          detail: 'You have rejected',
        });
      },
    });
  }

  onCancel() {
    this.showAdd = false;
    this.resetAddForm = true;
  }

  toggleAddForm() {
    this.showAdd = true;
  }

  sortData(sort: Sort) {
    console.log('object');
    const data = this.books.slice();
    console.log(sort.active);

    if (!sort.active || sort.direction === '') {
      this.sortedData = data;
    } else {
      this.sortedData = data.sort((a, b) => {
        const aValue = (a as any)[sort.active];
        const bValue = (b as any)[sort.active];
        console.log(aValue, bValue);
        return (aValue < bValue ? -1 : 1) * (sort.direction === 'asc' ? 1 : -1);
      });
    }
  }

  onSubmit() {
    this.showAdd = false;
  }

  onPaginationChange(event: PageEvent) {
    const page = event.pageIndex + 1;
    this.getBooks(page);
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
