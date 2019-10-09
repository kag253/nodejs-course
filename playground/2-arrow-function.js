// const square = function (x) {
//     return x * x;
// }

// const square = (x) => {
//     return x * x;
// }

// const square = (x) => x * x;

// console.log(square(8));

const event = {
    name: 'Birthday Party',
    guestList: ['Bob', 'Mike', 'Jen'],
    printGuestList: function () {
        console.log('Guest list for ' + this.name + ':');
        for (const guest of this.guestList) {
            console.log(guest + ' will be attending ' + this.name);
        }
        // this.guestList.forEach((guest) => {
        //     console.log(guest + ' is attending ' + this.name);
        // });
    }
};

event.printGuestList();
