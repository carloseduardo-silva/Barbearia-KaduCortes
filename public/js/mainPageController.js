class mainPageController{

    constructor(){

        this.sectionCortesEl = document.querySelector("#cortes")
        this.images = document.querySelectorAll('#cortes img')
        this.btnsControll = document.querySelectorAll('#container button')
        this.sectionCortes = document.querySelector('#cortes')
        this.itens = document.querySelectorAll('.item')
        this.btnAnimation = document.querySelector('#animation')
        this.galeriaContainer = document.querySelector('#container')
        this.menuHamburguerBtn = document.querySelector('#menu-hamburguer')
        this.maisBtn = document.querySelector('#btn-mais')
        this.navMais = document.querySelector('#nav-mais')
        this.menuUl = document.querySelector('#menu')
        this.sectionArr = document.querySelectorAll('.hidden')
        this.h1Arr = document.querySelectorAll('h1')

        this.initEvents();
    }


    initEvents(){

       
        this.showSections()
        this.showH1()
        this.maisBtnHover()
        this.menuHamburguer()

    }

    menuHamburguer(){

      this.menuHamburguerBtn.addEventListener('click', e=>{

         this.menuUl.classList.toggle('none')

      })

    }

    maisBtnHover(){

      this.maisBtn.addEventListener('mouseout', e =>{

         setTimeout( e=>{
            this.navMais.style.display = 'none'

         }, 2500)

      })

      this.maisBtn.addEventListener('mouseover', e =>{
         this.navMais.style.display = 'flex'
         
      })

    

      this.navMais.addEventListener('mouseout', e =>{

         setTimeout( e=>{
            this.navMais.style.display = 'none'

         }, 1500)

      })

    }

    showSections(){
      
      const myObserver = new IntersectionObserver( entries =>{

         entries.forEach(entry =>{
            if(entry.isIntersecting === true){

               entry.target.classList.add('show')

            }
            else{
               entry.target.classList.remove('show')

            }
         })

      })

      this.sectionArr.forEach(section =>{

         myObserver.observe(section)

      })

    }

    showH1(){
      
      const myObserver = new IntersectionObserver( entries =>{

         entries.forEach(entry =>{
            if(entry.isIntersecting === true){

               entry.target.classList.add('showSlide')

            }
            else{
               entry.target.classList.remove('showSlide')

            }
         })

      })

      this.h1Arr.forEach(title =>{

         myObserver.observe(title)

      })

    }

}



