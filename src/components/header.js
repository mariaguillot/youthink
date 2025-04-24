class Header extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
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
        align-items: center;
      }

      :host{
        width: 20%;
      }


    </style>

    <header>
      <slot></slot>
    </header>
  `
  }
}

customElements.define('header-component', Header)

