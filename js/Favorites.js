class Favorites{
  constructor(root){
    this.root = document.querySelector(root)
    this.load()
  }

  load() {
    this.entries = [
      {
        login: 'maykbrito',
        name: "Mayke Brito",
        public_repos: '76',
        followers:'120000'
      },
      {
        login: 'diego3g',
        name: "Diego Fernandes",
        public_repos: '76',
        followers:'120000'
      }
     ]
  }
}

// classe que vai criar a visualização dos eventos
export	class FavoritesViwe extends Favorites {
  constructor(root) {
    super(root)

    this.tbody = this.root.querySelector('table tbody')

    this.uptade()
  }

  uptade(){
   this.removeAllTr()

   this.entries.forEach((user) => {
      const row = this.createRow()

      row.querySelector('.user img').src = `https://github.com/${user.login}.png`
      row.querySelector('.user p').alt = `Imagem de ${user.name}`
      row.querySelector('.user p').textContent = user.name
      row.querySelector('.user span').textContent = user.login
      row.querySelector('.repositories').textContent = user.public_repos
      row.querySelector('.followers').textContent = user.followers

      
      this.tbody.append(row)
    })
    
  }
  
  createRow(){
    const tr = document.createElement('tr')
    
    tr.innerHTML = `
     <td class="user">
       <img src="https://github.com/maykbrito.png" alt="Imagem de maykbrito">
       <a href="https://github.com/maykbrito" target="_blank">
         <p>Mayk Brito</p>
         <span>maykbrito</span>
       </a>
     </td>
     <td class="repositories">
       76
     </td>
     <td class="followers">
       9589
     </td>
     <td>
       <button class="remove">&times;</button>
     </td>
   `
  
    return tr
    
  }

  removeAllTr() {
    
    this.tbody.querySelectorAll('tr')
    .forEach((tr) => {
      tr.remove()
    })
  }
}