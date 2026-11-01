import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Terms of Service - videotomp3.tools",
  description: "Terms of Service for using videotomp3.tools. Free forever, local video to MP3 converter.",
};

export default function Terms() {
  return (
    <main className="main">
      <div className="legal-card">
        <h1 className="main__title">Terms of Service</h1>
        <div className="content">
          <p>These Terms of Service govern your use of videotomp3.tools. By accessing or using our website, you agree to be bound by these Terms.</p>

          <h2>1. Service Description</h2>
          <p>videotomp3.tools provides a free, browser-based tool that converts video files (MP4, MOV, AVI, etc.) into MP3 audio. The service operates entirely locally on your device (0% server upload).</p>

          <h2>2. Access and Availability</h2>
          <p>We provide this tool on a "Free Forever" basis. No signup, account, or payment is required. We reserve the right to modify, suspend, or discontinue the service at any time without prior notice, though we intend to keep it available indefinitely.</p>

          <h2>3. Copyright Notice</h2>
          <p>The design, code, and content of videotomp3.tools are the property of the website owner and are protected by copyright laws. You may not reproduce, decompile, or reverse engineer any part of the website without prior written consent.</p>

          <h2>4. License to Use</h2>
          <p>You are granted a non-exclusive, personal, and non-transferable license to use this tool for lawful purposes. You agree not to use the tool to convert copyrighted material without the express permission of the copyright owner.</p>

          <h2>5. Limitations of Liability</h2>
          <p>The service is provided "as is" and "as available" without any warranties of any kind, either express or implied. We do not guarantee that the conversion will always be error-free or that files will not be corrupted. In no event shall videotomp3.tools be liable for any damages (including data loss) arising from the use or inability to use the service.</p>

          <h2>6. User Responsibilities</h2>
          <p>You are solely responsible for the files you process using this tool. You warrant that you have the legal right to convert any video files you use, and that your use of the tool complies with all applicable local, national, and international laws.</p>

          <h2>7. Governing Law</h2>
          <p>These Terms shall be governed by and construed in accordance with the laws of your respective jurisdiction, without regard to its conflict of law provisions.</p>

          <h2>8. Contact Information</h2>
          <p>For any inquiries regarding these Terms, please contact us via our <a href="/contact">Contact page</a>.</p>
        </div>
      </div>
    </main>
  );
}