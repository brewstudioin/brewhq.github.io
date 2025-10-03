import { Button } from "./ui/button";

export function DocumentContent() {
  return (
    <div className="max-w-4xl mx-auto px-6 py-8">
      {/* Page Title */}
      <div className="mb-8">
        <div className="flex items-center space-x-3 mb-4">
          <span className="text-6xl">⚡</span>
          <div className="flex-1">
            <h1 className="text-4xl font-medium mb-2">Cut development time</h1>
            <p className="text-muted-foreground">AI that boosts team velocity and predictability.</p>
          </div>
        </div>
      </div>

      {/* Content blocks */}
      <div className="space-y-6">
        {/* Quote block */}
        <div className="border-l-4 border-orange-500 bg-orange-50 p-4 rounded-r-lg">
          <p className="text-orange-700">
            No more goldfish memory. Get clear requirements, surface hidden dependencies and development-ready 
            implementation plans. All under one roof.
          </p>
        </div>

        {/* Action button block */}
        <div className="flex justify-start">
          <Button 
            size="lg" 
            className="bg-slate-800 hover:bg-slate-700 text-white px-8 py-3"
          >
            Get Started
          </Button>
        </div>

        {/* Divider */}
        <div className="border-t border-border my-8"></div>

        {/* Heading block */}
        <h2 className="text-2xl font-medium mb-4">Why teams fail to raise velocity</h2>

        {/* Text block */}
        <p className="text-muted-foreground leading-relaxed mb-6">
          Unclear specs hide dependencies. The cost paid is often too high and too late. It's not just time or money - it's trust, momentum and motivation of your users and your engineering teams.
        </p>

        {/* Bullet points */}
        <div className="space-y-3">
          <div className="flex items-start space-x-3">
            <span className="text-orange-500 mt-1">•</span>
            <p>Hidden dependencies surface too late in the development cycle</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-orange-500 mt-1">•</span>
            <p>Unclear requirements lead to scope creep and delays</p>
          </div>
          <div className="flex items-start space-x-3">
            <span className="text-orange-500 mt-1">•</span>
            <p>Teams lose trust and momentum when timelines slip repeatedly</p>
          </div>
        </div>

        {/* Toggle list */}
        <div className="mt-8">
          <h3 className="font-medium mb-4">How AI can help</h3>
          <div className="space-y-2">
            <details className="group">
              <summary className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                <span className="group-open:rotate-90 transition-transform">▶</span>
                <span>Clear requirement gathering</span>
              </summary>
              <div className="ml-6 mt-2 p-3 bg-muted rounded">
                <p className="text-sm text-muted-foreground">
                  AI analyzes project context and helps surface all requirements upfront, reducing scope creep.
                </p>
              </div>
            </details>
            
            <details className="group">
              <summary className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                <span className="group-open:rotate-90 transition-transform">▶</span>
                <span>Dependency mapping</span>
              </summary>
              <div className="ml-6 mt-2 p-3 bg-muted rounded">
                <p className="text-sm text-muted-foreground">
                  Automatically identify technical dependencies and integration points before development starts.
                </p>
              </div>
            </details>
            
            <details className="group">
              <summary className="flex items-center space-x-2 cursor-pointer p-2 rounded hover:bg-muted">
                <span className="group-open:rotate-90 transition-transform">▶</span>
                <span>Implementation planning</span>
              </summary>
              <div className="ml-6 mt-2 p-3 bg-muted rounded">
                <p className="text-sm text-muted-foreground">
                  Generate detailed, development-ready implementation plans with realistic timelines.
                </p>
              </div>
            </details>
          </div>
        </div>
      </div>
    </div>
  );
}