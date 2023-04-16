
// Note1 : First Animal must have minimum weight
// Note2 : First 5 Animal Image Must be same as in html <img> tag
// Note3 : Number of Animal is always ODD like 3,5,7,9,11,13....101


const Animals = [
    {
        name: 'Cat',
        weight: 5,
        image: 'cat.jpg'
    },

    {
        name: 'Dog',
        weight: 60,
        image: 'dog.jpg'
    },
    {
        name: 'Bear',
        weight: 350,
        image: 'bear.jpg'
    },
    {
        name: 'Lion',
        weight: 180,
        image: 'lion.jpg'
    },
    {
        name: 'Panda',
        weight: 120,
        image: 'panda.jpg'
    },
    {
        name: 'Tiger',
        weight: 250,
        image: 'tiger.jpg'
    },
    {
        name: 'Kolala',
        weight: 20,
        image: 'koala.jpg'
    },


    {
        name: 'Elephant',
        weight: 1500,
        image: 'elephant.jpg'
    },
    {
        name: 'Horse',
        weight: 700,
        image: 'horse.jpg'
    },
    {
        name: 'Giraffe',
        weight: 1200,
        image: 'giraffe.jpg'
    },
    {
        name: 'Cow',
        weight: 140,
        image: 'cow.jpg'
    },
    {
        name: 'Deer',
        weight: 200,
        image: 'deer.jpg'
    },
    {
        name: 'Moose',
        weight: 650,
        image: 'moose.jpg'
    },
    {
        name: 'Wolf',
        weight: 300,
        image: 'wolf.jpg'
    },
    {
        name: 'Zeebra',
        weight: 450,
        image: 'zeebra.jpg'
    },
]


function rangeSlide(weight) {
    const animal = Animals.filter(e => e.weight === findClosest(parseInt(weight)));
    document.getElementById('displayImage').src = '../images/' + animal[0].image
}



const findClosest = (num) => {


    let closest = Animals[0].weight;
    for (let item of Animals) {
        if (Math.abs(item.weight - num) < Math.abs(closest - num)) {
            closest = item.weight;
        }
    }
    return closest;
}

