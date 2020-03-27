/* Example 1 */

// const square = function (x) {
//     return x * x
// }

// const square = (x) => {
//     return x * x
// }

// const square = (x) => x * x

// console.log(square(2))

/* Example 2 */

// const event = {
//     name: 'Birthday Party',
//     printGuestList: function () {
//         console.log('Guest list for ' + this.name) // Works
//     }
// } 

// const event = {
//     name: 'Birthday Party',
//     printGuestList: () => {
//         console.log('Guest list for ' + this.name) // Does not Work
//     }
// } 

// const event = {
//     name: 'Birthday Party',
//     guestList: ['Andrew', 'Jen', 'Mike'],
//     printGuestList() {
//         console.log('Guest list for ' + this.name) // Works

//         this.guestList.forEach(function (guest) {
//             console.log(guest + ' is attending ' + this.name) // Does not work
//         })
//     }
// } 

// const event = {
//     name: 'Birthday Party',
//     guestList: ['Andrew', 'Jen', 'Mike'],
//     printGuestList() {
//         const that = this

//         console.log('Guest list for ' + this.name) // Works

//         this.guestList.forEach(function (guest) {
//             console.log(guest + ' is attending ' + that.name) // Works
//         })
//     }
// } 

const event = {
    name: 'Birthday Party',
    guestList: ['Andrew', 'Jen', 'Mike'],
    printGuestList() {
        console.log('Guest list for ' + this.name) // Works

        this.guestList.forEach((guest) => {
            console.log(guest + ' is attending ' + this.name) // Works
        })
    }
} 

event.printGuestList()