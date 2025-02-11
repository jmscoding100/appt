const appointments = [
    {
        id: 1,
        first: 'Joshua',
        last: 'McGee',
        apptDate: new Date('February 24, 2025, 13:40:00'),
        dateConfrim: new Date('January 16, 2025, 10:23:00'),
        procedure: 'Colonoscopy',
        assignDr: 'W. Bridges',
        isActive: true
    },
    {
        id: 2,
        first: 'Robert',
        last: 'McGee',
        apptDate: new Date('February 30, 2025, 12:30:00'),
        dateConfrim: new Date('February 30, 2025, 12:01:00'),
        procedure: 'Colonoscopy',
        assignDr: 'W. Hanson',
        isActive: true
    },
    {
        id: 3,
        first: 'Jacob',
        last: 'Herbert',
        apptDate: new Date('January 16, 2025, 13:40:00'),
        dateConfrim: new Date('January 14, 2025, 10:23:00'),
        procedure: 'Checkup',
        assignDr: 'W. Hanson',
        isActive: true
    },
    {
        id: 4,
        first: 'Beca',
        last: 'Lin',
        apptDate: new Date('February 28, 2025, 13:40:00'),
        dateConfrim: new Date('February 24, 2025, 10:23:00'),
        procedure: 'Checkup',
        assignDr: 'J. McGee',
        isActive: true
    },
    {
        id: 5,
        first: 'Vicktor',
        last: 'Row',
        apptDate: new Date('April 1, 2025, 14:40:00'),
        dateConfrim: new Date('March 16, 2025, 9:23:00'),
        procedure: 'Colonoscopy',
        assignDr: 'W. Bridges',
        isActive: true
    },
    {
        id: 6,
        first: 'Charile',
        last: 'Dear',
        apptDate: new Date('February 24, 2025, 14:40:00'),
        dateConfrim: new Date('January 16, 2025, 10:23:00'),
        procedure: 'Colonoscopy',
        assignDr: 'W. Bridges',
        isActive: true
    },
    {
        id: 7,
        first: 'Bob',
        last: 'Bert',
        apptDate: new Date('February 24, 2025, 11:40:00'),
        dateConfrim: new Date('January 16, 2025, 10:23:00'),
        procedure: 'Colonoscopy',
        assignDr: 'W. Bridges',
        isActive: true
    },
    {
        id: 8,
        first: 'Ryan',
        last: 'Haywood',
        apptDate: new Date('February 24, 2025, 9:40:00'),
        dateConfrim: new Date('January 16, 2025, 10:23:00'),
        procedure: 'Colonoscopy',
        assignDr: 'W. Bridges',
        isActive: true
    },
    {
        id: 9,
        first: 'Ken',
        last: 'Kenny',
        apptDate: new Date('February 24, 2025, 13:40:00'),
        dateConfrim: new Date('January 16, 2025, 10:23:00'),
        procedure: 'Checkup',
        assignDr: 'W. Hanson',
        isActive: true
    },
    {
        id: 10,
        first: 'Joshua',
        last: 'McGee',
        apptDate: new Date('February 24, 2026, 13:40:00'),
        dateConfrim: new Date('January 16, 2026, 10:23:00'),
        procedure: 'Checkup',
        assignDr: 'W. Hanson',
        isActive: true
    }
]

const myName = document.getElementById('myName')

myName.innerText = 'Appointments'
myName.classList.add('text-center')

/**
 * Loop through the array of appt
 *  forEach appointment:
 *      build a card div
 *      add text for last, first, appDate, procedure, and assignedDr
 *      add a button to set appointment to inActive (cancel the appointment)
 *      display card
 */

const row = document.getElementById('row')


appointments.forEach(appt => {
    const col = document.createElement('div')
    col.classList.add('col')

    const card = document.createElement('div')
    card.classList.add('card')
    card.setAttribute('data-cardId', appt.id)
    // console.log(card)

    const cardBody = document.createElement('div')
    cardBody.classList.add('card-body')
    
    const clientName = document.createElement('h2')
    clientName.classList.add('text-capitalize')

    clientName.innerHTML = `<span id="lastName">${appt.last}</span> <span id="firstName">${appt.first}</span>`

    //append clientName to cardBody
    cardBody.appendChild(clientName)

    const dateText = document.createElement('p')
    const dateSpan = `${appt.apptDate.toUTCString()}`
    dateText.innerText = `Appointment Date: ${dateSpan}`

    //append dateText to cardBody
    cardBody.appendChild(dateText)


    // append procedure to cardBody
    const procedure = document.createElement('p')
    procedure.classList.add('text-capitalize', 'text-danger')
    procedure.innerText = `${appt.procedure}`
    cardBody.appendChild(procedure)

    //append doctor to cardBody
    const doctor = document.createElement('p')
    doctor.classList.add('text-capitalize', 'text-primary','fst-italic')
    doctor.innerText = `${appt.assignDr}`

    cardBody.appendChild(doctor)


    card.appendChild(cardBody)

    const cardFooter = document.createElement('div')
    cardFooter.classList.add('card-footer')

    const cancelBtn = document.createElement('button')
    cancelBtn.classList.add('btn', 'btn-danger', 'text-capitalize', 'cancel-btns')
    cancelBtn.setAttribute('data-btnId', appt.id)
    cancelBtn.innerText = 'cancel appointment'

    cardFooter.appendChild(cancelBtn)
    card.appendChild(cardFooter)

    col.appendChild(card)
    row.appendChild(col)
    
})

const cancelBtns = document.querySelectorAll('.cancel-btns')
// console.log(cancelBtns)
const cards = document.querySelectorAll('.card')


const cancelAppt =(el, arr, attr)=>{
    const btnId = el.getAttribute('data-btnId')
    for(let item of arr){
        if(parseInt(btnId) == item.id && item.hasOwnProperty('isActive')){
            item.isActive = !item.isActive
            console.log(item)
        }
    }
}

const changeDisplay =(el)=>{
    const btnId = el.getAttribute('data-btnId')

    for(let card of cards){
        if(card.getAttribute('data-cardId') == btnId){
            el.innerText == 'Cancel Appointment' ? el.innerText = 'Uncancel Appointment': el.innerText = 'Cancel Appointment'

            card.style.backgroundColor == '' ? card.style.backgroundColor = 'gray': card.style.backgroundColor = ''
        }
    }
}

cancelBtns.forEach(button => {
    button.addEventListener('click', ()=>{
        cancelAppt(button, appointments, 'data-btnId')
        changeDisplay(button)
    })
})

/**
 * Array.filter()=> returns a copy after filtering thourgh the original
 * 
 * ex: arr1 = [1 ,2, 3, 4, 5, 7]
 * 
 * arr2 = arr1.filter(num => num  % 2 == 0)
 */

// let arr1 = [1 ,2, 3, 4, 5, 7]

// let arr2 = arr1.filter(num => num % 2 == 0)

// console.log(arr2)

const brigesAppts = appointments.filter(appt => appt.assignDr == 'W. Bridges')

console.log(brigesAppts)

const wHanson = appointments.filter(appt => appt.assignDr == 'W. Hanson')

console.log(wHanson)

const febAppts = appointments.filter(appt => appt.apptDate.getMonth() == 1)

console.log(febAppts)

const janAppts = appointments.filter(appt => appt.apptDate.getMonth() == 0)
