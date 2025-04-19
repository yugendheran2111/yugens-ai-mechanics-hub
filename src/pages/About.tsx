
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <div className="container py-16 max-w-5xl">
      <h1 className="text-4xl font-bold mb-8 gradient-text">About Me</h1>
      <div className="section-divider mb-10"></div>
      
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
        <div className="md:col-span-1">
          <div className="aspect-square bg-gray-200 rounded-md overflow-hidden">
            {/* Placeholder for profile image */}
            <div className="w-full h-full flex items-center justify-center text-gray-400">
              Profile Photo
            </div>
          </div>
        </div>
        
        <div className="md:col-span-2">
          <h2 className="text-2xl font-semibold mb-4">Yugendheran Kumaran Thirumurugan</h2>
          <p className="text-lg mb-4">
            I'm an AI and mechanical engineering enthusiast with a passion for bridging these two fields to create innovative solutions.
          </p>
          <p className="mb-4">
            With a background in mechanical engineering, I've developed a deep understanding of mechanical systems, 
            design principles, and analysis methods. My journey into artificial intelligence began when I realized 
            the transformative potential AI could have on traditional mechanical engineering processes.
          </p>
          <p>
            My goal is to leverage AI and machine learning to enhance mechanical systems, improve 
            efficiency, and develop new approaches to longstanding engineering challenges.
          </p>
        </div>
      </div>
      
      {/* Education Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Education</h2>
        <div className="space-y-4">
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold">Master's in Mechanical Engineering</h3>
              <p className="text-muted-foreground">University Name, 2018-2020</p>
              <p className="mt-2">
                Focused on advanced mechanical design and analysis, with electives in computational methods.
              </p>
            </CardContent>
          </Card>
          
          <Card>
            <CardContent className="pt-6">
              <h3 className="font-semibold">Bachelor's in Mechanical Engineering</h3>
              <p className="text-muted-foreground">University Name, 2014-2018</p>
              <p className="mt-2">
                Comprehensive study of mechanical engineering principles, manufacturing processes, and design methodologies.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>
      
      {/* Skills Section */}
      <section className="mb-16">
        <h2 className="text-2xl font-semibold mb-6">Skills</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div>
            <h3 className="text-xl font-medium mb-4">Mechanical Engineering</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>CAD/CAM Software (SolidWorks, AutoCAD)</li>
              <li>Finite Element Analysis (FEA)</li>
              <li>Mechanical Design & Prototyping</li>
              <li>Thermal & Fluid Systems</li>
              <li>Manufacturing Processes</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium mb-4">AI & Programming</h3>
            <ul className="list-disc list-inside space-y-2">
              <li>Machine Learning Algorithms</li>
              <li>Computer Vision</li>
              <li>Python Programming</li>
              <li>TensorFlow & PyTorch</li>
              <li>Data Analysis & Visualization</li>
            </ul>
          </div>
        </div>
      </section>
      
      {/* Professional Experience */}
      <section>
        <h2 className="text-2xl font-semibold mb-6">Professional Experience</h2>
        <div className="space-y-6">
          <div>
            <h3 className="text-xl font-medium">Mechanical Engineer with AI Focus</h3>
            <p className="text-muted-foreground">Company Name, 2020-Present</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Developed machine learning models for predictive maintenance of mechanical equipment</li>
              <li>Implemented computer vision systems for quality control in manufacturing</li>
              <li>Designed automated analysis tools for mechanical testing data</li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-xl font-medium">Mechanical Design Engineer</h3>
            <p className="text-muted-foreground">Company Name, 2018-2020</p>
            <ul className="mt-2 list-disc list-inside space-y-1">
              <li>Designed mechanical components and systems for industrial applications</li>
              <li>Performed stress analysis and optimization of critical components</li>
              <li>Collaborated with cross-functional teams on product development</li>
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
