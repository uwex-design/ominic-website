// SEÇÃO OMINIC DESTAQUES SCROLL
// Lenis container “duro” para a seção

const hardWrapper = document.getElementById("hard-lenis-wrapper");
const hardContent = document.getElementById("hard-lenis-content");

const lenisHard = new Lenis({
	wrapper: hardWrapper,
	content: hardContent,
	autoRaf: true,
	// Config mais “dura”: pouca suavização, resposta rápida
	speed: 2.5, // mais alto = avança mais por delta (sensação direta)
	damping: 0.25, // mais alto = amortecimento menor (menos cauda suave)
	lerp: 0.35, // maior = interpolação mais rápida (menos suavização)
});

// Synchronize Lenis scrolling with GSAP's ScrollTrigger plugin
lenis.on("scroll", ScrollTrigger.update);

// Add Lenis's requestAnimationFrame (raf) method to GSAP's ticker
// This ensures Lenis's smooth scroll animation updates on each GSAP tick
gsap.ticker.add((time) => {
	lenis.raf(time * 1000); // Convert time from seconds to milliseconds
});

// Disable lag smoothing in GSAP to prevent any delay in scroll animations
gsap.ticker.lagSmoothing(0);
