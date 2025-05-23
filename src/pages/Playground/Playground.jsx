import Sidebar from './components/PlaygroundSidebar';

export default function Playground() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow text-text p-6">
        <h1 className="text-2xl font-bold mb-4">Playground</h1>
        <p>This is where your experiments will live.</p>
      </main>
    </div>
  );
}