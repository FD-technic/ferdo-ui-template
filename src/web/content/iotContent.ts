import type { ProjectType } from "../components/Projects/ProjectType";
import image from "./images/ESP32-weather.jpg"

export const iotContent: ProjectType = {
    badge: "Automatisation. Monitoring. MQTT.",
    title: "Home IoT",
    subtitle: "Modular IoT platform",

    description:
        "Home IoT is a modular IoT platform for collecting sensor data, monitoring home conditions and controlling smart devices. It       connects ESP32-based hardware with a Spring Boot backend to provide   reliable data collection, REST APIs and a foundation for future home   automation.",

    technologies: [
        "Spring Boot",
        "PostgreSQL",
        "C++",
        "Docker",
        "Linux"
    ],

    action: {
            label: "Repository",
            href: "https://github.com/FD-technic/iot-server",
            variant: "accent",
            weight: "font-bold",
            size: "sm"
        },
    repositories: [
        {
            label: "IoT server",
            href: "https://github.com/FD-technic/iot-server",
            variant: "border-primary",
            weight: "",
            size: "sm"
        },
        {
            label: "IoT devices",
            href: "https://github.com/FD-technic/iot-devices",
            variant: "border-primary",
            weight: "",
            size: "sm"
        },
    ],
    image: {
        src: image,
        alt: "ESP32 weather station",
        width: 400}
    
};