export const createElement = (container: string, html: string) => {
  const element = document.createElement(container);
  element.innerHTML = html;
  return element;
};
