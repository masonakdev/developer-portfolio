import React from 'react';
import { Github, Linkedin, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import profilePic from '@/assets/profile_pic.png';

const Hero: React.FC = () => {
    return (
        <section className="flex flex-col items-center text-center space-y-8 py-12 animate-in fade-in slide-in-from-bottom-4 duration-1000">
            <div className="relative">
                <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-primary shadow-xl">
                    <img
                        src={profilePic}
                        alt="Mason Wilcox"
                        className="w-full h-full object-cover scale-125"
                    />
                </div>
                <div className="absolute -bottom-2 -right-2">
                    <Badge variant="secondary" className="text-xs shadow-md">
                        TS/SCI w/ CI Poly
                    </Badge>
                </div>
            </div>

            <div className="space-y-4 max-w-2xl">
                <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
                    Mason Wilcox
                </h1>
                <p className="text-xl text-muted-foreground">
                    Software Engineer based in Denver, CO
                </p>
                <p className="text-muted-foreground leading-relaxed">
                    With a B.S. in Software Engineering and a background in tactical military operations, I bring discipline and clarity to technical development. I enjoy engineering simple, scalable, and resilient solutions for complex environments.
                </p>
            </div>

            <div className="flex gap-4">
                <Button variant="outline" size="lg" asChild>
                    <a href="https://github.com/masonakdev" target="_blank" rel="noopener noreferrer">
                        <Github className="mr-2 h-5 w-5" />
                        GitHub
                    </a>
                </Button>
                <Button variant="outline" size="lg" asChild>
                    <a href="https://linkedin.com/in/masonawilcox" target="_blank" rel="noopener noreferrer">
                        <Linkedin className="mr-2 h-5 w-5" />
                        LinkedIn
                    </a>
                </Button>
                <Button size="lg" asChild>
                    <a href="https://raw.githubusercontent.com/masonakdev/developer-portfolio/main/resume/Mason%20Wilcox%20Resume.pdf" target="_blank" rel="noopener noreferrer">
                        <FileText className="mr-2 h-5 w-5" />
                        Resume
                    </a>
                </Button>
            </div>
        </section>
    );
};

export default Hero;
