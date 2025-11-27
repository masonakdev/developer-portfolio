import React from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Cpu, Plane, Trophy, Mountain, Globe, Camera } from 'lucide-react';

const personalHighlights = [
    {
        icon: <Cpu className="h-6 w-6" />,
        title: 'Hardware Enthusiast',
        description: 'Novice Computer Engineering interest, exploring the physical layer of computing.',
    },
    {
        icon: <Plane className="h-6 w-6" />,
        title: 'Sky & BASE',
        description: 'I\'m a big fan of nylon and blue skies. I have 350+ skydives and 100+ BASE jumps.',
    },
    {
        icon: <Trophy className="h-6 w-6" />,
        title: 'Competitive Spirit',
        description: 'I grew up wrestling (CA CIF State Qualifier) and playing football. Currently I\'m a poker tournament player focused on game theory.',
    },
    {
        icon: <Mountain className="h-6 w-6" />,
        title: 'Outdoors',
        description: 'I enjoy hiking, camping, and being out in nature.',
    },
    {
        icon: <Globe className="h-6 w-6" />,
        title: 'Linguist',
        description: 'Fluent in Mandarin Chinese, a skill honed during my time at DLI and in the Air Force.',
    },
    {
        icon: <Camera className="h-6 w-6" />,
        title: 'Creative Side',
        description: 'I enjoy graphic and frontend design. I also had a brief experience in commercial modeling and acting.',
    },
];

const Interests: React.FC = () => {
    return (
        <section className="py-7 space-y-5">
            <h2 className="text-3xl font-bold text-center">Beyond the Code</h2>
            <p className="text-center text-muted-foreground max-w-2xl mx-auto">
                While I'm passionate about tech, my life extends far beyond the screen. Here's a glimpse into who I am outside of work.
            </p>
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {personalHighlights.map((item, index) => (
                    <Card key={index} className="hover:shadow-lg transition-all duration-300 border-none bg-secondary/30">
                        <CardContent className="pt-6 flex flex-col items-center text-center space-y-4">
                            <div className="p-3 bg-primary/10 rounded-full text-primary">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold text-lg">{item.title}</h3>
                            <p className="text-sm text-muted-foreground">
                                {item.description}
                            </p>
                        </CardContent>
                    </Card>
                ))}
            </div>
            <div className="flex justify-center">
                <Badge variant="outline" className="text-sm py-1 px-4">
                    Fun Fact: I can solve a Rubik's Cube in under a minute!
                </Badge>
            </div>
        </section>
    );
};

export default Interests;
