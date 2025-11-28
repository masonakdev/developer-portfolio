import { useEffect, useState } from 'react';

interface GitHubTag {
    name: string;
}

export default function GitHubTagBadge() {
    const [tag, setTag] = useState<string | null>(null);

    useEffect(() => {
        fetch('https://api.github.com/repos/masonakdev/developer-portfolio/tags')
            .then((res) => {
                if (!res.ok) throw new Error('Failed to fetch tags');
                return res.json();
            })
            .then((data: GitHubTag[]) => {
                if (data && data.length > 0) {
                    setTag(data[0].name);
                }
            })
            .catch(() => {
                setTag(null);
            });
    }, []);

    if (!tag) return null;

    return (
        <span className="ml-2 inline-flex items-center rounded-md border px-2 py-0.5 text-xs font-semibold transition-colors focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80">
            {tag}
        </span>
    );
}
