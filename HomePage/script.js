// Push Notifications
const notifyBtn = document.getElementById('notify-btn');

notifyBtn.addEventListener('click', () => {
  if ('Notification' in window && navigator.serviceWorker) {
    Notification.requestPermission().then((permission) => {
      if (permission === 'granted') {
        notifyBtn.textContent = 'Notifications Enabled!';
        notifyBtn.style.backgroundColor = '#007bff'; // Change button color
        navigator.serviceWorker.register('sw.js').then((registration) => {
          registration.showNotification('Notifications Enabled!', {
            body: 'You will now receive updates.',
            icon: 'https://via.placeholder.com/128', // Replace with your icon URL
          });
        });
      } else {
        alert('Please allow notifications in your browser settings.');
      }
    });
  } else {
    alert('Push notifications are not supported in your browser.');
  }
});

// Scroll Animation
const features = document.querySelectorAll('.feature');

window.addEventListener('scroll', () => {
  features.forEach((feature) => {
    const position = feature.getBoundingClientRect().top;
    if (position < window.innerHeight) {
      feature.style.opacity = 1;
      feature.style.transform = 'translateY(0)';
    } else {
      feature.style.opacity = 0;
      feature.style.transform = 'translateY(50px)';
    }
  });
});



function redirectTo(page) {
  window.location.href = page;
}
