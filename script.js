const videoElement = document.getElementById('video');
const button = document.getElementById('button');

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

button.addEventListener('click', async () => {
  button.disabled = true;
  await videoElement.requestPictureInPicture();
  button.disabled = false;
});

// Call function
selectScreen();
