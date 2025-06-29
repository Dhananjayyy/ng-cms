import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const contentDir = path.join(__dirname, '../src/content/blog');
const outputDir = path.join(__dirname, '../src/assets');

if (!fs.existsSync(outputDir)) {
  fs.mkdirSync(outputDir, { recursive: true });
}

const blogPosts = [];

if (fs.existsSync(contentDir)) {
  const files = fs.readdirSync(contentDir);
  
  files.forEach(file => {
    if (file.endsWith('.md')) {
      const content = fs.readFileSync(path.join(contentDir, file), 'utf8');
      const { data, content: body } = matter(content);
      
      blogPosts.push({
        ...data,
        body,
        slug: file.replace('.md', '')
      });
    }
  });
}

fs.writeFileSync(
  path.join(outputDir, 'blog-posts.json'),
  JSON.stringify(blogPosts, null, 2)
);

console.log(`Processed ${blogPosts.length} blog posts`);