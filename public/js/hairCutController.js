class hairCutController{

    constructor(){

        this.hairCutTypebtnSchedule = document.querySelector('#corte-marcar')
        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.mainMenudiv = document.querySelector('#list')


        this.initEvents();
    }


    initEvents(){

       

        let buttons = document.querySelectorAll('.btn')



       

        buttons.forEach(btn =>{
            btn.addEventListener('click', e=>{
                btn.classList.toggle('selected')
            })
        })

        this.hairCutTypebtnSchedule.addEventListener("click", ()=>{
            
            let serviceArr = []

            let i = 0
            document.querySelectorAll('.selected').forEach(btn=>{
                serviceArr.push(btn.innerHTML)
                sessionStorage.setItem(`servico ${i}`, btn.innerHTML)

                switch(btn.innerHTML){

                    case "CORTE CABELO":
                        sessionStorage.setItem(`ValorServico ${i}`, '20')

                    break;

                    case "FAZER A BARBA":
                        sessionStorage.setItem(`ValorServico ${i}`, '10')

                    break;

                    case "PINTURA":
                        sessionStorage.setItem(`ValorServico ${i}`, '30')

                    break;

                    case "SOMBRANCELHA":
                        sessionStorage.setItem(`ValorServico ${i}`, '5')

                    break;



                }

                console.log(btn.innerHTML)
                i++
            })
            
            let services = serviceArr.join('+')

            sessionStorage.setItem('service', services )
        })

        this.menuHamburguer.addEventListener('click', e =>{

            this.mainMenudiv.classList.toggle('show')


    })


        
    }

    toSessionStorage(dados){

       // sessionStorage.setItem('', dados.)
    
    
    
    
    }

 
    
// desenvolver script de seleção adicionando classe ao button clicado e exibindo ele no console.
/*

let buttons = document.querySelectorAll('.btn btn-primary btn-lg')

let proximoBtn = document.querySelector('#corte-marcar')


proximoBtn.addEventListener('click', e=>{

    console.log(buttons)


})*/
}