export default function AboutPreview() {
  return (
    <section className="p-4 bg-surface rounded flex flex-col gap-4">
      <h2 className="text-xl font-bold mb-2">About Me</h2>
      <p>
        I’m a curious developer exploring the web world. Learn more about my journey on the
        <a href="/passions" className="text-blue-500 underline"> Passions page</a>.
      </p>
    </section>
  );
}
