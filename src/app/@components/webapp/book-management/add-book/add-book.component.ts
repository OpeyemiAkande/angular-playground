import {
  Component,
  EventEmitter,
  OnChanges,
  OnInit,
  Output,
  SimpleChanges,
} from '@angular/core';
import {
  FormBuilder,
  FormControl,
  FormGroup,
  Validators,
} from '@angular/forms';
import { MessageService } from 'primeng/api';
import { BookManagementService } from 'src/app/@core/services/book-management/book-management.service';

@Component({
  selector: 'app-add-book',
  templateUrl: './add-book.component.html',
  styleUrls: ['./add-book.component.css'],
})
export class AddBookComponent implements OnInit, OnChanges {
  addFormGroup: FormGroup;
  @Output() submit: EventEmitter<any> = new EventEmitter();

  constructor(
    private fb: FormBuilder,
    private bookManagementServie: BookManagementService,
    private messageService: MessageService
  ) {}

  ngOnInit(): void {
    this.addFormGroup = this.fb.group({
      id: [null, Validators.required],
      title: [null, Validators.required],
      author: [null, Validators.required],
      isbn: [null, Validators.required],
      genre: [null, Validators.required],
      publicationDate: [null, Validators.required],
      summary: [null],
      availableCopies: [null, Validators.required],
      totalCopies: [null, Validators.required],
      coverImageUrl: [null],
      publisher: [null],
      language: [null],
      pages: [null],
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['resetAddForm'].currentValue) {
      this.addFormGroup.reset();
    }
  }

  getControl(controlName: string): FormControl {
    return this.addFormGroup.get(controlName) as FormControl;
  }

  onSubmit() {
    const payload = this.addFormGroup.value;

    this.bookManagementServie.addBook(payload).subscribe(
      (response) => {
        console.log(response);

        this.messageService.add({
          severity: 'success',
          summary: 'Add Book',
          detail: `Book added successfully`,
        });

        this.addFormGroup.reset();
        this.submit.emit(true);
      },
      (error) => {
        console.log(error);
        this.messageService.add({
          severity: 'error',
          summary: 'Add Book Failed',
          detail: `There was an error adding the book`,
        });
      }
    );
  }
}
