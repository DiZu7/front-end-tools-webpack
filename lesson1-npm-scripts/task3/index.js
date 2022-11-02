export function createButton(buttonText) {
  const bodyElem = document.querySelector('body');
  const element = document.createElement('button');
  element.textContent = buttonText;
  body.append(element);
}

createButton('Send email');
