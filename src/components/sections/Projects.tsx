import React from 'react';
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ExternalLink, Github } from 'lucide-react';
import edgeCaseLogo from '@/assets/edgecase_logo.png';
import redisProject from '@/assets/redis_project.png';

const projects = [
    {
        title: 'EdgeCase',
        description: 'A full-stack web application for reporting and viewing BASE jumping incidents.',
        image: edgeCaseLogo,
        tags: ['Next.js', 'Spring Boot', 'PostgreSQL', 'Docker', 'AWS'],
        liveUrl: 'https://edgecase.masonak.dev',
        githubUrl: 'https://github.com/masonakdev/edgecase-demo',
        details: 'EdgeCase serves as a centralized platform for the community to share safety information, analyze trends, and improve risk management. It features a microservices architecture with a Next.js frontend and Spring Boot backend, containerized with Docker and deployed on AWS.',
        shadow: 'drop-shadow-[0_14px_18px_rgba(0,0,0,0.6)]',
        mvp: true,
    },
    {
        title: 'Redis Server in Java',
        description: 'A Redis-compatible server written in Java from scratch.',
        image: redisProject,
        tags: ['Java', 'TCP/IP', 'Redis Protocol', 'Concurrency'],
        githubUrl: 'https://github.com/masonakdev/redis-server-java',
        details: 'Built to understand Redis internals, this project implements the RESP2 protocol, handling TCP connections, concurrent clients, and core commands like SET, GET, and various list/stream operations. It is actively being developed to include advanced features like transactions and replication.',
        active: true,
        shadow: 'drop-shadow-[0_10px_12px_rgba(0,0,0,0.4)]',
    },
];

const Projects: React.FC = () => {
    return (
        <section className="py-12 space-y-8">
            <h2 className="text-3xl font-bold text-center">Projects</h2>
            <div className="grid gap-8 md:grid-cols-2">
                {projects.map((project) => (
                    <Card key={project.title} className="flex flex-col overflow-hidden hover:shadow-lg transition-shadow duration-300">
                        <div className="h-48 bg-secondary/50 dark:bg-slate-200 flex items-center justify-center p-8 relative z-10">
                            <img
                                src={project.image}
                                alt={project.title}
                                className={`h-full w-full object-contain hover:scale-105 transition-transform duration-300 ${project.shadow}`}
                            />
                        </div>
                        <CardHeader>
                            <div className="flex justify-between items-start">
                                <CardTitle>{project.title}</CardTitle>
                                {project.mvp && (
                                    <Badge variant="secondary" className="ml-2">
                                        MVP
                                    </Badge>
                                )}
                                {project.active && (
                                    <Badge variant="default" className="ml-2">
                                        Active Dev
                                    </Badge>
                                )}
                            </div>
                            <CardDescription>{project.description}</CardDescription>
                        </CardHeader>
                        <CardContent className="flex-grow space-y-4">
                            <p className="text-sm text-muted-foreground">
                                {project.details}
                            </p>
                            <div className="flex flex-wrap gap-2">
                                {project.tags.map((tag) => (
                                    <Badge key={tag} variant="secondary">
                                        {tag}
                                    </Badge>
                                ))}
                            </div>
                        </CardContent>
                        <CardFooter className="flex gap-4">
                            {project.liveUrl && (
                                <Button variant="outline" size="sm" asChild>
                                    <a href={project.liveUrl} target="_blank" rel="noopener noreferrer">
                                        <ExternalLink className="mr-2 h-4 w-4" />
                                        Live Demo
                                    </a>
                                </Button>
                            )}
                            <Button variant="outline" size="sm" asChild>
                                <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
                                    <Github className="mr-2 h-4 w-4" />
                                    Code
                                </a>
                            </Button>
                        </CardFooter>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Projects;
