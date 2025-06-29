import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, BlogPost } from './services/content';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = 'cms';
  posts: BlogPost[] = [];
  private contentService = inject(ContentService);

  ngOnInit() {
    console.log('Fetching blog posts...');
    this.contentService.getBlogPosts().subscribe({
      next: (posts) => {
        this.posts = posts;
        console.log('Blog posts received:', this.posts);
      },
      error: (err) => console.error('Error fetching blog posts:', err),
    });
  }
}
