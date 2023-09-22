class confirmedController{

    constructor(){

        
        this._servicoEl  = document.querySelector('#servico-el')
        this._dateEl = document.querySelector('#date-el')
        this._timeEl = document.querySelector('#time-el')
        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.mainMenudiv = document.querySelector('#list')
        this._value = document.querySelector('#value')
        this._totalValue = document.querySelector('#total-value')
        
        this.init()

    }

    init(){

        this._dateEl.innerHTML = sessionStorage.getItem('date')
        this._timeEl.innerHTML = sessionStorage.getItem('time')
        let servicos = []
        let servicosValue = []
        let total = 0


        for (let i = 0; i < 4; i++) {
            if(sessionStorage.getItem(`servico ${i}`)) {

                servicos.push(sessionStorage.getItem(`servico ${i}`))

            }

            if(sessionStorage.getItem(`ValorServico ${i}`)) {

                servicosValue.push(sessionStorage.getItem(`ValorServico ${i}`))
                let valor = sessionStorage.getItem(`ValorServico ${i}`)
                total = eval(`${total} + ${valor}`)

            }
            
        }

        this._value.innerHTML = servicosValue.join('R$ + ') + 'R$'

        this._servicoEl.innerHTML = servicos.join(" + ")

        this._totalValue.innerHTML = ` ${total}R$`

        this.menuHamburguer.addEventListener('click', e =>{

            this.mainMenudiv.classList.toggle('show')
    
    
        })
        
    }
}