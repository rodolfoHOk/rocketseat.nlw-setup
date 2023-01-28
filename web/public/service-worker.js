// console.log('Service Worker Running');

self.addEventListener('push', function (event) {
  const body = event.data.text() ?? '';

  event.waitUntil(
    self.registration.showNotification('Habits', {
      body,
    })
  );
});
