import React, {useEffect} from "react"

export function BackgroundVideo() {
  useEffect(() => { 
    const video = document.getElementById("backgroundVideo")
    video.currentTime = 6;

    const handleVideoEnded = () => {
      video.currentTime = 6;
      video.play();
    };

    // Agregar el oyente de eventos "ended" al video
    video.addEventListener('ended', handleVideoEnded);
  }, [])


	return (
		<>
			<video id="backgroundVideo" playsInline autoPlay muted>
				<source
					src="https://www.shutterstock.com/shutterstock/videos/1083687940/preview/stock-footage-futuristic-technology-animation-cpu-gpu-circuit-board-neon-d-visualization-microchip-augmented.webm"
					type="video/webm"
				/>
			</video>
			<div className="dark-glass"></div>
		</>
	)
}
