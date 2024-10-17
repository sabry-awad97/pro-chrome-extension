console.log("Content script running");

// Add some basic functionality
function injectGreeting() {
  const greeting = document.createElement("div");
  greeting.textContent = "Hello from the Chrome extension!";
  document.body.prepend(greeting);
}

injectGreeting();

export {};
