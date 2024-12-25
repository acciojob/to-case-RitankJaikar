function toCase(text) {
  // Convert the text to lowercase and uppercase, and then concatenate them with a hyphen
  return text.toLowerCase() + '-' + text.toUpperCase();
}

// DO not change the code below

const text = prompt("Enter text:");
alert(toCase(text));
