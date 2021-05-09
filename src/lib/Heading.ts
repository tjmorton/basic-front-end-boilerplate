class Heading {
  #elem: HTMLHeadingElement;

  // Should probably inject document somewhere...
  constructor(headingText: string) {
    this.#elem = document.createElement('h2');
    this.#elem.innerHTML = headingText;
  }

  get elem(): HTMLHeadingElement {
    return this.#elem;
  }
}

export default Heading;
