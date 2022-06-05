const barberUsers = [
    {
        id: 1,
        firstName: 'Kate',
        lastName: 'Doe',
        email: 'kate@testmail.com',
        address: 'florida',
        price: '100'
    }
]

const clientUsers = [
    {
        email: 'john.doe@test.com',
        password: '12345678'
    }
]

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

export const fetchBarberDetail = (id) => {
    const barber = barberUsers.find(o => o.id == id)

    if(barber) {
        return { ...barber }
    }

    return null;
}