import Sidebar from './components/PlaygroundSidebar';

export default function Playground() {
  return (
    <div className="flex">
      <Sidebar />
      <main className="flex-grow p-6">
        <h1 className="text-2xl text-primaryColor font-bold mb-4">Playground</h1>
        <p>This is where experiments will live.</p>
      </main>
    </div>
  );
}