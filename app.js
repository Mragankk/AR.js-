document.addEventListener('DOMContentLoaded', function() {
    const uploadInput = document.getElementById('marker-upload');
    const generateBtn = document.getElementById('generate-marker');
    const downloadLinks = document.getElementById('download-links');
    const patternDownload = document.getElementById('pattern-download');
    const startARBtn = document.getElementById('start-ar');
    const uploadSection = document.getElementById('upload-section');
    const arScene = document.getElementById('ar-scene');
    const customMarker = document.getElementById('custom-marker');
    
    let markerImage = null;
    let patternFileContent = null;
    
    uploadInput.addEventListener('change', function(e) {
        markerImage = e.target.files[0];
    });
    
    generateBtn.addEventListener('click', function() {
        if (!markerImage) {
            alert('Please upload an image first');
            return;
        }
        
        // Call the marker generator API
        generateMarkerPattern(markerImage)
            .then(patternData => {
                patternFileContent = patternData;
                
                // Create a downloadable pattern file
                const blob = new Blob([patternData], {type: 'text/plain'});
                const url = URL.createObjectURL(blob);
                patternDownload.href = url;
                
                downloadLinks.classList.remove('hidden');
            })
            .catch(error => {
                console.error('Error generating marker:', error);
                alert('Failed to generate marker. Please try a different image.');
            });
    });
    
    startARBtn.addEventListener('click', function() {
        if (!patternFileContent) {
            alert('Please generate a marker pattern first');
            return;
        }
        
        // Save pattern file to a temporary URL
        const blob = new Blob([patternFileContent], {type: 'text/plain'});
        const patternUrl = URL.createObjectURL(blob);
        
        // Update the marker with the custom pattern
        customMarker.setAttribute('url', patternUrl);
        
        // Hide upload section and show AR scene
        uploadSection.classList.add('hidden');
        arScene.classList.remove('hidden');
    });
    
    // Function to generate marker pattern
    async function generateMarkerPattern(imageFile) {
        // In a real application, you would either:
        // 1. Use a server-side API to generate the pattern
        // 2. Use a client-side library if available
        
        // For this example, we'll simulate the pattern generation
        // In a real app, you would use the AR.js marker training tool
        
        return new Promise((resolve, reject) => {
            // Simulate API call to marker generator
            // In reality, you would send the image to a server or use a client-side library
            
            // This is a placeholder for the actual pattern generation
            setTimeout(() => {
                // This is a simplified example - in reality, you'd need to generate a proper .patt file
                const dummyPattern = generateDummyPattern();
                resolve(dummyPattern);
            }, 1500);
        });
    }
    
    // Generate a dummy pattern for demonstration
    function generateDummyPattern() {
        let pattern = '';
        for (let i = 0; i < 16; i++) {
            for (let j = 0; j < 16; j++) {
                pattern += Math.floor(Math.random() * 255) + ' ';
            }
            pattern += '\n';
        }
        return pattern;
    }
});
