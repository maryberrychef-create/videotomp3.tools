import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Contact Us - videotomp3.tools",
  description: "Get in touch with the videotomp3.tools team for support, feedback, or inquiries.",
};

export default function Contact() {
  return (
    <main className="main">
      <div className="legal-card">
        <h1 className="main__title">Contact Us</h1>
        <div className="content">
          <p>If you have any questions, feedback, or need support with the tool, please reach out to us. We are always happy to help improve the service.</p>
          
          <h2>Email Support</h2>
          <p>For all inquiries, including technical support, privacy questions, or general feedback, please email us at:</p>
          <p><strong><a href="mailto:support@videotomp3.tools">support@videotomp3.tools</a></strong></p>

          <h2>Response Time</h2>
          <p>We aim to respond to all messages within 24 to 48 hours during business days.</p>

          <h2>Feedback</h2>
          <p>If you encounter any issues with the conversion process or have suggestions for new features, please include your browser type and operating system in your email so we can assist you faster.</p>
        </div>
      </div>
    </main>
  );
}