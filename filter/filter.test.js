const {getImpares, getTotal, getTotalFunctional, getTotalMultiply, parseUsers} = require('./filter');

describe('Filters', () => {

    const a = [23, 46, 77, 89, 190, 200, 45, ' '];
    const b = [0, -1, -45, -80, 190, 200, 45, {}, 'alan'];

    const response = [
        {
            _id: 23,
            name: 'Alan',
            lastName: 'Olvera',
            job: {
                _id: 23,
                title: 'Cocinero',
                experience: {
                    years: 10,
                    months: 2
                }
            }
        },
        {
            _id: 24,
            name: 'Julio',
            lastName: 'Cardenas'
        }
    ];

    it('parsear usuarios', async () => {
        const user = await parseUsers(response);
        expect(user).toEqual([
            {
                id: 23,
                name: 'Alan Olvera',
                job: 'Cocinero',
                experience: '10 years with 2 months'
            },
            {
                id: 24,
                name: 'Julio Cardenas',
                job: 'No asignado',
                experience: 'Sin experiencia'
            }
        ]);
    });


    it('filtrar impares', async () => {
        const results = await getImpares(a);
        expect(results).toEqual([46, 190, 200]);
    });

    it('filtrar impares menores que cero', async () => {
        const results = await getImpares(b);
        expect(results).toEqual([190, 200]);
    });

    it('sumar todos los elementos de un array', async () => {
        const result = await getTotal(a);
        expect(result).toBe(670);
    });

    it('sumar todos los elementos de un array mixto', async () => {
        const result = await getTotal(b);
        expect(result).toBe(435);
    });

    it('sumar todos los elementos de un array mixto usando prog func', async () => {
        const result = await getTotalFunctional(b);
        expect(result).toBe(435);
    });

    it('multiplicar todos los elementos de un array mixto usando prog func', async () => {
        const result = await getTotalMultiply(b);
        expect(result).toBe(1710000);
    });

});