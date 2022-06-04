const barberUsers = [
    {
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

export const addClientUsers = (newUser) => {
    if(newUser.email && newUser.password) {
        const { email, password } = newUser;

        clientUsers.push({
            email,
            password,
        })
        
        return;
    };

    throw new Error('Wrong user passed');
}

export const loginUser = (user) => {
    const { email, password } = user;

    const authentificatedUser = clientUsers.find(o => o.email === email && o.password === password);

    if(authentificatedUser) {
        return { ...authentificatedUser }
    }

    return false;
}

