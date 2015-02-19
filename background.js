//lancement de la fenetre qd on clique sur l'apps
chrome.app.runtime.onLaunched.addListener(function() {
 chrome.app.window.create('index.html', {
   bounds: { width: 1024, height: 640 }
 });
});