import { Component, OnDestroy, OnInit } from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { ActivatedRoute, Route } from '@angular/router';
import { MessageService } from 'primeng/api';
import { Subscription } from 'rxjs';
import { Book } from 'src/app/@core/interfaces/book.interface';
import { BookManagementService } from 'src/app/@core/services/book-management/book-management.service';

@Component({
  selector: 'app-book-details',
  templateUrl: './book-details.component.html',
  styleUrls: ['./book-details.component.css'],
})
export class BookDetailsComponent implements OnInit, OnDestroy {
  editForm: FormGroup;
  showEdit: boolean;
  id: string | null;
  subscription: Subscription = new Subscription();
  book!: Book;
  loremText: string =
    ' Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ad tempore facere nobis,\
   iusto similique exercitationem porro facilis, provident ipsam, quaerat atque blanditiis illo quis?';
  otherDetails: { [key: string]: any }[] = [];

  constructor(
    private bookManagementService: BookManagementService,
    private route: ActivatedRoute,
    private fb: FormBuilder,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.id = this.route.snapshot.queryParamMap.get('id');
    if (this.id) {
      this.getBookById(this.id);
    }

    this.buildEditForm();
  }

  buildEditForm() {
    this.editForm = this.fb.group({
      title: [null, Validators.required],
      author: [null, Validators.required],
      genre: [null, Validators.required],
      publisher: [null, Validators.required],
      availableCopies: [null, Validators.required],
    });
  }

  getControl(controlName: string) {
    return this.editForm?.get(controlName) as FormControl;
  }

  initializeOtherDetails(book: Book) {
    this.otherDetails = [
      {
        name: 'Genre',
        value: book.genre,
      },
      {
        name: 'Published',
        value: book.publicationDate,
      },
      {
        name: 'Publisher',
        value: book.publisher,
      },
      {
        name: 'Language',
        value: book.language,
      },
      {
        name: 'Pages',
        value: book.pages,
      },
      {
        name: 'Copies Available',
        value: book.availableCopies,
      },
    ];
  }

  getBookById(id: string) {
    const subscription = this.bookManagementService
      .getBookById(parseInt(id))
      .subscribe((book) => {
        console.log(book);
        this.book = book;
        this.initializeOtherDetails(this.book);
      });

    this.subscription.add(subscription);
  }

  onEdit() {
    console.log('edit');
    this.editForm.patchValue(this.book);
    this.showEdit = true;
  }

  onCancel() {
    console.log('iniside cancel');
    this.showEdit = false;
  }

  onSubmit() {
    const payload = {
      ...this.book,
      ...this.editForm.value,
      totalCopies: this.editForm.value.availableCopies,
    };

    this.bookManagementService.updateBookDetails(this.id!, payload).subscribe(
      (response) => {
        console.log(response);

        this.messageService.add({
          severity: 'success',
          summary: 'Edit Book',
          detail: `Book updated successfully`,
        });
        this.getBookById(this.id!);
      },
      (err) => {
        console.error(err);

        this.messageService.add({
          severity: 'error',
          summary: 'Add Book Failed',
          detail: `There was an error updating the book`,
        });
      }
    );
    this.showEdit = false;

    console.log('object');
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }
}
