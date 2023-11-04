const scanButton = document.getElementById('start-scan');
const scanResultText = document.getElementById('scan-result-text');
const downloadReportLink = document.getElementById('download-report');

// Function to simulate the scan with an animated progress bar
function performScan(deviceType) {
    scanResultText.innerHTML = 'Scanning...';

    const progressBar = document.createElement('div');
    progressBar.className = 'progress-bar';
    scanResultText.appendChild(progressBar);

    let progress = 0;
    const scanInterval = setInterval(() => {
        progress += 1;
        progressBar.style.width = `${progress}%`;

        if (progress === 100) {
            clearInterval(scanInterval);

            let scanResult = '';
            if (deviceType === 'mobile') {
                // Detect the mobile device type (modify this logic as needed)
                const userAgent = navigator.userAgent;
                if (userAgent.includes('iPhone')) {
                    scanResult = 'You are using an iPhone.';
                } else if (userAgent.includes('Android')) {
                    scanResult = 'You are using an Android device.';
                } else {
                    scanResult = 'You are using a mobile device.';
                }
            } else {
                const isInfected = Math.random() < 0.5; // Simulate result (50% chance of infection).
                scanResult = isInfected ? 'Virus Found: The file is infected.' : 'No Virus Found: The file is safe.';
            }

            scanResultText.innerHTML = scanResult;
            downloadReportLink.style.display = 'block';
        }
    }, 15 * 1000); // Decreased delay to 15 seconds (15 * 1000 milliseconds).
}

// Add event listener to the scan button
scanButton.addEventListener('click', () => {
    const deviceType = document.querySelector('input[name="device"]:checked').value;
    performScan(deviceType);
});
