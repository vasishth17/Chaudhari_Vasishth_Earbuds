document.addEventListener("DOMContentLoaded", function () {
    // Data array for hotspot annotations and descriptions
    const hotspotData = [
        {
            slot: "hotspot-1",
            annotation: "Silicone Tips",
            description: "These are the comfortable silicone tips for the earbuds.",
            img: "../ar_icon.png"
        },
        {
            slot: "hotspot-3",
            annotation: "LED",
            description: "Indicates battery and connection status."
        },
        {
            slot: "hotspot-4",
            annotation: "Charging Connectors",
            description: "Metallic connectors used to charge the earbuds."
        },
        {
            slot: "hotspot-5",
            annotation: "Touch Control",
            description: "Sensitive touch area for controlling playback and calls."
        },
        {
            slot: "hotspot-6",
            annotation: "Active Noise Cancellation",
            description: "Technology to reduce ambient noise for a clearer audio experience."
        },
        {
            slot: "hotspot-7",
            annotation: "Battery",
            description: "Powers the earbuds for several hours of playback."
        }
    ];

    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");

    function modelLoaded() {
        // Start auto-rotation when the model is loaded
        model.setAttribute('auto-rotate', '');

        hotspots.forEach(hotspot => {
            const annotation = hotspot.querySelector('.HotspotAnnotation');

            // Initialize GSAP state for opacity and position
            gsap.set(annotation, { autoAlpha: 0, y: 10 });

            hotspot.style.display = "block";
        });
    }

    function showInfo() {
        // Pause auto-rotation
        model.removeAttribute('auto-rotate');

        const annotation = this.querySelector('.HotspotAnnotation');
        const hotspotInfo = hotspotData.find(hotspot => hotspot.slot === this.getAttribute("slot"));

        if (hotspotInfo) {
            annotation.querySelector('h2').textContent = hotspotInfo.annotation;
            annotation.querySelector('p').textContent = hotspotInfo.description;
            // annotation.querySelector('img').src = hotspotInfo.image;

            // GSAP animation for fade in and slight upward movement
            gsap.to(annotation, { autoAlpha: 1, y: 0, duration: 0.5 });
        }
    }

    function hideInfo() {
        // Resume auto-rotation
        model.setAttribute('auto-rotate', '');

        const annotation = this.querySelector('.HotspotAnnotation');

        // GSAP animation for fade out and slight downward movement
        gsap.to(annotation, { autoAlpha: 0, y: 10, duration: 0.5 });

        annotation.querySelector('h2').textContent = "";
        annotation.querySelector('p').textContent = "";
        // annotation.querySelector('img').textContent = "";
    }

    model.addEventListener("load", modelLoaded);

    hotspots.forEach(hotspot => {
        hotspot.addEventListener("mouseover", showInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });
});