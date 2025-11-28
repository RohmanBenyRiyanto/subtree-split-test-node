/**
 * Simple greeting function
 * @param {string} name - Name to greet
 * @returns {string} Greeting message
 */
function sayHello(name = "World") {
  return `Hello, ${name}!`;
}

/**
 * Get package version
 * @returns {string} Version number
 */
function getVersion() {
  return "1.0.0";
}

module.exports = {
  sayHello,
  getVersion,
};
