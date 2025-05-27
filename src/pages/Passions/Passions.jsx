import passionsData from './data/passionsData.json';

export default function Passions() {
  return (
    <div className="space-y-8 max-w-4xl mx-auto px-4">
      {passionsData.map((item, index) => (
        <section key={index}>
          <div className="bg-surface -mx-4 px-4 py-8">
            <h3 className="text-xl font-semibold mb-2">{item.title}</h3>
            <p>{item.content}</p>
          </div>
        </section>
      ))}
    </div>
  );
}