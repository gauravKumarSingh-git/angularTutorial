import { HttpClient, HttpEventType, HttpHeaders, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { catchError, map, Subject, tap, throwError } from 'rxjs';
import { Post } from './post.model';

@Injectable({
  providedIn: 'root',
})
export class PostsService {
  error = new Subject<string>();
  constructor(private http: HttpClient) {}

  createAndStorePosts(title: string, content: string) {
    const postData: Post = { title: title, content: content };
    console.log(postData);
    this.http
      .post(
        'https://http-demo-b364c-default-rtdb.firebaseio.com/posts.json',
        postData,
        {
          observe: 'response',
        }
      )
      .subscribe(
        (responseData) => {
          console.log(responseData);
        },
        (error) => {
          this.error.next(error.message);
        }
      );
  }

  fetchPosts() {
    return this.http
      .get<{ [key: string]: Post }>(
        'https://http-demo-b364c-default-rtdb.firebaseio.com/posts.json',
        {
          headers: new HttpHeaders({ 'Custom-Header': 'Hello' }),
          params: new HttpParams().set('print', 'petty'),
        }
      )
      .pipe(
        map((responseData: { [key: string]: Post }) => {
          const postArray: Post[] = [];
          for (let key in responseData) {
            if (responseData.hasOwnProperty(key)) {
              postArray.push({ ...responseData[key], id: key });
            }
          }
          return postArray;
        })
        // ,
        // catchError((errorRes) =>
        //     throwError(() => new Error(errorRes))
        // )
      );
  }

  clearPosts() {
    return this.http
      .delete(
        'https://http-demo-b364c-default-rtdb.firebaseio.com/posts.json',
        {
          observe: 'events',
        }
      )
      .pipe(
        tap((event) => {
          console.log(event);
          if(event.type === HttpEventType.Sent){
            //..
          }
          if(event.type === HttpEventType.Response){
            console.log(event.body);
          }
        })
      );
  }
}
