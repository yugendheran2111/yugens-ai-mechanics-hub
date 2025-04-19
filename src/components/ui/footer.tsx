
import { Link } from "react-router-dom";
import { Github, Linkedin } from "lucide-react";

export function Footer() {
  return (
    <footer className="border-t bg-background/50">
      <div className="container py-8 md:py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-lg font-semibold mb-4">Yugendheran K.T.</h3>
            <p className="text-sm text-muted-foreground">
              AI and Mechanical Engineering Enthusiast bridging the gap between both worlds.
            </p>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Navigation</h3>
            <ul className="space-y-2">
              <li>
                <Link to="/" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/about" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  About
                </Link>
              </li>
              <li>
                <Link to="/portfolio" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Portfolio
                </Link>
              </li>
              <li>
                <Link to="/blog" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Blog
                </Link>
              </li>
              <li>
                <Link to="/contact" className="text-sm text-muted-foreground hover:text-blue-600 transition-colors">
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold mb-4">Connect</h3>
            <div className="flex space-x-4">
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors" aria-label="GitHub">
                <Github className="h-5 w-5" />
              </a>
              <a href="#" className="text-muted-foreground hover:text-blue-600 transition-colors" aria-label="LinkedIn">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="mt-4 text-sm text-muted-foreground">
              Email: <a href="mailto:example@example.com" className="hover:text-blue-600 transition-colors">example@example.com</a>
            </p>
          </div>
        </div>
        
        <div className="mt-8 pt-8 border-t">
          <p className="text-center text-xs text-muted-foreground">
            © {new Date().getFullYear()} Yugendheran Kumaran Thirumurugan. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
