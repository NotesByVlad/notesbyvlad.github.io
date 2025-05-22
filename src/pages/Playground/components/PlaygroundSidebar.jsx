export default function Sidebar() {
  // Placeholder menu items for now
  const menuItems = [
    { id: 1, label: 'Experiment 1', path: '/playground/experiment1' },
    { id: 2, label: 'Experiment 2', path: '/playground/experiment2' },
    { id: 3, label: 'Experiment 3', path: '/playground/experiment3' },
  ];

  return (
    <aside className="w-64 bg-gray-100 min-h-screen p-4">
      <nav>
        <ul className="space-y-2">
          {menuItems.map(item => (
            <li key={item.id}>
              <a 
                href={item.path} 
                className="block p-2 rounded hover:bg-gray-200"
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </aside>
  );
}