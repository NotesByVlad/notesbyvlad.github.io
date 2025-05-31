import TimeAgo from 'react-timeago';

export default function SkillsPreview() {

  return (
    <section className="p-4 bg-surface rounded flex flex-col gap-4 shadow-themeShadow">
      <h2 className="text-xl text-primaryColor font-bold mb-2">Skills</h2>
      <p>I started learning Python <TimeAgo date="2024-09-15T12:00:00" />.</p>
      <p>
        I started learning HTML, CSS and Javascript <TimeAgo date="2024-03-15T12:00:00" />, and returned more seriously <TimeAgo date="2025-03-03T12:00:00" />.
      </p>
      <p>I started learning MySQL <TimeAgo date="2025-01-05T12:00:00" />.</p>
      <p>I started learning Django <TimeAgo date="2025-03-12T12:00:00" />.</p>
      <p>I started learning React + Vite + TailwindCSS <TimeAgo date="2025-05-01T12:00:00" />.</p>
      <p>
        I work with JavaScript, React, and other web technologies. For a full list check out the <a href="/skills" className="text-secondaryColor underline">Skills page</a>.
      </p>
    </section>
  );
}
