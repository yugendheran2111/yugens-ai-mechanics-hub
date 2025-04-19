
import { useParams, Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { ArrowLeft } from "lucide-react";
import { blogPosts } from "@/data/blog";

const BlogPost = () => {
  const { id } = useParams<{ id: string }>();
  const post = blogPosts.find(post => post.id === id);
  
  if (!post) {
    return (
      <div className="container py-16">
        <h1 className="text-2xl font-bold mb-4">Article Not Found</h1>
        <p>Sorry, the article you're looking for doesn't exist.</p>
        <Button asChild className="mt-4">
          <Link to="/blog">Back to Blog</Link>
        </Button>
      </div>
    );
  }
  
  return (
    <div className="container py-16">
      <Button asChild variant="ghost" className="mb-8 -ml-4">
        <Link to="/blog">
          <ArrowLeft className="mr-2 h-4 w-4" />
          Back to Blog
        </Link>
      </Button>
      
      <article className="max-w-3xl mx-auto">
        <header className="mb-8">
          <Badge className="mb-4">{post.category}</Badge>
          <h1 className="text-4xl font-bold mb-4">{post.title}</h1>
          <div className="flex items-center justify-between text-muted-foreground">
            <div>
              <p className="font-medium">{post.author}</p>
              <p>{new Date(post.date).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}</p>
            </div>
            <span>{post.readTime}</span>
          </div>
        </header>
        
        <div className="aspect-video bg-muted rounded-lg overflow-hidden mb-10">
          <img 
            src={post.image} 
            alt={post.title} 
            className="w-full h-full object-cover"
          />
        </div>
        
        <div className="prose prose-lg max-w-none" dangerouslySetInnerHTML={{ __html: post.content }} />
        
        <div className="mt-16 pt-8 border-t">
          <h3 className="text-xl font-semibold mb-4">Share this article</h3>
          <div className="flex space-x-4">
            {/* Social sharing buttons would go here */}
            <Button variant="outline" size="sm">Twitter</Button>
            <Button variant="outline" size="sm">LinkedIn</Button>
            <Button variant="outline" size="sm">Facebook</Button>
          </div>
        </div>
      </article>
    </div>
  );
};

export default BlogPost;
