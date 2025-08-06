import { Component, OnInit, inject } from '@angular/core';
import { RouterOutlet, RouterModule } from '@angular/router';
import { CommonModule } from '@angular/common';
import { ContentService, BlogPost } from './services/content';
import { MatButtonModule } from '@angular/material/button';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { MatMenuModule } from '@angular/material/menu';
import { MatCardModule } from '@angular/material/card';
import { MatChipsModule } from '@angular/material/chips';
import { Home } from "./home/home";
import { NavComponent } from "./nav/nav.component";
import { Card } from "./components/card/card";


@Component({
  selector: 'app-root',
  imports: [RouterOutlet, RouterModule, CommonModule, MatButtonModule, MatToolbarModule, MatIconModule, MatMenuModule, MatCardModule, MatChipsModule, Home, NavComponent, Card],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App implements OnInit {
  protected title = `Pradip's Home`;
  blogPosts: BlogPost[] = [];
  private contentService = inject(ContentService);

  ngOnInit() {
    console.log('Fetching blog posts...');
    this.contentService.getBlogPosts().subscribe({
      next: (posts) => {
        this.blogPosts = posts;
        console.log('Blog posts received:', this.blogPosts);
      },
      error: (err) => console.error('Error fetching blog posts:', err),
    });
  }
}
