const scanButton = document.getElementById('start-scan');
const scanResultText = document.getElementById('scan-result-text');
const downloadReportLink = document.getElementById('download-report');

// Function to simulate the scan with an animated progress bar
function performScan() {
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
            const isInfected = Math.random() < 0.5; // Simulate result (50% chance of infection).

            if (isInfected) {
                scanResultText.innerHTML = 'Virus Found: The file is infected.';
            } else {
                scanResultText.innerHTML = 'No Virus Found: The file is safe.';
            }

            downloadReportLink.style.display = 'block';
        }
    }, 20); // Simulated scanning time (2 seconds).
}

// Add event listener to the scan button
scanButton.addEventListener('click', () => {
    performScan();
});
