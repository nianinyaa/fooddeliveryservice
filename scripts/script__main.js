const modalFunc = () => {
    const modal = document.querySelector('.cart-modal__overlay');
    const cartBtn = document.querySelector("#cart-button"); 

    cartBtn.addEventListener('click', () => {
        modal.classList.add('open')
        
    })

    const openModal = () => {
        modal.classList.add('open')
    };


    const closeModal = () => {
        modal.classList.remove('open')
    };


    cartBtn.addEventListener('click', () => {
        openModal() 
    });

   


    modal.addEventListener('click', (event) => {
        if (
            event.target.classList.contains('cart-modal__overlay') ||
            event.target.closest('.cart-modal__header--close')
        ) {
            closeModal();
        }
    });
};

const restsFunc = () => {
    const container = document.querySelector('#rests-container');

    const restArray = [{
        id: 0,
        title: 'Пицца плюс',
        time: 50,
        rating: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'pizza plus.jpeg'
    },

    {
        id: 1,
        title: 'Тануки',
        time: 50,
        rating: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'tanuki.jpeg'
    },

    {
        id: 2,
        title: 'Food Band',
        time: 50,
        rating: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'tanuki.jpeg'
    },
    {
        id: 3,
        title: 'Жадина-пицца',
        time: 50,
        rating: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'zhadina pizza.jpeg'
    },

    {
        id: 4,
        title: 'Точка еды',
        time: 50,
        rating: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'tochka edy.jpeg'
    },

    {
        id: 5,
        title: 'PizzaBurger',
        time: 50,
        rating: 4.5,
        price: 900,
        type: 'Пицца',
        image: 'pizza burger.jpeg'
    },

]


    /*console.log(container);*/
    /*container.innerHTML = '<p style= "width: 100%; text-align: center;" >Загрузка</p>'; - 1 вариант отображения*/

     const loading = () => {
       container.innerHTML = '<p style= "width: 100%; text-align: center;" >Загрузка</p>'
    }


    const renderRests = (array) => {
        container.innerHTML = ' '
        array.forEach((card) => {
            container.insertAdjacentHTML('beforeend', `
            <a href="./goods.html?id = ${card.id}" class="products-card">
            <div class="products-card__image">
                <img src="./media/rests/${card.image}" alt="${card.image}">
            </div>
            <div class="products-card__description">
                <div class="products-card__description-row">
                    <h4 class="products-card__description--title">${card.title}</h4>
                    <div class="products-card__description--badge">${card.time}мин</div>
                </div>
                <div class="products-card__description-row">
                    <div class="products-card__description-info">
                        <div class="products-card__description-info--rating">
                            <img src="./media/icons/star.svg" alt="star">${card.rating}
                        </div>
                        <div class="products-card__description-info--price">От ${card.price} руб.</div>
                        <div class="products-card__description-info--group">${card.type}</div>
                    </div>
                </div>
            </div>
        </a>`)
        })
    }

    if (container) {
        loading()

        setTimeout(() => {
            renderRests(restArray)
        }, 5000)
    }
}

//loading() 

modalFunc()
restsFunc()