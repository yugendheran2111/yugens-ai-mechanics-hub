
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { projects } from "@/data/portfolio";

const Portfolio = () => {
  return (
    <div className="container py-16">
      <h1 className="text-4xl font-bold mb-4 gradient-text">Portfolio</h1>
      <div className="section-divider mb-6"></div>
      <p className="text-lg text-muted-foreground mb-12 max-w-3xl">
        Explore my projects that combine AI and machine learning with mechanical engineering principles to solve complex problems and improve systems.
      </p>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project) => (
          <Card key={project.id} className="overflow-hidden flex flex-col hover-card-effect">
            <div className="aspect-video bg-muted">
              <img 
                src={project.image} 
                alt={project.title} 
                className="w-full h-full object-cover"
              />
            </div>
            <CardHeader>
              <CardTitle>{project.title}</CardTitle>
              <div className="flex flex-wrap gap-2 mt-2">
                {project.tags.map((tag, index) => (
                  <Badge key={index} variant="secondary">{tag}</Badge>
                ))}
              </div>
            </CardHeader>
            <CardContent className="flex-grow">
              <CardDescription className="text-base">
                {project.description}
              </CardDescription>
            </CardContent>
            <CardFooter>
              <Button asChild variant="outline">
                <a href={project.link}>View Project</a>
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default Portfolio;
