console.log('Hi!');

const pies = [
    { 
    pieName: 'Apple',
    image: 'https://images-gmi-pmc.edge-generalmills.com/173da066-c6b4-45dd-9b28-0d459cf6f169.jpg',
    instructorName: 'zoe' 
    },

    {
    pieName: 'Strawberry',
    image: 'https://www.tasteofhome.com/wp-content/uploads/2018/01/Easy-Fresh-Strawberry-Pie_EXPS_TMBBP19_34179_B06_20_3b.jpg',
    instructorName: 'michael'
    },

    {
    pieName: 'Chess',
    image: 'https://shewearsmanyhats.com/wp-content/uploads/2014/11/chess-pie-2new.jpg',
    instructorName: 'michael'
    },

    {
    pieName: 'Shoefly',
    image: 'https://static01.nyt.com/images/2016/09/27/dining/27COOKING-SHOOFLY-PIE2/27COOKING-SHOOFLY-PIE2-articleLarge.jpg',
    instructorName: 'callan'
    },

    {
    pieName: 'Whoopie',
    image: 'https://assets.epicurious.com/photos/5892014d69bb8db572652044/master/pass/chocolate-whoopie-pies-020117.jpg',
    instructorName: 'zoe'
    },

    {
    pieName: 'Lemon',
    image: 'https://lovingitvegan.com/wp-content/uploads/2017/04/Vegan-Lemon-Pie-14.jpg',
    instructorName: 'zoe'
    },

];

const printToDom = (toPrint, divId) => {
    document.getElementById(divId).innerHTML = toPrint;
    
}

const pieBuilder = (piesArray) => {
    let domString = ''
    for (let i = 0; i < piesArray.length; i++) {
        const pies = piesArray[i];
        const domString = `
        <div class="card">
            <h2>${pies.pieName}</h2>
            <img src=${pies.image} alt='Image of ${pies.pieName}' />
        </div>
        `
        
    }
    printToDom(domString, 'pie-zone')
}

document.getElementById('zoe').addEventListener('click', (e) => {
// figure out WHO this instructor is for the button we clicked on
const instructor = e.target.id
// only get those pies from the list of all the pies
const selectedPies = []
for (let i = 0; i < pies.length; i++) {
    const pie = pies[i]
    if (pie.instructorName === instructor) {
        selectedPies.push(pie)
    }
    }
    pieBuilder(selectedPies)

})



// pieBuilder(pies);
