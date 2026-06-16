// === app.js ===
window.onload = function() {
    // Automatically access the user's camera
    const originalVideo = document.getElementById('originalVideo');
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                originalVideo.srcObject = stream;
                originalVideo.play();
            })
            .catch(function(error) {
                console.error("Error accessing camera: ", error);
            });
    } else {
        console.error('getUserMedia not supported in this browser.');
    }

    // Add event listener for enhancements
    document.getElementById('applyEnhancements').addEventListener('click', applyEnhancements);

    function applyEnhancements() {
        const brightness = document.getElementById('brightness').value;
        const contrast = document.getElementById('contrast').value;
        const exposure = document.getElementById('exposure').value;
        const shadows = document.getElementById('shadows').value;
        const sharpness = document.getElementById('sharpness').value;
        const color = document.getElementById('color').value;

        // Your enhancement logic to apply on 'originalVideo' goes here...
        console.log('Applying Enhancements:', {
            brightness, contrast, exposure, shadows, sharpness, color
        });

        // For example, apply these values to the enhancedVideo using a canvas or a method of your choice
    }

    // Add event listeners for stream control buttons
    document.getElementById('startStream').addEventListener('click', startStreaming);
    document.getElementById('stopStream').addEventListener('click', stopStreaming);

    function startStreaming() {
        const destination = document.getElementById('destinationSelect').value;
        const streamKey = document.getElementById('streamKey').value;
        console.log(`Starting stream to ${destination} with key ${streamKey}`);
        // Start the streaming logic here...
    }

    function stopStreaming() {
        console.log('Stopping stream');
        // Stop the streaming logic here...
    }

    // Add listeners for presets
    document.querySelectorAll('.preset').forEach(button => {
        button.addEventListener('click', function() {
            const preset = this.getAttribute('data-preset');
            applyPreset(preset);
        });
    });

    function applyPreset(preset) {
        console.log('Applying preset:', preset);
        // Logic to apply preset settings to sliders
    }
};