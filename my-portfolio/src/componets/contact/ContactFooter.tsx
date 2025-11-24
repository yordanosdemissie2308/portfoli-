export function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="mt-16 pt-8 border-t border-gray-200/50">
      <p className="text-center text-gray-500">
        © {currentYear} Your Name — All Rights Reserved
      </p>
    </footer>
  );
}
