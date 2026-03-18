import { useRef, useState } from "react";

const VIDEO_URL =
  "https://wwdvatksiqhykucqicqz.supabase.co/storage/v1/object/public/video/5_Centimeters_Per_Second_Trailer_720P.mp4";

export function VideoSection() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [isPlaying, setIsPlaying] = useState(true);
  const [isMuted, setIsMuted] = useState(false);

  const togglePlay = () => {
    if (!videoRef.current) return;
    if (isPlaying) {
      videoRef.current.pause();
    } else {
      videoRef.current.play();
    }
    setIsPlaying(!isPlaying);
  };

  const toggleMute = () => {
    if (!videoRef.current) return;
    videoRef.current.muted = !isMuted;
    setIsMuted(!isMuted);
  };

  return (
    <section
      id="video"
      className="relative w-full bg-black py-20 px-4 overflow-hidden flex flex-col items-center"
    >
      {/* Background glow */}
      <div
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 40% at 50% 60%, rgba(255,107,107,0.15) 0%, transparent 70%)",
        }}
      />

      {/* Section heading */}
      <div className="relative z-10 text-center mb-10">
        <p className="text-[#ff6b6bff] text-sm uppercase tracking-widest font-semibold mb-2">
          Featured
        </p>
        <h2 className="text-white text-3xl sm:text-4xl font-bold">
          Watch the Trailer
        </h2>
        <p className="text-white/50 mt-2 text-sm">5 Centimeters Per Second</p>
      </div>

      {/* Video card */}
      <div
        className="relative z-10 w-full max-w-3xl rounded-2xl overflow-hidden"
        style={{
          boxShadow:
            "0 0 0 1px rgba(255,255,255,0.08), 0 25px 60px rgba(0,0,0,0.7), 0 0 40px rgba(255,107,107,0.1)",
          background: "rgba(255,255,255,0.03)",
          backdropFilter: "blur(10px)",
        }}
      >
        <video
          ref={videoRef}
          src={VIDEO_URL}
          className="w-full aspect-video object-cover"
          autoPlay
          loop
          muted
          onPlay={() => setIsPlaying(true)}
          onPause={() => setIsPlaying(false)}
        />

        {/* Overlay controls */}
        <div
          className="absolute inset-0 flex flex-col justify-between p-4 opacity-0 hover:opacity-100 transition-opacity duration-300"
          style={{
            background:
              "linear-gradient(to top, rgba(0,0,0,0.6) 0%, transparent 50%)",
          }}
        >
          {/* Top right: mute button */}
          <div className="flex justify-end">
            <button
              onClick={toggleMute}
              className="bg-white/10 hover:bg-white/20 backdrop-blur-sm text-white rounded-full w-9 h-9 flex items-center justify-center transition-all"
              title={isMuted ? "Unmute" : "Mute"}
            >
              <span className="material-symbols-outlined text-[18px]">
                {isMuted ? "off" : "volume_up"}
              </span>
            </button>
          </div>

          {/* Bottom center: play/pause button */}
          <div className="flex justify-center mb-4">
            <button
              onClick={togglePlay}
              className="bg-[#ff6b6bff] hover:bg-[#ff5252] text-white rounded-full w-14 h-14 flex items-center justify-center transition-all shadow-lg"
              style={{ boxShadow: "0 0 20px rgba(255,107,107,0.5)" }}
              title={isPlaying ? "Pause" : "Play"}
            >
              <span className="material-symbols-outlined text-[28px]">
                {isPlaying ? "pause" : "play_arrow"}
              </span>
            </button>
          </div>
        </div>

        {/* Center play button when not playing and overlay is not hovered */}
        {!isPlaying && (
          <div
            className="absolute inset-0 flex items-center justify-center cursor-pointer"
            onClick={togglePlay}
          >
            <div
              className="bg-[#ff6b6bff] hover:bg-[#ff5252] text-white rounded-full w-16 h-16 flex items-center justify-center transition-all"
              style={{ boxShadow: "0 0 30px rgba(255,107,107,0.6)" }}
            >
              <span className="material-symbols-outlined text-[32px]">
                play_arrow
              </span>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}

export default VideoSection;
