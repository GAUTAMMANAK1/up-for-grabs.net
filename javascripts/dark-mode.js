/* eslint block-scoped-var: "off" */

// Wrap your code in a function to handle possible async operations
async function setupDarkModeListener() {
  // Use a try-catch block for error handling
  try {
    const root = document.documentElement;
    const viewModeElement = document.getElementById('view-mode');
    const viewModeAnchor = document.getElementById('view-mode-a');
    const goBackHomeElement = document.getElementById('go-back-home');

    if (!root || !viewModeElement || !viewModeAnchor || !goBackHomeElement) {
      throw new Error('One or more required elements not found.');
    }

    const storedValue = window.sessionStorage.getItem('mode');
    let lightModeEnabled = !(storedValue && storedValue === 'dark');

    function setDarkMode() {
      root.style.setProperty('--body-back', '#1a2025');
      // Add more style property assignments here for dark mode

      // Update the image sources and title attributes
      goBackHomeElement.setAttribute('src', '/images/logo_dark_1.png');
      viewModeElement.setAttribute('src', '/images/sun-light.png');
      viewModeAnchor.title = 'light-mode';
    }

    function setLightMode() {
      root.style.setProperty('--body-back', '#f9f9f9');
      // Add more style property assignments here for light mode

      // Update the image sources and title attributes
      goBackHomeElement.setAttribute('src', '/images/logo.png');
      viewModeElement.setAttribute('src', '/images/Dim-Night.png');
      viewModeAnchor.title = 'dark-mode';
    }

    function updateValue(value) {
      window.sessionStorage.setItem('mode', value);
      lightModeEnabled = value === 'light';
    }

    if (!lightModeEnabled) {
      setDarkMode();
    }

    viewModeAnchor.addEventListener('click', () => {
      if (lightModeEnabled) {
        setDarkMode();
        updateValue('dark');
      } else {
        setLightMode();
        updateValue('light');
      }
    });
  } catch (error) {
    console.error('Error in setupDarkModeListener:', error);
  }
}

// Export the setupDarkModeListener function
export default setupDarkModeListener;
