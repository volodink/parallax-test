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
    const absolute = e.absolute;
    const alpha = e.alpha;
    const beta = e.beta;
    const gamma = e.gamma;

    document.getElementById('alpha').innerHTML = alpha;

    document.querySelectorAll('.layer').forEach(layer => {
        const speed = layer.getAttribute('data-speed');
        
        // const x = alpha*(window.innerWidth - e.pageX*speed) / 100;
        // const y = beta*(window.innerHeight - e.pageY*speed) / 100;
        const x = alpha;
        const y = beta;

        console.log(x, y);

        layer.style.transform = `translateX(${x}px) translateY(${y}px)`;
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
