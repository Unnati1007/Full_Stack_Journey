// previousSibling Traversal
// Select buttons (corrected typo from getElementsById to getElementById)
const button1element = document.getElementById('button1');
const button2element = document.getElementById('button2');

console.log(button1element);
console.log(button2element);

// previousSibling targets the immediate previous node, which is a whitespace/text node (nodeType 3) due to line breaks in HTML
const text1 = button1element.previousSibling;
const text2 = button2element.previousSibling;
console.log("text1 nodeType is: " + text1.nodeType + " (Text Node)");
console.log("text2 nodeType is: " + text2.nodeType + " (Text Node)");

// If it's a text node (which includes whitespace), this will modify the whitespace content between the paragraph and button
if (text1.nodeType === 3) {
    text1.textContent = " [Space modified: Text 1]";
}
if (text2.nodeType === 3) {
    text2.textContent = " [Space modified: Text 2]";
}

// To target the actual <p> element, we can traverse two siblings back (past the whitespace text node)
const actualParagraph1 = text1.previousSibling; // or button1element.previousElementSibling
if (actualParagraph1 && actualParagraph1.nodeType === 1) {
    actualParagraph1.textContent = "Modified Actual Paragraph 1 Text";
}

console.log(button1element.nextSibling);