import Converter from "@/components/Converter";
import Faq from "@/components/Faq";
import { schema } from "@/lib/schema";

export default function Home() {
  return (
    <main className="main">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <h1 className="main__title">Free Video to MP3 Converter Online</h1>
      <p className="main__subtitle">
        Convert MP4, MOV, AVI, WEBM, MKV to high-quality MP3 audio instantly in your browser. Upload any video file and get your audio in seconds with our 100% free, privacy-first tool. No signup, no software needed.
      </p>

      <Converter />

      <section className="features" id="features">
        <h2>Why choose videotomp3.tools?</h2>
        <ul className="features__list">
          <li>Free Forever</li>
          <li>0% Server Upload</li>
          <li>Works on All Devices</li>
          <li>No Software Installation</li>
          <li>Maximum MP3 Quality (320kbps)</li>
          <li>Unlimited Conversions</li>
        </ul>
      </section>

      <div id="faq">
        <Faq />
      </div>
    </main>
  );
}