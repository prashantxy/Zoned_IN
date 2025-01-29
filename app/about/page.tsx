// page.tsx
"use client"

import React, { useState, useEffect } from 'react';
import { MatrixBackground } from '../components/MatrixBackGround';
import { 
  Github, 
  Linkedin, 
  Mail, 
  Terminal,
  Code2,
  Database,
  Server,
  Cpu,
  Box,
  GitBranch,
  Cloud,
  Cog,
  Boxes,
  Binary,
  Container,
  Network,
  FileCode2,
  ServerCrash,
  Blocks
} from 'lucide-react';
import { Card, CardContent } from '../components/ui/card';

interface TechStackCategory {
  title: string;
  items: { icon: any; label: string }[];
}

const TypeWriter = ({ text }: { text: string }) => {
  const [displayedText, setDisplayedText] = useState('');
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (currentIndex < text.length) {
      const timeout = setTimeout(() => {
        setDisplayedText(prev => prev + text[currentIndex]);
        setCurrentIndex(currentIndex + 1);
      }, 30);

      return () => clearTimeout(timeout);
    }
  }, [currentIndex, text]);

  return (
    <span className="block min-h-[1.5em]">
      {displayedText}<span className="animate-pulse">|</span>
    </span>
  );
};

const TechIcon = ({ icon: Icon, label }: { icon: any; label: string }) => (
  <div className="flex flex-col items-center justify-center p-3 border border-green-400 rounded hover:bg-green-400/10 transition-colors group">
    <Icon size={24} className="mb-2 group-hover:scale-110 transition-transform" />
    <span className="text-sm text-center">{label}</span>
  </div>
);

const AboutPage = () => {
  const aboutText1 = "I'm a passionate software developer currently pursuing my undergraduate degree. With expertise spanning from traditional development to Web3 technologies, I'm constantly exploring and adapting to new technological frontiers.";
  
  //const aboutText2 = "My journey includes working with cloud platforms, containerization, and modern development practices. I'm particularly excited about Rust and Web3 development, where I'm actively expanding my knowledge and skills.";

  const techStack: TechStackCategory[] = [
    {
      title: "Languages",
      items: [
        { icon: Code2, label: 'C++' },
        { icon: Box, label: 'Python' },
        { icon: FileCode2, label: 'JavaScript' },
        { icon: Binary, label: 'TypeScript' },
        { icon: Cpu, label: 'Rust' }
      ]
    },
    {
      title: "Web3",
      items: [
        { icon: Blocks, label: 'Solidity' },
      ]
    },
    {
      title: "Containerization",
      items: [
        { icon: Container, label: 'Docker' },
        { icon: Boxes, label: 'Kubernetes' },
        { icon: Server, label: 'Docker Hub' }
      ]
    },
    {
      title: "Databases",
      items: [
        { icon: Database, label: 'MySQL' },
        { icon: ServerCrash, label: 'MongoDB' },
        { icon: Database, label: 'PostgreSQL' }
      ]
    },
    {
      title: "Cloud",
      items: [
        { icon: Cloud, label: 'AWS' },
        { icon: Cloud, label: 'Azure' },
        { icon: Cloud, label: 'GCP' }
      ]
    },
    {
      title: "CI/CD",
      items: [
        { icon: Cog, label: 'Jenkins' },
        { icon: GitBranch, label: 'GitLab CI' }
      ]
    },
    {
      title: "Rust Framework",
      items: [
        { icon: Network, label: 'Actix Web' }
      ]
    }
  ];

  return (
    <div className="min-h-screen w-full bg-black text-green-400 font-mono relative">
      <MatrixBackground />
      
      <div className="container mx-auto px-4 py-16 relative">
        <div className="max-w-4xl mx-auto space-y-8">
          {/* Header Section */}
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">
              <Terminal className="inline-block mr-2 mb-1" />
              Hello, World!
            </h1>
            <p className="text-xl md:text-2xl">Software Developer & Undergraduate Student</p>
          </div>

          {/* About Section */}
          <Card className="bg-black/80 border border-green-400 backdrop-blur">
            <CardContent className="p-4 md:p-6">
              <h2 className="text-2xl font-bold mb-4">About Me</h2>
              <div className="space-y-4">
                <div className="min-h-[fit-content] md:min-h-[100px] break-words">
                  <TypeWriter text={aboutText1} />
                </div>
                
              </div>
            </CardContent>
          </Card>

          {/* Skills Section */}
          {techStack.map((category, index) => (
            <Card key={index} className="bg-black/80 border border-green-400 backdrop-blur">
              <CardContent className="p-4 md:p-6">
                <h2 className="text-xl font-bold mb-4">{category.title}</h2>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 md:gap-4">
                  {category.items.map((tech, techIndex) => (
                    <TechIcon key={techIndex} icon={tech.icon} label={tech.label} />
                  ))}
                </div>
              </CardContent>
            </Card>
          ))}

          {/* Education Section */}
          <Card className="bg-black/80 border border-green-400 backdrop-blur">
            <CardContent className="p-6">
              <h2 className="text-2xl font-bold mb-4">Education</h2>
              <div className="mb-4">
                <h3 className="font-bold">Bachelor's in Computer Science</h3>
                <p>Expected Graduation: 2026</p>
                <p>Currently maintaining a strong academic record while working on practical projects</p>
              </div>
            </CardContent>
          </Card>

          {/* Contact Section */}
          <div className="flex justify-center space-x-6">
            <a href="https://github.com/prashantxy" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
              <Github size={24} />
            </a>
            <a href="https://www.linkedin.com/in/prashant-dubey-59826521b/" target="_blank" rel="noopener noreferrer" className="hover:text-green-300 transition-colors">
              <Linkedin size={24} />
            </a>
            <a href="mailto:pdubey1924@gmail.com" className="hover:text-green-300 transition-colors">
              <Mail size={24} />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;