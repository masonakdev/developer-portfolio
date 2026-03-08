import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const experiences = [
    {
        role: 'Software Engineer II',
        company: 'Northrop Grumman',
        period: '2026 - Present',
        description: 'Member of a division responsible for engineering mission-critical software solutions. Utilize Java, Javascript, and Python to design, develop, and test complex applications supporting space systems.',
    },
    {
        role: 'Intelligence Automation Analyst',
        company: 'CACI International Inc',
        period: '2025 - 2026',
        description: 'Ensure operational stability for over 300 cloud-hosted microservices by leveraging Python automation and Linux diagnostic tools to triage incidents and report critical data to senior leadership.',
    },
    {
        role: 'Mandarin Airborne Cryptologic Language Analyst',
        company: 'United States Air Force',
        period: '2020 - 2024',
        description: 'Served as an Airborne Chinese Linguist on the EC-130H Compass Call. Responsible for real-time translation and analysis of foreign communications.',
    },
    {
        role: 'Combat Ready Intelligence Instructor',
        company: 'United States Air Force',
        period: '2021-2022',
        description: 'Selected as a Combat Ready Intelligence Instructor while concurrently studying Mandarin Chinese. Trained personnel for Special Forces integration following completion of the rigorous qualification course.'
    },
];

const Experience: React.FC = () => {
    return (
        <section className="py-7 space-y-5">
            <h2 className="text-3xl font-bold text-center">Experience</h2>
            <div className="space-y-6">
                {experiences.map((exp, index) => (
                    <Card key={index} className="relative overflow-hidden border-l-4 border-l-primary">
                        <CardHeader>
                            <div className="flex flex-col md:flex-row md:justify-between md:items-center gap-2">
                                <div>
                                    <CardTitle className="text-xl">{exp.role}</CardTitle>
                                    <p className="text-muted-foreground font-medium">{exp.company}</p>
                                </div>
                                <Badge variant="outline" className="w-fit">
                                    {exp.period}
                                </Badge>
                            </div>
                        </CardHeader>
                        <CardContent>
                            <p className="text-muted-foreground">
                                {exp.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Experience;
