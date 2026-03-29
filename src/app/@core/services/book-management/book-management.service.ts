import { Injectable, NgZone } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import {
  Book,
  BooksResponse,
  Image,
  ImageUrls,
} from '../../interfaces/book.interface';
import { map, Observable, of } from 'rxjs';
import { switchMap, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root',
})
export class BookManagementService {
  baseUrl: string;
  unsplashUrl: string;
  images: ImageUrls[];
  count = 10;

  constructor(private http: HttpClient, private ngZone: NgZone) {
    this.baseUrl = environment.jsonServerUrl;
    this.unsplashUrl = environment.unsplashUrl;
  }

  addBook(payload: Book) {
    return this.http.post(`${this.baseUrl}/books`, payload);
  }

  getBooks(page: number): Observable<BooksResponse> {
    if (this.images && this.images.length > 0) {
      return this.getBooksWithoutImages(page);
    } else {
      return this.getImagesIfNecessary().pipe(
        switchMap(() => this.getBooksWithoutImages(page))
      );
    }
  }

  getBookById(id: number): Observable<Book> {
    if (this.images && this.images.length > 0) {
      return this.getBookWithoutImage(id);
    } else {
      return this.getImagesIfNecessary().pipe(
        switchMap(() => this.getBookWithoutImage(id))
      );
    }
  }

  private getBooksWithoutImages(page: number): Observable<BooksResponse> {
    return this.http
      .get<BooksResponse>(`${this.baseUrl}/books?_page=${page}`)
      .pipe(
        map((response: BooksResponse) => {
          response.data = response.data.map((book, index) => {
            if (this.images && this.images[index]) {
              book.coverImageUrl = this.images[index].regular;
            }
            return book;
          });
          return response;
        })
      );
  }

  getBookWithoutImage(id: number) {
    return this.http.get<Book[]>(`${this.baseUrl}/books?id=${id}`).pipe(
      map((response) => {
        const book = response[0];
        const index = id % 10;
        book.coverImageUrl = this.images[index - 1].regular;

        return book;
      })
    );
  }

  updateBookDetails(id: string, payload: any) {
    return this.http.put<Book[]>(`${this.baseUrl}/books/${id}`, payload);
  }

  deleteBook(id: string) {
    return this.http.delete<Book[]>(`${this.baseUrl}/books/${id}`);
  }

  private getImages(count: number): Observable<ImageUrls[]> {
    return this.http.get<Image[]>(`${this.unsplashUrl}&count=${count}`).pipe(
      map((response) => response.map((image) => image.urls)),
      tap((imageUrls) => {
        this.images = imageUrls;
      })
    );
  }

  textSearch(query: string): Observable<Book[]> {
    const params = new HttpParams().set('q', query);

    return this.http.get<Book[]>(`${this.baseUrl}/books?title=${query}`).pipe(
      map((response: Book[]) => {
        response = response.map((book, index) => {
          if (this.images && this.images[index]) {
            book.coverImageUrl = this.images[index].regular;
          }
          return book;
        });
        return response;
      })
    );
  }

  getUserToken() {
    return this.http.get<any>(`${this.baseUrl}/user-token`);
  }

  private getImagesIfNecessary(): Observable<void> {
    return this.ngZone.runOutsideAngular(() =>
      this.getImages(this.count).pipe(map(() => {}))
    );
  }
}
