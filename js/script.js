(function () {
    // Variables
    const model = document.querySelector("#model");
    const hotspots = document.querySelectorAll(".Hotspot");
    const hotspotData = [
        {
            slot: "hotspot-1",
            annotation: "Silicone Tips",
            description: "These are the comfortable silicone tips for the earbuds.",
            img: "../images/silicon tips.jpg"
        },
        {
            slot: "hotspot-3",
            annotation: "LED",
            description: "Indicates battery and connection status.",
            img: "../images/led.jpeg"
        },
        {
            slot: "hotspot-4",
            annotation: "Charging Connectors",
            description: "Metallic connectors used to charge the earbuds.",
            img: "../images/charging_connectors.jpeg"
        },
        {
            slot: "hotspot-5",
            annotation: "Touch Control",
            description: "Sensitive touch area for controlling playback and calls.",
            img: "../images/touch-controls.jpg"
        },
        {
            slot: "hotspot-6",
            annotation: "Active Noise Cancellation",
            description: "Technology to reduce ambient noise for a clearer audio experience.",
            img: "../images/active-noice-cancellation.webp"
        },
        {
            slot: "hotspot-7",
            annotation: "Battery",
            description: "Powers the earbuds for several hours of playback.",
            img: "../images/battery.jpeg"
        }
    ];
    // Functions
    function modelLoaded() {
        hotspots.forEach(hotspot => {
            const annotation = hotspot.querySelector('.HotspotAnnotation');
            gsap.set(annotation, { autoAlpha: 0, y: 10 });
            hotspot.style.display = "block";
        });
    }

    function showInfo() {
        const annotation = this.querySelector('.HotspotAnnotation');
        const hotspotInfo = hotspotData.find(h => h.slot === this.getAttribute("slot"));

        model.removeAttribute('auto-rotate');
        if (hotspotInfo) {
            annotation.querySelector('h2').textContent = hotspotInfo.annotation;
            annotation.querySelector('p').textContent = hotspotInfo.description;

            // Set the image src if it exists in the data and hide it otherwise
            const imageElement = annotation.querySelector('img');
            if (hotspotInfo.img && imageElement) {
                imageElement.src = hotspotInfo.img;
                imageElement.style.display = "block";
            } else {
                imageElement.style.display = "none";
            }

            gsap.to(annotation, { autoAlpha: 1, y: 0, duration: 0.5 });
        }
    }

    function hideInfo() {
        const annotation = this.querySelector('.HotspotAnnotation');
        gsap.to(annotation, { autoAlpha: 0, y: 10, duration: 0.5 });
        annotation.querySelector('h2').textContent = "";
        annotation.querySelector('p').textContent = "";
        annotation.querySelector('img').style.display = "none"; // hide the image on mouse out

        model.setAttribute('auto-rotate', '');
    }

    // Event Listeners
    model.addEventListener("load", modelLoaded);

    hotspots.forEach(function (hotspot) {
        hotspot.addEventListener("mouseover", showInfo);
        hotspot.addEventListener("mouseout", hideInfo);
    });
})();