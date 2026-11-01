import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Privacy Policy - videotomp3.tools",
  description: "Our privacy policy. We process 0% of your files on servers. Everything happens locally in your browser.",
};

export default function Privacy() {
  return (
    <main className="main">
      <div className="legal-card">
        <h1 className="main__title">Privacy Policy</h1>
        <div className="content">
          <p>This Privacy Policy applies between you, the User of this Website, and videotomp3.tools. We take the privacy of your information very seriously. This policy outlines how we handle your data when you use our Website.</p>
          
          <h2>1. Information We Collect</h2>
          <p>We collect <strong>absolutely none</strong> of your video files. Unlike other services, we do not upload, transfer, or store your media on any server. Because our tool uses WebAssembly to process files locally, your files never leave your device.</p>

          <h2>2. How We Use Your Information</h2>
          <p>Since we do not collect personal data, accounts, or uploaded files, there is no user data to process, sell, or share. We do not require you to create an account or provide an email address to use the service.</p>

          <h2>3. Data Security and Storage</h2>
          <ul>
            <li><strong>0% Server Upload:</strong> All video-to-MP3 conversions happen 100% locally on your device.</li>
            <li><strong>No File Storage:</strong> Your files are never transmitted to us, meaning they cannot be leaked, stored, or accessed by third parties.</li>
            <li><strong>Automatic Deletion:</strong> Once you close the browser tab, the processed files remain only on your device.</li>
          </ul>

          <h2>4. Cookies and Tracking</h2>
          <p>We do not use tracking cookies or collect personal data. Any basic analytics used are completely anonymized to monitor server performance (e.g., page load speed) and do not track individual user behavior.</p>

          <h2>5. Children's Privacy</h2>
          <p>Our service is safe for users of all ages. We do not knowingly collect personal information from anyone, including children under 13.</p>

          <h2>6. Changes to This Policy</h2>
          <p>We may update this Privacy Policy as needed. Any changes take effect upon posting on this page.</p>

          <h2>7. Contact Us</h2>
          <p>If you have any questions about this Privacy Policy, please contact us via our <a href="/contact">Contact page</a>.</p>
        </div>
      </div>
    </main>
  );
}