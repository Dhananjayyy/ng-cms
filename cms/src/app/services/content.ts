import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface BlogPost {
  title: string;
  date: string;
  thumbnail?: string;
  body: string;
  slug: string;
}

@Injectable({
  providedIn: 'root'
})
export class ContentService {
  private http = inject(HttpClient);

  getBlogPosts(): Observable<BlogPost[]> {
    return this.http.get<BlogPost[]>('/api/blog-posts');
  }

  getBlogPost(slug: string): Observable<BlogPost> {
    return this.http.get<BlogPost>(`/api/blog-posts/${slug}`);
  }
}
