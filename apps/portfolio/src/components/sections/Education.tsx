import React from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';

const education = [
    {
        degree: 'B.S. Software Engineering',
        school: 'Western Governors University',
        location: 'Salt Lake City, UT',
        date: 'November 2025',
    },
    {
        degree: 'Mandarin Chinese',
        school: 'Defense Language Institute',
        location: 'Monterey, CA',
        date: 'July 2022',
    },
];

const Education: React.FC = () => {
    return (
        <section className="py-7 space-y-5">
            <h2 className="text-3xl font-bold text-center">Education</h2>
            <div className="grid gap-6 md:grid-cols-2">
                {education.map((edu, index) => (
                    <Card key={index} className="hover:shadow-md transition-shadow">
                        <CardHeader>
                            <CardTitle className="text-lg">{edu.degree}</CardTitle>
                            <p className="text-sm text-muted-foreground">{edu.school}</p>
                        </CardHeader>
                        <CardContent>
                            <div className="flex justify-between text-sm">
                                <span>{edu.location}</span>
                                <span className="font-medium">{edu.date}</span>
                            </div>
                        </CardContent>
                    </Card>
                ))}
            </div>
        </section>
    );
};

export default Education;
