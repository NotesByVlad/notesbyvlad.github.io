export default function Footer() {
    return (
        <footer className="bg-surface text-center py-4 mt-10">
            <p className="text-sm">
                © {new Date().getFullYear()} NotesByVlad.
            </p>
        </footer>
    );
}
