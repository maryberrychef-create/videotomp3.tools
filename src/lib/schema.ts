export const schema = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "WebApplication",
      "@id": "https://videotomp3.tools/#webapp",
      "name": "videotomp3.tools",
      "url": "https://videotomp3.tools",
      "applicationCategory": "MultimediaApplication",
      "operatingSystem": "Any",
      "browserRequirements": "Requires JavaScript",
      "offers": {
        "@type": "Offer",
        "price": "0",
        "priceCurrency": "USD"
      },
      "featureList": [
        "Free Forever",
        "0% Server Upload",
        "Works on All Devices",
        "No Software Installation",
        "Maximum MP3 Quality (320kbps)",
        "Unlimited Conversions"
      ]
    },
    {
      "@type": "HowTo",
      "@id": "https://videotomp3.tools/#howto",
      "name": "How to Convert Video to MP3",
      "step": [
        {
          "@type": "HowToStep",
          "name": "Upload Video",
          "text": "Drag and drop your video file or click to browse."
        },
        {
          "@type": "HowToStep",
          "name": "Convert",
          "text": "Click the Convert to MP3 button. The conversion happens locally in your browser."
        },
        {
          "@type": "HowToStep",
          "name": "Download",
          "text": "Download your MP3 file instantly."
        }
      ]
    },
    {
      "@type": "FAQPage",
      "@id": "https://videotomp3.tools/#faq",
      "mainEntity": [
        {
          "@type": "Question",
          "name": "Are my video files uploaded to a server?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No. The conversion runs entirely in your browser using WebAssembly. 0% server upload. Your file never leaves your device."
          }
        },
        {
          "@type": "Question",
          "name": "Do I need to sign up or create an account?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "No sign up is required. The tool is 100% free and runs entirely in your browser."
          }
        },
        {
          "@type": "Question",
          "name": "Which video formats are supported?",
          "acceptedAnswer": {
            "@type": "Answer",
            "text": "You can convert MP4, MOV, AVI, WEBM, MKV, M4V, MPEG, FLV, and WMV files to MP3 audio."
          }
        }
      ]
    }
  ]
};