window.onload = (event) => {
    console.log("Page is fully loaded");
    start();
};


function start() {
    if (isMobile()) {
        console.log("Mobile device detected");
        window.addEventListener("deviceorientation", handleOrientation, true);
    } else {
        console.log("Desktop device detected");
        document.addEventListener("mousemove", parallax);
    }
}

function handleOrientation(e) {
    const x = Math.round(e.beta);
    const y = Math.round(e.gamma);
    const z = Math.round(e.alpha);

    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        
        layer.style.transform = `translateX(${x*speed}px) translateY(${y*speed}px)`;
    });
}
  
function isMobile() {
    const regex = /Mobi|Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i;
    return regex.test(navigator.userAgent);
}
  
function parallax(e) {
    this.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        
        const x = (window.innerWidth - e.pageX*speed) / 100;
        const y = (window.innerHeight - e.pageY*speed) / 100;

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
    });
};
