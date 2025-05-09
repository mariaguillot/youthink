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

      img {
        width: 100%;
        height: 100%;
        margin-top: 0.5rem;
        fill: hsl(0, 0.00%, 0.00%);
      }
    </style>

    <img src="img/youthink.svg">
  `
  }
}

customElements.define('logo-component', Logo)