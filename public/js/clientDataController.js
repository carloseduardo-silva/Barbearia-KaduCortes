   class clientDataController{

   constructor(){

    this.clientname = document.querySelector("input#nome")
    this.clientemail = document.querySelector("input#email")
    this.clienttelefone = document.querySelector("input#telefone")
    this.marcarHorarioBtn = document.querySelector("#botao-marcar")
    this.corteBtn = document.querySelector("#corte-marcar")
    this.inputDate = document.querySelector("#schedule")
    this.menuHamburguer = document.querySelector('#menu-hamburguer')
    this.mainMenudiv = document.querySelector('#list')
    this.inputService = document.querySelector('#service')
    this.inputDate = document.querySelector('#date')
    this.inputTime = document.querySelector('#time')

    this.initEvents();
    

   }
    
   
   
   initEvents(){
   
    this.inputService.value = sessionStorage.getItem('service')
    this.inputTime.value = sessionStorage.getItem('time')
    this.inputDate.value = sessionStorage.getItem('date')

    this.marcarHorarioBtn.addEventListener("click", ()=>{
        let name = this.clientname.value
        let email = this.clientemail.value
        let tel = this.clienttelefone.value
        
        let dados = {
            name,
            email,
            tel}
        
      

    })

    this.menuHamburguer.addEventListener('click', e =>{

        this.mainMenudiv.classList.toggle('show')


    })
    
}



   }

