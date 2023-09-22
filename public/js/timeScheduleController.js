class timeScheduleController{

    constructor(){

        this.timebtnSchedule = document.querySelector('#botao-proximo')
        this.inputTime = document.querySelector('#input-time')
        this.inputDate = document.querySelector("#schedule")
        this.HourSection = document.querySelector('section#horario')
        this.h1 = document.querySelector('#h1')
        this.buttonNextDay= document.querySelector("#nextDay")
        this.buttonPreviousDay= document.querySelector("#previousDay")
        this.sectionHorario = document.querySelector('section#horario')
        this.menuHamburguer = document.querySelector('#menu-hamburguer')
        this.mainMenudiv = document.querySelector('#list')
        this.inputSchedule = document.querySelector('#schedule')


        this.initEvents()
    }


    initEvents(){
      

        this.currentDay();

      

        this.timebtnSchedule.addEventListener("click", (e)=>{

            if(this.inputTime.querySelector('.selected') == null){
                e.preventDefault()
                window.alert('Por favor selecione sua data e horario!')
                
            }
            else{

                this.toSessionStorage('23/11/23', this.inputTime.querySelector('.selected').innerHTML)
            }
            
        })

        this.menuHamburguer.addEventListener('click', e =>{

            this.mainMenudiv.classList.toggle('show')
    
    
        })

        this.inputTime.querySelectorAll('p').forEach(option =>{
            option.addEventListener('click', e =>{

                if( this.inputTime.querySelector('.selected') == null){
                    option.classList.toggle('selected')

                } else{
                    let selected = this.inputTime.querySelector('.selected')
                    
                    selected.classList.remove('selected')
                    option.classList.toggle('selected')
                    

                }

            })
        })

       
        
    }

    currentDay(){

        let day = new Date();
        

        let currentday = day.getDate()


        this.h1.innerHTML = `${day.getDate()}/0${day.getMonth() + 1}/${day.getFullYear()}`


        this.buttonPreviousDay.addEventListener('click', e =>{

            if(currentday <= 1 ){

                currentday = 2
            }

            this.h1.innerHTML = `${currentday - 1}/0${day.getMonth() + 1}/${day.getFullYear()}`

            currentday--
            
            this._date = `${currentday}/0${day.getMonth() + 1}/${day.getFullYear()}`

            this.sectionHorario.classList.toggle('grey')

        })
        
        this.buttonNextDay.addEventListener('click', e =>{

            if (currentday >= 31){ 

                currentday = 0

            }

            this.h1.innerHTML = `${currentday + 1}/0${day.getMonth() + 1}/${day.getFullYear()}`

            currentday++

            
            this._date = `${currentday}/0${day.getMonth() + 1}/${day.getFullYear()}`
       
            
            this.sectionHorario.classList.toggle('grey')
        })

        
        return this._date = `${currentday}/0${day.getMonth() + 1}/${day.getFullYear()}`

    }

    toSessionStorage(date, time){

        sessionStorage.setItem('date', date)
        sessionStorage.setItem('time', time)
    
    
    
    
    }

 
    

}

