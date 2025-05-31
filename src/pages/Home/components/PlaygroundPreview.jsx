export default function PlaygroundPreview() {
  return (
    <section className="p-4 bg-surface rounded flex flex-col gap-4 shadow-themeShadow">
      <h2 className="text-xl text-primaryColor font-bold mb-2">Playground</h2>
      <p>
        This is where I play with code and explore JS tricks. Head to the <a href="/playground" className="text-secondaryColor underline">Playground page</a> for more.
      </p>
    </section>
  );
}
