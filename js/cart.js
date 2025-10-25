// Snipcart custom behaviours (optional)
document.addEventListener('snipcart.ready', () => {
  Snipcart.events.on('item.added', (item) => {
    console.log('Added:', item.name);
  });
});
