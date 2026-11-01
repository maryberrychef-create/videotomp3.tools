import Link from "next/link";

export default function Footer() {
  return (
    <footer className="site-footer">
      <nav className="footer-links">
        <Link href="/privacy">Privacy Policy</Link>
        <Link href="/terms">Terms of Service</Link>
        <Link href="/contact">Contact Us</Link>
      </nav>
      <p>0% server upload. Your file never leaves your device. &copy; 2026 videotomp3.tools</p>
    </footer>
  );
}