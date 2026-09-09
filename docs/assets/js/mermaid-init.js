/* ==========================================================================
   CPI BANGLADESH MISSION CONTROL — MERMAID DIAGRAM INITIALIZER
   Configures Mermaid JS with official CPI Brand Diagram Semantics & Palette
   ========================================================================== */

document.addEventListener("DOMContentLoaded", function () {
  if (typeof mermaid !== "undefined") {
    mermaid.initialize({
      startOnLoad: true,
      theme: 'base',
      themeVariables: {
        fontFamily: "'Raleway', 'Arial', sans-serif",
        fontSize: "13px",
        
        // CPI Official Diagram Colors
        primaryColor: '#41273B',        /* CPI Deep Purple for core nodes */
        primaryTextColor: '#FFFFFF',
        primaryBorderColor: '#D91E4D',  /* CPI Red for primary boundaries */
        
        lineColor: '#948794',           /* CPI Mid Grey for connecting arrows */
        secondaryColor: '#4298B5',     /* CPI Blue for auxiliary nodes */
        tertiaryColor: '#615E9B',      /* CPI Secondary Purple for models */
        
        /* Node & Subgraph Styling */
        clusterBkg: '#F8F7F8',
        clusterBorder: '#D0C4C5',
        defaultLinkColor: '#948794',
        
        /* Flowchart Specifics */
        nodeBorder: '#41273B',
        mainBkg: '#41273B',
        nodeTextColor: '#FFFFFF',
        
        /* Sequence Diagrams */
        actorBkg: '#41273B',
        actorBorder: '#D91E4D',
        actorTextColor: '#FFFFFF',
        actorLineColor: '#948794',
        signalColor: '#D91E4D',
        signalTextColor: '#2D2926',
        labelBoxBkgColor: '#F0EBED',
        labelBoxBorderColor: '#D0C4C5',
        labelTextColor: '#41273B',
        
        /* State & Class Diagrams */
        classText: '#2D2926'
      },
      flowchart: {
        useMaxWidth: true,
        htmlLabels: true,
        curve: 'basis'
      }
    });

    // Auto-re-render diagrams when switching tabs or dynamic content updates
    document.querySelectorAll('.md-tabs__link, .tabbed-set input').forEach(tab => {
      tab.addEventListener('click', () => {
        setTimeout(() => {
          if (window.mermaid) {
            window.mermaid.contentLoaded();
          }
        }, 150);
      });
    });
  }
});
