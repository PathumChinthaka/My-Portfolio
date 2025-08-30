"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Badge } from "@/components/ui/badge";
import { Github, Linkedin, Mail, ExternalLink, Menu, X } from "lucide-react";
import emailjs from "emailjs-com";

export default function Portfolio() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const sendEmail = (e: any) => {
    e.preventDefault();

    emailjs
      .sendForm(
        `${process.env.NEXT_PUBLIC_EMAIL_SERVICE_ID}`,
        `${process.env.NEXT_PUBLIC_EMAIL_TEMPLATE_ID}`,
        e.target,
        `${process.env.NEXT_PUBLIC_EMAIL_PUBLIC_KEY}`
      )
      .then(
        () => {
          e.target.reset();
        },
        (error) => {
          console.error("Failed to send email");
        }
      );
  };

  const projects = [
    {
      title: "Library Management System",
      description:
        "Full-stack library management project built with Node.js, TypeScript, and api integration",
      technologies: ["Node.js", "TypeScript", "Mongodb"],
      link: "#",
      github: "https://github.com/PathumChinthaka/Book-Club-Library-Frontend",
    },
    {
      title: "Point Of Sale System",
      description:
        "Point of sale system build with html, css, javascript and jquery with crud operations and authentication",
      technologies: ["Html", "Css", "Javascript", "Jquery"],
      link: "#",
      github: "https://github.com/PathumChinthaka/Point-of-sale-System",
    },
    {
      title: "Hostel Management System",
      description:
        "Hostel management system build with java and javaFx including crud operations",
      technologies: ["Java", "Java-Fx", "Scene Builder"],
      link: "#",
      github: "https://github.com/PathumChinthaka/Hostel-Management-System",
    },
  ];

  const frontendSkills = ["React", "Next.js", "TypeScript", "Tailwind CSS"];
  const backendSkills = ["Node.js", ".Net", "Python", "PostgreSQL", "MongoDB"];
  const toolsSkills = ["Git", "Vercel", "Supabase"];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/80 backdrop-blur-md border-b border-border z-50">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            <div className="text-xl font-bold text-foreground">
              <span className="text-accent">Pathum Chinthaka</span>
            </div>

            {/* Desktop Navigation */}
            <div className="hidden md:flex space-x-8">
              <a
                href="#about"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                About
              </a>
              <a
                href="#projects"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Projects
              </a>
              <a
                href="#contact"
                className="text-muted-foreground hover:text-accent transition-colors"
              >
                Contact
              </a>
            </div>

            {/* Mobile menu button */}
            <button
              className="md:hidden"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? (
                <X className="h-6 w-6" />
              ) : (
                <Menu className="h-6 w-6" />
              )}
            </button>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden py-4 border-t border-border">
              <div className="flex flex-col space-y-4">
                <a
                  href="#about"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  About
                </a>
                <a
                  href="#projects"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Projects
                </a>
                <a
                  href="#contact"
                  className="text-muted-foreground hover:text-accent transition-colors"
                >
                  Contact
                </a>
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto text-center">
          <div className="mb-8 flex justify-center">
            <div className="relative">
              <img
                src="/my-profile-picture.jpg"
                alt="Pathum Chinthaka"
                className="w-48 h-48 rounded-full object-cover border-4 border-accent shadow-2xl animate-float animate-pulse-glow"
              />
              <div className="absolute -inset-4 rounded-full bg-gradient-to-r from-accent/20 to-purple-500/20 blur-xl animate-pulse"></div>
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-6 text-balance">
            Hi, I'm <span className="text-accent">Pathum Chinthaka</span>
          </h1>

          <p className="text-xl md:text-2xl text-muted-foreground mb-8 text-balance">
            Full Stack Developer passionate about creating modern web
            applications
          </p>

          <div className="flex justify-center space-x-4 mb-12">
            <Button asChild className="bg-accent hover:bg-accent/90">
              <a href="#contact">Get In Touch</a>
            </Button>
            <Button variant="outline" asChild>
              <a href="#projects">View Projects</a>
            </Button>
          </div>

          <div className="flex justify-center space-x-6">
            <a
              href="https://github.com/PathumChinthaka"
              target="_blank"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="https://www.linkedin.com/in/pathum-chinthaka/"
              target="_blank"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              title="mpathumchinthaka@gmail.com"
              className="text-muted-foreground hover:text-accent transition-colors"
            >
              <Mail className="h-6 w-6" />
            </a>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            About Me
          </h2>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            <div>
              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                I'm a passionate Full Stack Developer with{" "}
                <span className="text-accent font-semibold">
                  2+ years of experience
                </span>{" "}
                building scalable web applications. I specialize in creating
                seamless user experiences backed by robust, efficient
                server-side solutions.
              </p>

              <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                My journey in tech started with a curiosity for problem-solving,
                which evolved into a love for crafting digital solutions that
                make a real impact.
              </p>
            </div>

            <div>
              <h3 className="text-xl font-semibold mb-6 text-accent">
                Technical Expertise
              </h3>

              <div className="space-y-6">
                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                    Frontend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {frontendSkills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-accent text-accent-foreground hover:bg-accent/90 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                    Backend
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {backendSkills.map((skill) => (
                      <Badge
                        key={skill}
                        className="bg-accent/20 text-accent border border-accent/30 hover:bg-accent/30 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>

                <div>
                  <h4 className="text-sm font-medium text-foreground mb-3 uppercase tracking-wide">
                    Tools & Cloud
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {toolsSkills.map((skill) => (
                      <Badge
                        key={skill}
                        variant="outline"
                        className="border-accent/30 text-accent hover:bg-accent/10 transition-colors"
                      >
                        {skill}
                      </Badge>
                    ))}
                  </div>
                </div>
              </div>

              {/* <div className="mt-8 grid grid-cols-2 gap-4">
                <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="text-2xl font-bold text-accent">50+</div>
                  <div className="text-sm text-muted-foreground">Projects Completed</div>
                </div>
                <div className="text-center p-4 bg-accent/5 rounded-lg border border-accent/10">
                  <div className="text-2xl font-bold text-accent">5+</div>
                  <div className="text-sm text-muted-foreground">Years Experience</div>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Featured Projects
          </h2>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <Card
                key={index}
                className="group hover:shadow-lg transition-all duration-300 hover:-translate-y-1 border-border bg-card"
              >
                <CardHeader>
                  <CardTitle className="text-accent group-hover:text-accent/80 transition-colors">
                    {project.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    {project.description}
                  </CardDescription>
                </CardHeader>

                <CardContent>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.map((tech) => (
                      <Badge
                        key={tech}
                        variant="outline"
                        className="text-xs border-accent/30 text-accent"
                      >
                        {tech}
                      </Badge>
                    ))}
                  </div>

                  <div className="flex space-x-2">
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 bg-transparent"
                    >
                      <a href={project.link}>
                        <ExternalLink className="h-4 w-4 mr-2" />
                        Live Demo
                      </a>
                    </Button>
                    <Button
                      size="sm"
                      variant="outline"
                      asChild
                      className="flex-1 bg-transparent"
                    >
                      <a href={project.github}>
                        <Github className="h-4 w-4 mr-2" />
                        Code
                      </a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-4 sm:px-6 lg:px-8 bg-card">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
            Get In Touch
          </h2>

          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-xl font-semibold mb-4 text-accent">
                Let's Connect
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                I'm always interested in new opportunities and exciting
                projects. Whether you have a question or just want to say hi,
                feel free to reach out!
              </p>

              <div className="space-y-4">
                <div className="flex items-center space-x-3">
                  <Mail className="h-5 w-5 text-accent" />
                  <span className="text-muted-foreground">
                    mpathumchinthaka@gmail.com
                  </span>
                </div>
                {/* <div className="flex items-center space-x-3">
                  <a
                    href="https://github.com/PathumChinthaka"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Github className="h-6 w-6" />
                  </a>
                </div>
                <div className="flex items-center space-x-3">
                  <a
                    href="https://www.linkedin.com/in/pathum-chinthaka/"
                    className="text-muted-foreground hover:text-accent transition-colors"
                  >
                    <Linkedin className="h-6 w-6" />
                  </a>
                </div> */}
              </div>
            </div>

            <form onSubmit={sendEmail} className="space-y-7">
              <div>
                <Input
                  placeholder="Your Name"
                  name="name"
                  required
                  className="bg-input border-border focus:border-accent"
                />
              </div>
              <div>
                <Input
                  placeholder="Subject"
                  name="subject"
                  required
                  className="bg-input border-border focus:border-accent"
                />
              </div>
              <div>
                <Input
                  type="email"
                  name="email"
                  required
                  placeholder="Your Email"
                  className="bg-input border-border focus:border-accent"
                />
              </div>
              <div>
                <Textarea
                  placeholder="Your Message"
                  name="message"
                  rows={5}
                  required
                  className="bg-input border-border focus:border-accent resize-none"
                />
              </div>
              <Button
                type="submit"
                className="w-full bg-accent hover:bg-accent/90"
              >
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-4 sm:px-6 lg:px-8 border-t text-center border-border">
        <div className="max-w-6xl mx-auto">
          <p className="text-muted-foreground">
            Build With 💜 © {new Date().getFullYear()} Pathum Chinthaka.
          </p>
        </div>
      </footer>
    </div>
  );
}
