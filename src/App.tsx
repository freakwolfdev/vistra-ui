const App = () => {
  return (
    <div className="flex min-h-screen items-center justify-center bg-gradient-to-br from-slate-900 via-purple-900 to-slate-900 p-4">
      <div className="w-full max-w-2xl rounded-2xl border border-white/20 bg-white/10 p-8 shadow-2xl backdrop-blur-lg">
        <div className="text-center">
          <h1 className="mb-6 font-bold text-3xl text-white">
            Vite + React + Tailwind CSS + Biome
          </h1>
          <p className="mb-8 text-gray-300 text-lg">
            A modern, fast development setup with the latest tools
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold text-white text-xl">
                🚀 Vite + React
              </h3>
              <p className="text-gray-300">
                Lightning-fast build tool with React 19 and TypeScript support
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold text-white text-xl">
                🎨 Tailwind CSS
              </h3>
              <p className="text-gray-300">
                Utility-first CSS framework with Tailwind CSS v4
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold text-white text-xl">
                ⚡ Biome
              </h3>
              <p className="text-gray-300">
                Fast linter and formatter with Biome 2.2.4
              </p>
            </div>

            <div className="rounded-xl border border-white/10 bg-white/5 p-6">
              <h3 className="mb-3 font-semibold text-white text-xl">📦 Bun</h3>
              <p className="text-gray-300">
                Ultra-fast package manager and runtime
              </p>
            </div>
          </div>

          <div className="mt-8">
            <p className="text-gray-300 text-lg">
              Start making changes in{' '}
              <code className="rounded bg-white/10 px-2 py-1 text-sm">
                App.tsx
              </code>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
