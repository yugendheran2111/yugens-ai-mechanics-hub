
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Index = () => {
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="py-20 md:py-28 container">
        <div className="max-w-3xl mx-auto text-center animate-fade-in">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
            Yugendheran Kumaran Thirumurugan
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground mb-10 gradient-text">
            AI and Mechanical Engineering Enthusiast
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4 mb-16">
            <Button asChild size="lg">
              <Link to="/portfolio">View My Work</Link>
            </Button>
            <Button asChild variant="outline" size="lg">
              <Link to="/contact">Get In Touch</Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Brief Introduction */}
      <section className="py-16 bg-gray-50">
        <div className="container">
          <div className="max-w-3xl mx-auto">
            <h2 className="text-3xl font-bold mb-8 text-center">Welcome to My Digital Space</h2>
            <p className="text-lg mb-6">
              I'm passionate about bridging the gap between AI/ML technologies and mechanical engineering applications.
              My work focuses on developing innovative solutions that leverage the power of artificial intelligence
              to solve complex mechanical engineering challenges.
            </p>
            <p className="text-lg">
              Through this website, I share my projects, research, and insights on how AI is transforming 
              the mechanical engineering field. Explore my portfolio to see how machine learning 
              algorithms can enhance object detection, predictive maintenance, and mechanical analysis.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Sections */}
      <section className="py-16 container">
        <h2 className="text-3xl font-bold mb-12 text-center">Explore My Work</h2>
        <div className="grid md:grid-cols-3 gap-8">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Portfolio</h3>
            <p className="text-muted-foreground mb-6">
              Browse through my projects combining AI and mechanical engineering principles.
            </p>
            <Button asChild variant="outline">
              <Link to="/portfolio">View Portfolio</Link>
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">Blog</h3>
            <p className="text-muted-foreground mb-6">
              Read my articles on AI applications in mechanical engineering and related topics.
            </p>
            <Button asChild variant="outline">
              <Link to="/blog">Read Articles</Link>
            </Button>
          </div>
          
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
            <h3 className="text-xl font-semibold mb-4">About Me</h3>
            <p className="text-muted-foreground mb-6">
              Learn more about my background, skills, and professional journey.
            </p>
            <Button asChild variant="outline">
              <Link to="/about">About Me</Link>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
