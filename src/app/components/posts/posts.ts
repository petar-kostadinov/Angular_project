import { Component, OnInit } from '@angular/core';
import { Post } from '../../interfaces/post.interface';
import { PostsService } from '../../services/posts';

@Component({
  selector: 'app-posts',
  imports: [],
  templateUrl: './posts.html',
  styleUrl: './posts.css',
})
export class PostsComponent {
  posts: Post[] = [];

  constructor(private postservice: PostsService) { }

  ngOnInit(): void{
    this.loadPosts();
  }

  loadPosts(): void {
    this.postservice.getAllPosts().subscribe({
      next: (data) => {
        this.posts = data.slice(0, 6);
      },

      error: (err) => {
        console.log(err);
      }
    })
  }

  deletePost(id: number): void {
    this.postservice.deletePost(id).subscribe({
      next: () => {
        this.posts = this.posts.filter(p => p.id !== id);
      },

      error: (err) => {
        console.log(err);
      }
    })
  }
}
