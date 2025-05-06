class Table extends HTMLElement {

  constructor() {
    super()
    this.shadow = this.attachShadow({ mode: 'open' })
  }

  async connectedCallback() {
    await this.loadData()
    await this.render()
  }

  loadData() {
    this.data = [
      {
        title: 'youthink',
        name: 'Carlos',
        email: 'gambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        title: 'youthink',
        name: 'Maria',
        email: 'gambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        title: 'youthink',
        name: 'Mark',
        email: 'gambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        title: 'youthinkyouthinkyouthinkyouthinkyouthinkyouthinkyouthinkyouthink',
        name: 'Maria',
        email: 'gambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        title: 'youthink',
        name: 'Mark',
        email: 'gambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        title: 'youthink',
        name: 'Maria',
        email: 'gambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
      {
        title: 'youthink',
        name: 'Mark',
        email: 'gambin@gmail.com',
        createdAt: '2024-04-22',
        updatedAt: '2024-04-22'
      },
    ]
  }

render() {
  this.shadow.innerHTML =
  /*html*/`
    <style>
      *{
        box-sizing: border-box;
      }

      :host{
        width: 100%;
      }

      svg {
        width: 2.5rem;
        fill: hsl(0, 0.00%, 0.00%);
      }

      ul {
        margin: 0;
        padding: 0;
        list-style: none;
      }

      .register ul{
        padding: 1rem;
        padding-left: 2rem;
      }

      button{
        all: unset;
        cursor: pointer;
      }

      .table{
        display:flex;
        flex-direction: column;
        gap: 1rem;
      }

      .register{
        background-color: hsl(0, 0%, 75%);
        margin: 0.5rem;
        word-break: break-word;
        border: 2px solid hsl(0, 2.90%, 27.10%);
      }
      
      .header-table{
        background-color:  hsl(0, 0%, 75%);
        
      }

      .header-body{
        border-bottom: 2px solid hsl(0, 2.90%, 27.10%);
        color: black;
        padding:0.5rem;
        margin: 0.5rem;
      }

      .body-table{
        witdh: 100%;
        display: grid;
        gap: 1rem;        
        align-items: center;
        overflow-y: scroll;
      }

      .footer-table {
        padding: 0.5rem;
        display: flex;
        justify-content: bottom;
        background-color: hsl(0, 0%, 75%);
        color: black;
        bottom: 3vh;
      }
    </style>

    <section class="table"></section>
    `

    const tableContainer = this.shadow.querySelector('.table')
    const headerTable = document.createElement('div')
    headerTable.classList.add('header-table')
    tableContainer.appendChild(headerTable)  

    const headerUl = document.createElement('ul')
    headerTable.appendChild(headerUl)
    const headerLi = document.createElement('li')
    headerUl.appendChild(headerLi)
    const filterButton = document.createElement('button')
    filterButton.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><title>filter</title><path d="M14,12V19.88C14.04,20.18 13.94,20.5 13.71,20.71C13.32,21.1 12.69,21.1 12.3,20.71L10.29,18.7C10.06,18.47 9.96,18.16 10,17.87V12H9.97L4.21,4.62C3.87,4.19 3.95,3.56 4.38,3.22C4.57,3.08 4.78,3 5,3V3H19V3C19.22,3 19.43,3.08 19.62,3.22C20.05,3.56 20.13,4.19 19.79,4.62L14.03,12H14Z" /></svg>`
    headerLi.appendChild(filterButton)

    const bodyTableContainer = document.createElement('div')
    bodyTableContainer.classList.add('body-table')
    tableContainer.appendChild(bodyTableContainer)

    this.data.forEach(element => {

      const register = document.createElement('div')
      register.classList.add('register')
      bodyTableContainer.appendChild(register)

      const headerBodyContainer = document.createElement('div')
      headerBodyContainer.classList.add('header-body')
      register.appendChild(headerBodyContainer)

      const headerBodyContent = document.createElement('div')
      headerBodyContent.classList.add('header-body-content')
      headerBodyContainer.appendChild(headerBodyContent)

      const headerBodyTitle = document.createElement('span')
      headerBodyTitle.textContent = element.title
      headerBodyContent.appendChild(headerBodyTitle)

      const infoBody = document.createElement('div')
      infoBody.classList.add('info-body')
      register.appendChild(infoBody)

      const infoUl = document.createElement('ul')
      infoBody.appendChild(infoUl)

      let infoLi = document.createElement('li')
      infoLi.textContent = `Nombre: ${element.name}` 
      infoUl.appendChild(infoLi)

      infoLi = document.createElement('li')
      infoLi.textContent = `Email: ${element.email}`
      infoUl.appendChild(infoLi)

      infoLi = document.createElement('li')
      infoLi.textContent = `Fecha de creación: ${element.createdAt}`
      infoUl.appendChild(infoLi)
    

      infoLi = document.createElement('li')
      infoLi.textContent = `Fecha de actualización: ${element.updatedAt}`
      infoUl.appendChild(infoLi)
   })

   const footerTable = document.createElement('div')
   footerTable.classList.add('footer-table')
   tableContainer.appendChild(footerTable)
   const countPages = document.createElement('span')
   countPages.innerHTML = `1 registro en total, mostrando 9 por página`
   footerTable.appendChild(countPages)

  }
}

customElements.define('table-component', Table)