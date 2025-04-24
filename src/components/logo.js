class Logo extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = []
  }

  async connectedCallback() {
    await this.render()
  }

render() {
  this.shadow.innerHTML =
  /*html*/`
    <style>
      *{
        box-sizing: border-box;

      }

      svg {
        width: 6rem;
        margin-top: 0.5rem;
        fill: hsl(0, 0.00%, 0.00%);
      }
    </style>

    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>google-downasaur</title><path d="M13 2V3H12V9H11V10H9V11H8V12H7V13H5V12H4V11H3V9H2V15H3V16H4V17H5V18H6V22H8V21H7V20H8V19H9V18H10V19H11V22H13V21H12V17H13V16H14V15H15V12H16V13H17V11H15V9H20V8H17V7H22V3H21V2M14 3H15V4H14Z" /></svg>
  `
  }
}

customElements.define('logo-component', Logo)