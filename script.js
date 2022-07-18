const videoElement = document.getElementById('video');
const buttonElement = document.getElementById('button');

// Prompt to select media screen
async function selectScreen() {
  try {
    const mediaStream = await navigator.mediaDevices.getDisplayMedia();
    videoElement.srcObject = mediaStream;
    videoElement.onloadedmetadata = () => {
      videoElement.play();
    }
  } catch (error) {
    // Catch Error
    console.log('Whoops, Error Here:', error)
  }
}

// Call function
selectScreen();
