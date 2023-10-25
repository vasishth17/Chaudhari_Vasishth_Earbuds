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
const modelLoaded = () => {
    hotspots.forEach(hotspot => {
        const annotation = hotspot.querySelector('.HotspotAnnotation');
        gsap.set(annotation, { autoAlpha: 0, y: 10 });
        hotspot.style.display = "block";
    });

    model.setAttribute('auto-rotate', '');
}

const showInfo = function () {
    const annotation = this.querySelector('.HotspotAnnotation');
    const hotspotInfo = hotspotData.find(h => h.slot === this.getAttribute("slot"));

    model.removeAttribute('auto-rotate');

    if (hotspotInfo) {
        const { annotation: hotspotAnnotation, description, img } = hotspotInfo;
        annotation.querySelector('h2').textContent = hotspotAnnotation;
        annotation.querySelector('p').textContent = description;

        const imageElement = annotation.querySelector('img');
        if (img && imageElement) {
            imageElement.src = img;
            imageElement.style.display = "block";
        } else {
            imageElement.style.display = "none";
        }

        gsap.to(annotation, { autoAlpha: 1, y: 0, duration: 0.5 });

        // Adjust position if the annotation is out of viewport
        const rect = annotation.getBoundingClientRect();
    }
}

const hideInfo = function () {
    const annotation = this.querySelector('.HotspotAnnotation');
    gsap.to(annotation, { autoAlpha: 0, y: 10, duration: 0.5 });
    annotation.querySelector('h2').textContent = "";
    annotation.querySelector('p').textContent = "";
    annotation.querySelector('img').style.display = "none";

    model.setAttribute('auto-rotate', '');
}

// Event Listeners
model.addEventListener("load", modelLoaded);

hotspots.forEach(hotspot => {
    hotspot.addEventListener("mouseover", showInfo);
    hotspot.addEventListener("mouseout", hideInfo);
});
