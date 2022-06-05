const barberUsers = [
    {
        id: 1,
        firstName: 'Katie',
        lastName: 'Black',
        email: 'kate@testmail.com',
        address: 'florida',
        price: '100',

        userRates: [
            {
                id: 1,
                rate: 3,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                id: 2,
                rate: 1,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                id: 3,
                rate: 3,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            }
        ]
    },
    {
        id: 2,
        firstName: 'Jonny',
        lastName: 'Doe',
        email: 'jonny@example.com',
        address: 'Tbilisi',
        price: '500',

        userRates: [
            {
                id: 1,
                rate: 3,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
        ]
    },
    {
        id: 3,
        firstName: 'Mike',
        lastName: 'Brown',
        email: 'mike@testmail.com',
        address: 'Georgia',
        price: '1500',

        userRates: [
            {
                id: 1,
                rate: 3,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                id: 2,
                rate: 1,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                id: 3,
                rate: 5,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
            },
            {
                id: 4,
                rate: 5,
                description: 'Very nice'
            },
            {
                id: 5,
                rate: 5,
                description: 'Super'
            }
        ]
    }
]

const clientUsers = [
    {
        email: 'john.doe@test.com',
        password: '12345678',
        orderedBarberIds: [],
    }
]


/* Client actions */
export const registerBarber = (newUser) => {
    const { firstName, lastName, email, address, price } = newUser;
    const authentificatedUser = barberUsers.find(o => o.email === email);

    if(!authentificatedUser && firstName && lastName && address && price && email) {
        const uId = Date.now();

        barberUsers.push({
            id: uId,
            firstName,
            lastName,
            email,
            address,
            price,
            userRates: []
        })
        
        return true;
    }

    return false;
}

export const registerClient = (newUser) => {
    const { email, password } = newUser;
    const authentificatedUser = clientUsers.find(o => o.email === email);

    if(!authentificatedUser && email && password) {
        clientUsers.push({
            email,
            password,
            orderedBarberIds: []
        })
        
        return true;
    }

    return false;
}

export const loginUser = (user) => {
    const { email, password } = user;

    const authentificatedUser = clientUsers.find(o => o.email === email && o.password === password);

    if(authentificatedUser) {
        return { ...authentificatedUser }
    }

    return false;
}

export const userHasSubscribedBarber = (email, barberId) => {
    const activeUser = clientUsers.find(o => o.email === email);

    if(activeUser) {
        return activeUser.orderedBarberIds.indexOf(barberId) !== -1;
    }

    return false;
}

export const addBarberSubscription = (email, barberId) => {
    const activeUser = clientUsers.find(o => o.email === email);

    if(activeUser) {
        activeUser.orderedBarberIds.push(barberId);
    }

    return false;
}

/* Barber actions */
export const fetchBarberDetail = (id) => {
    const barber = barberUsers.find(o => o.id == id)

    if(barber) {
        return { ...barber }
    }

    return null;
}

export const addBarberRate = (id, {rate, description}) => {
    const barber = barberUsers.find(o => o.id == id)

    if(barber) {
        const uId = Date.now();

        barber.userRates.push({id: uId, rate, description})
        return true;
    }


    return null
}

export const fetchBarberList = () => {
    return barberUsers.map(o => o);
}