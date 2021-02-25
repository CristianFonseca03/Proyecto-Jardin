let animals = [
    {
        id: 1,
        parentId: 1,
        media: '../../images/animales/caballo.png',
        type: 'image'
    },
    {
        id: 2,
        parentId: 1,
        media: 'Caballo',
        type: 'text'
    },
    {
        id: 3,
        parentId: 2,
        media: '../../images/animales/cabra.png',
        type: 'image'
    },
    {
        id: 4,
        parentId: 2,
        media: 'Cabra',
        type: 'text'
    },
    {
        id: 5,
        parentId: 3,
        media: '../../images/animales/canguro.png',
        type: 'image'
    },
    {
        id: 6,
        parentId: 3,
        media: 'Canguro',
        type: 'text'
    },
    {
        id: 7,
        parentId: 4,
        media: '../../images/animales/caracol.png',
        type: 'image'
    },
    {
        id: 8,
        parentId: 4,
        media: 'Caracol',
        type: 'text'
    },
    {
        id: 9,
        parentId: 5,
        media: '../../images/animales/castor.png',
        type: 'image'
    },
    {
        id: 10,
        parentId: 5,
        media: 'Castor',
        type: 'text'
    },
];
let cache = []
let score = 0

$(document).ready(() => {
    animals.sort(() => {
        return Math.random() - 0.5
    });
    createCards(animals);
    refreshScore()
})

const refreshScore = () => {
    $('#score').text(`Score ${score}`)
}

const createCards = (animals) => {
    animals.forEach((animal) => {
        $('#cards-container').append(animal.type === 'image' ? imageCard(animal) : textCard(animal));
        $(`#${animal.id}`).flip({trigger: 'manual'});
    });
}

const imageCard = (animal) => {
    return `<div id="${animal.id}" class="animal-card col-2 m-2" onclick="handleClickCard(this)">
            <div class="front animal-card-front">
            </div>
            <div class="back animal-card-back d-flex flex-row justify-content-center">
                <img src="${animal.media}" class="img-fluid" alt="${animal.id}">
            </div>
        </div>`
}

const textCard = (animal) => {
    return `<div id="${animal.id}" class="animal-card col-2 m-2" onclick="handleClickCard(this)">
            <div class="front animal-card-front">
            </div>
            <div class="back animal-card-back d-flex flex-column justify-content-center">
                <h1 class="text-center">${animal.media}</h1>
            </div>
        </div>`
}

const handleClickCard = (e) => {
    const elementId = $(e).attr('id')
    $(`#${elementId}`).flip(true, () => {
        cache.push(getAnimalFromId(elementId))
        if (cache.length === 2) {
            const firstAnimal = cache[0]
            const secondAnimal = cache[1]
            if (firstAnimal.parentId === secondAnimal.parentId) {
                score++
                refreshScore()
                cache = []
            } else {
                cache.forEach(animal => handleFlipCard(animal.id))
                cache = []
            }
        }
    })
}

const handleFlipCard = (id) => {
    $(`#${id}`).flip(false)
}

const getAnimalFromId = (id) => {
    return animals.filter(e => e.id === Number(id))[0]
}
