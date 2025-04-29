# Marker-based 3D Model AR with AR.js

This project uses **AR.js** to display a 3D model on top of a **custom marker image** using your device camera — all in the browser! It’s fast, lightweight, and doesn’t require any app installation.

**Live Demo / Deployment:** [Try it](https://Mragankk.github.io/AR.js-/)

![Marker Image](./marker/marker.jpg)

# AR.js

[AR.js](https://github.com/AR-js-org/AR.js) is an efficient Augmented Reality framework built with JavaScript that works directly in the browser. It's designed for fast performance even on mobile phones and supports:

- Marker-based AR (using predefined or custom markers)
- Location-based AR (geo AR)
- Integration with A-Frame and Three.js

  ##  Custom Marker

This project uses a custom marker that you can find in the `/marker` directory.

To create your own custom marker:
Use the **AR.js Marker Generator Tool**  
[https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html](https://jeromeetienne.github.io/AR.js/three.js/examples/marker-training/examples/generator.html)

Steps:
1. Upload your marker image (black-and-white with strong contrast recommended).
2. Download the `.patt` file and image.
3. Replace the current marker in this repo (`marker/`) with your new one.
