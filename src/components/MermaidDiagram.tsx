'use client';

import React, { useEffect, useState } from 'react';
import mermaid from 'mermaid';

interface MermaidDiagramProps {
  chart: string;
}

export default function MermaidDiagram({ chart }: MermaidDiagramProps) {
  const [svgContent, setSvgContent] = useState<string>('');
  const [error, setError] = useState<boolean>(false);

  useEffect(() => {
    // Initialize mermaid specifically for our dark theme
    mermaid.initialize({
      startOnLoad: false,
      theme: 'dark',
      securityLevel: 'loose',
      fontFamily: 'Outfit, sans-serif',
      themeVariables: {
        darkMode: true,
        background: 'transparent',
        primaryColor: '#4f46e5',
        primaryTextColor: '#fff',
        primaryBorderColor: '#312e81',
        lineColor: '#64748b',
        secondaryColor: '#0ea5e9',
        tertiaryColor: '#0f172a'
      }
    });

    const renderDiagram = async () => {
      try {
        const id = `mermaid-diagram-${Math.random().toString(36).substr(2, 9)}`;
        const { svg } = await mermaid.render(id, chart);
        setSvgContent(svg);
        setError(false);
      } catch (err) {
        console.error('Failed to render Mermaid diagram', err);
        setError(true);
      }
    };

    renderDiagram();
  }, [chart]);

  if (error) {
    return <div className="p-4 rounded bg-red-500/10 text-red-400 border border-red-500/20 text-center">Failed to load architecture diagram.</div>;
  }

  if (!svgContent) {
    return <div className="h-64 flex items-center justify-center text-muted-foreground animate-pulse rounded-xl bg-card border border-border/50">Rendering architecture diagram...</div>;
  }

  return (
    <div 
      className="w-full flex justify-start md:justify-center p-6 rounded-xl bg-[#09090b] border border-border shadow-inner overflow-x-auto [&>svg]:min-w-[800px] md:[&>svg]:min-w-max [&>svg]:h-auto"
      dangerouslySetInnerHTML={{ __html: svgContent }}
    />
  );
}
