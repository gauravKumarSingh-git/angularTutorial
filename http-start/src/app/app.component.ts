import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { map, Subscription } from 'rxjs';
import { Post } from './post.model';
import { PostsService } from './posts.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit, OnDestroy{
  title = 'http-start';
  loadedPosts: Post[] = [];
  isFetching = false;
  error = null;
  private errorSub: Subscription | undefined;

  constructor(private http: HttpClient, private postsService: PostsService) {}

  ngOnInit() {
    this.errorSub = this.postsService.error.subscribe(errorMessage => {
      this.error = <any> errorMessage;
    })

    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.error = error.message;
    });
  }

  onCreatePost(postData: { title: string; content: string }) {
    this.postsService.createAndStorePosts(postData.title, postData.content);
    // this.onFetchPosts();
  }

  onFetchPosts() {
    this.isFetching = true;
    this.postsService.fetchPosts().subscribe(posts => {
      this.isFetching = false;
      this.loadedPosts = posts;
    }, error => {
      this.isFetching = false;
      this.error = error.message;
    });
  }

  onClearPosts() {
    this.postsService.clearPosts().subscribe(() => {
      this.loadedPosts = [];
    });
  }

  onHandleClick() {
    this.error = null;
  }

  ngOnDestroy(): void {
    this.errorSub?.unsubscribe();
  }
}
