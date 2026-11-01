"use client";

import { useState, useRef } from "react";

export default function Converter() {
  const [file, setFile] = useState<File | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [progress, setProgress] = useState(0);
  const [downloadUrl, setDownloadUrl] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [bitrate, setBitrate] = useState("192k");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile && droppedFile.type.startsWith("video/")) {
      setFile(droppedFile);
      setError(null);
    } else {
      setError("Please drop a valid video file.");
    }
  };

  const handleConvert = async () => {
    if (!file) return;
    setIsConverting(true);
    setError(null);
    setDownloadUrl(null);

    try {
      const { convertToMp3 } = await import("@/lib/ffmpeg");
      const blob = await convertToMp3(file, bitrate, (p) => setProgress(Math.round(p * 100)));
      const url = URL.createObjectURL(blob);
      setDownloadUrl(url);
    } catch (err) {
      console.error("Conversion error details:", err);
      setError("Conversion failed. Please try another file.");
    } finally {
      setIsConverting(false);
    }
  };

  return (
    <section className="converter">
      <div
        className="converter__dropzone"
        onDragOver={(e) => e.preventDefault()}
        onDrop={handleDrop}
        onClick={() => fileInputRef.current?.click()}
      >
        <input
          type="file"
          accept="video/*"
          ref={fileInputRef}
          onChange={(e) => setFile(e.target.files?.[0] || null)}
          hidden
        />
        
        <svg className="converter__icon" width="64" height="64" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
          <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
          <polyline points="17 8 12 3 7 8" />
          <line x1="12" y1="3" x2="12" y2="15" />
        </svg>

        <p>{file ? file.name : "Drag & drop your video here, or click to browse"}</p>
        <span className="converter__formats">Supports MP4, MOV, AVI, WEBM, MKV and more</span>
      </div>

      <div className="converter__badges">
        <span className="badge"><span className="badge__check">✓</span> 100% Free</span>
        <span className="badge"><span className="badge__check">✓</span> No Signup</span>
        <span className="badge"><span className="badge__check">✓</span> Runs in Browser</span>
      </div>

      {error && <p className="converter__error">{error}</p>}

      {file && (
        <div className="converter__controls">
          <select
            className="converter__select"
            value={bitrate}
            onChange={(e) => setBitrate(e.target.value)}
          >
            <option value="320k">320 kbps (High Quality)</option>
            <option value="192k">192 kbps (Standard)</option>
            <option value="128k">128 kbps (Smaller Size)</option>
          </select>

          <button
            className="converter__btn"
            onClick={handleConvert}
            disabled={isConverting}
          >
            {isConverting ? `Converting... ${progress}%` : "Convert to MP3"}
          </button>
        </div>
      )}

      {downloadUrl && (
        <div className="converter__result">
          <p>Conversion complete!</p>
          <a href={downloadUrl} download="audio.mp3" className="converter__download">
            Download MP3
          </a>
        </div>
      )}
    </section>
  );
}