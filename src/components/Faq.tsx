export default function Faq() {
  return (
    <section className="faq">
      <h2>Frequently Asked Questions</h2>

      <details>
        <summary>Why did you build this tool?</summary>
        <p>Most online services eventually become paid or limit your daily usage. We built videotomp3.tools to provide a simple, private tool that just works. No hidden fees, no limits, and 100% free forever.</p>
      </details>

      <details>
        <summary>Are my video files uploaded to a server?</summary>
        <p>No. The conversion runs entirely in your browser using WebAssembly. 0% server upload. Your file never leaves your device.</p>
      </details>

      <details>
        <summary>Do I need to sign up or create an account?</summary>
        <p>No! You can start converting immediately without any registration or email. Just drop your file and begin - it's that simple.</p>
      </details>

      <details>
        <summary>Which video formats are supported?</summary>
        <p>You can convert MP4, MOV, AVI, WEBM, MKV, M4V, MPEG, FLV, and WMV files to MP3 audio.</p>
      </details>

      <details>
        <summary>What is the maximum file size limit?</summary>
        <p>There is no artificial limit. Because conversion happens locally, the maximum file size depends on your device's memory. Desktop browsers handle files up to 2GB smoothly.</p>
      </details>

      <details>
        <summary>Will this service remain free forever?</summary>
        <p>Yes. videotomp3.tools is 100% free forever. Local processing keeps our operating costs near zero, allowing us to keep it completely free for everyone.</p>
      </details>
    </section>
  );
}