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

        this.initEvents();
    }


    initEvents(){

        const maxItens = this.itens.length

        let currentItem = 0 

        this.btnsControll.forEach( btn =>{

            btn.addEventListener('click', e=>{

             let isLeft = e.target.classList.contains('arrow-left');

             if(isLeft){
                currentItem -= 1;
             }
             else{
                currentItem += 1;
             }

             if(currentItem >= maxItens ){
                currentItem = 0;
             }

             if(currentItem < 0){

                currentItem = maxItens -1
             }
             this.itens.forEach( item =>{

                item.classList.remove('selected')

                this.itens[currentItem].scrollIntoView({
                    behavior: "smooth",
                    inline: "center"
                  }); 
                  
                 
                this.itens[currentItem].classList.add('selected');
             });;
            })

        })


        this.maisBtnHover()
        
        //codar condição de scroll para aparecer animações, + atributo para executar animação de aparição apenas uma vez

        this.menuHamburguer()

    }

    nextPhoto(){
        
    }

    Animation(){
      this.galeriaContainer.classList.toggle('animar')


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
}



