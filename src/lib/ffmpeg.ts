let ffmpegInstance: any = null;

export async function loadEngine() {
  if (ffmpegInstance) return ffmpegInstance;
  
  const { FFmpeg } = await import("@ffmpeg/ffmpeg");
  const { toBlobURL } = await import("@ffmpeg/util");
  
  const ffmpeg = new FFmpeg();
  const baseURL = "https://unpkg.com/@ffmpeg/core@0.12.6/dist/umd";
  
  await ffmpeg.load({
    coreURL: await toBlobURL(`${baseURL}/ffmpeg-core.js`, "text/javascript"),
    wasmURL: await toBlobURL(`${baseURL}/ffmpeg-core.wasm`, "application/wasm"),
  });

  ffmpegInstance = ffmpeg;
  return ffmpeg;
}

export async function convertToMp3(file: File, bitrate: string, onProgress: (p: number) => void) {
  const ffmpeg = await loadEngine();
  const { fetchFile } = await import("@ffmpeg/util");

  ffmpeg.on("progress", ({ progress }: any) => onProgress(progress));

  const ext = file.name.split('.').pop() || 'mp4';
  const inputName = `input.${ext}`;
  const outputName = `output.mp3`;

  await ffmpeg.writeFile(inputName, await fetchFile(file));
  await ffmpeg.exec(["-i", inputName, "-b:a", bitrate, "-threads", "1", outputName]);
  
  await ffmpeg.deleteFile(inputName);
  const data = await ffmpeg.readFile(outputName);
  await ffmpeg.deleteFile(outputName);
  
  return new Blob([data as any], { type: "audio/mpeg" });
}