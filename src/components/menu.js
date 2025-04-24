class Menu extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })

    this.data = []
  }

  async connectedCallback() {
    await this.loadData()
    await this.render()
  }

  loadData() {
    this.data.menu = [
      {
        title: "música",
        url: ""
      },
      {
        title: "agenda",
        url: ""          
      },
      {
        title: "clásica",
        url: ""          
      },
      {
        title: "hablar",
        url: ""          
      },
      {
        title: "escena",
        url: ""          
      },
      {
        title: "infantil",
        url: ""          
      },
      {
        title: "cine",
        url: ""          
      },
      {
        title: "arte",
        url: ""          
      },
      {
        title: "la guia",
        url: ""          
      }
    ]
  }

render() {
  this.shadow.innerHTML =
  /*html*/`
    <style>
      *{
        box-sizing: border-box;
      }

      ul{
        list-style: none;
        display: flex;
        flex-direction: column;
        gap: 1rem;
      }

      a{
        text-decoration:none;
        text-transform: capitalize;
        font-size: 1.5rem;
        color: black;
      }
    </style>

    <nav class="menu">
      <ul></ul>
    </nav>
  `

    this.data.menu.forEach(menu => {
      const ul = this.shadow.querySelector("ul")

      const li = document.createElement('li')
      ul.appendChild(li)

      const a = document.createElement('a')
      a.href = menu.url
      a.textContent = menu.title
      li.appendChild(a)

    })
  }
}

customElements.define('menu-component', Menu)