import { useEffect, useState } from 'react';
import { FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';
import {
    Tooltip,
    TooltipContent,
    TooltipProvider,
    TooltipTrigger,
} from '@/components/ui/tooltip';
import ResumeViewer from './ResumeViewer';

interface CommitInfo {
    commit: {
        committer: {
            date: string;
        };
    };
}

export default function ResumeButton() {
    const [lastUpdated, setLastUpdated] = useState<string | null>(null);
    const [isModalOpen, setIsModalOpen] = useState(false);

    useEffect(() => {
        fetch(
            'https://api.github.com/repos/masonakdev/developer-portfolio/commits?path=resume/Mason%20Wilcox%20Resume.pdf&page=1&per_page=1'
        )
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch commit info');
                return res.json();
            })
            .then((data: CommitInfo[]) => {
                if (data && data.length > 0) {
                    const date = new Date(data[0].commit.committer.date);
                    setLastUpdated(date.toLocaleDateString());
                }
            })
            .catch(() => {
                setLastUpdated(null);
            });
    }, []);

    const button = (
        <Button size="lg" onClick={() => setIsModalOpen(true)}>
            <FileText className="mr-2 h-5 w-5" />
            Resume
        </Button>
    );

    return (
        <>
            <ResumeViewer
                isOpen={isModalOpen}
                onClose={() => setIsModalOpen(false)}
                lastUpdated={lastUpdated}
            />

            {lastUpdated ? (
                <TooltipProvider>
                    <Tooltip>
                        <TooltipTrigger asChild>{button}</TooltipTrigger>
                        <TooltipContent>
                            <p>Last updated: {lastUpdated}</p>
                        </TooltipContent>
                    </Tooltip>
                </TooltipProvider>
            ) : (
                button
            )}
        </>
    );
}
