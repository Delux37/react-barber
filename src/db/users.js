const barberUsers = [
    {
        id: 1,
        firstName: 'Kate',
        lastName: 'Doe',
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
                id: 1,
                rate: 3,
                description: 'survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum'
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
    const authentificatedUser = clientUsers.find(o => o.email === email);

    if(!authentificatedUser && firstName && lastName && address && price && email) {
        barberUsers.push({
            firstName,
            lastName,
            email,
            address,
            price
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
        barber.userRates.push({rate, description})
        return true;
    }


    return null
}

export const fetchBarberList = () => {
    return barberUsers.map(o => o);
}