import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Document, Page, pdfjs } from 'react-pdf';
import { Download, X, Calendar } from 'lucide-react';
import { Button } from '@/components/ui/button';
import 'react-pdf/dist/Page/AnnotationLayer.css';
import 'react-pdf/dist/Page/TextLayer.css';

pdfjs.GlobalWorkerOptions.workerSrc = `//unpkg.com/pdfjs-dist@${pdfjs.version}/build/pdf.worker.min.mjs`;

interface ResumeViewerProps {
    isOpen: boolean;
    onClose: () => void;
    lastUpdated: string | null;
}

const ResumeViewer: React.FC<ResumeViewerProps> = ({
    isOpen,
    onClose,
    lastUpdated,
}) => {
    const [numPages, setNumPages] = useState<number | null>(null);
    const [containerWidth, setContainerWidth] = useState<number>(0);

    useEffect(() => {
        function updateWidth() {
            const width = Math.min(window.innerWidth * 0.9, 800);
            setContainerWidth(width);
        }

        updateWidth();
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, []);

    function onDocumentLoadSuccess({ numPages }: { numPages: number }) {
        setNumPages(numPages);
    }

    return (
        <AnimatePresence>
            {isOpen && (
                <>
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        onClick={onClose}
                        className="fixed inset-0 bg-black/60 backdrop-blur-sm z-50 transition-opacity"
                    />

                    <motion.div
                        initial={{ opacity: 0, scale: 0.95, y: 20 }}
                        animate={{ opacity: 1, scale: 1, y: 0 }}
                        exit={{ opacity: 0, scale: 0.95, y: 20 }}
                        transition={{ duration: 0.2 }}
                        className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="bg-background border border-border shadow-2xl rounded-xl w-full max-w-4xl max-h-[90vh] flex flex-col overflow-hidden">
                            <div className="flex items-center justify-between p-4 border-b bg-muted/30">
                                <div className="flex flex-col sm:flex-row sm:items-center gap-1 sm:gap-4">
                                    <h2 className="text-lg font-semibold">Resume</h2>
                                    {lastUpdated && (
                                        <div className="flex items-center text-sm text-muted-foreground bg-muted px-2 py-0.5 rounded-full">
                                            <Calendar className="w-3 h-3 mr-1.5" />
                                            Updated: {lastUpdated}
                                        </div>
                                    )}
                                </div>
                                <div className="flex items-center gap-2">
                                    <Button
                                        size="sm"
                                        variant="outline"
                                        asChild
                                        className="h-8 md:h-9"
                                    >
                                        <a
                                            href="/resume.pdf"
                                            download="Mason Wilcox Resume.pdf"
                                            target="_blank"
                                            rel="noreferrer"
                                        >
                                            <Download className="w-4 h-4 mr-2" />
                                            <span className="hidden sm:inline">Download</span>
                                        </a>
                                    </Button>
                                    <Button
                                        size="icon"
                                        variant="ghost"
                                        className="h-8 w-8 rounded-full hover:bg-muted"
                                        onClick={onClose}
                                    >
                                        <X className="w-4 h-4" />
                                        <span className="sr-only">Close</span>
                                    </Button>
                                </div>
                            </div>

                            <div className="flex-1 overflow-y-auto bg-muted/10 p-4 md:p-6 flex justify-center">
                                <div className="shadow-lg">
                                    <Document
                                        file="/resume.pdf"
                                        onLoadSuccess={onDocumentLoadSuccess}
                                        loading={
                                            <div className="h-96 flex items-center justify-center text-muted-foreground animate-pulse">
                                                Loading PDF...
                                            </div>
                                        }
                                        error={
                                            <div className="h-96 flex items-center justify-center text-destructive">
                                                Failed to load resume. Use the download button above.
                                            </div>
                                        }
                                    >
                                        {Array.from(new Array(numPages), (_, index) => (
                                            <div key={`page_${index + 1}`} className="mb-4 last:mb-0">
                                                <Page
                                                    pageNumber={index + 1}
                                                    width={containerWidth}
                                                    renderTextLayer={true}
                                                    renderAnnotationLayer={true}
                                                    className="bg-white"
                                                />
                                            </div>
                                        ))}
                                    </Document>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </>
            )}
        </AnimatePresence>
    );
};

export default ResumeViewer;
