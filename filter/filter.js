const soloNumeros = numero => typeof numero === 'number';
const mayorQueCero = numero => numero > 0;
const divisibleEntreDos = numero => numero % 2 === 0;
const suma = (a, b) => a + b;
const multiplica = (a, b) => a * b;

const getJobExperience = job =>
    job && job.experience ?
    `${job.experience.years} years with ${job.experience.months} months` :
    'Sin experiencia';

const getJobTitle = job =>
    job && job.title ?
    job.title : 'No asignado';

const parseJob = user => {
    return {
        ...user,
        job: getJobTitle(user.job),
        experience: getJobExperience(user.job)
    };
}

const parseUser = user => {
    const id = user._id;
    const name = `${user.name} ${user.lastName}`;
    return {
        ...user,
        id,
        name,
    };
};

const cleanUser = ({id, name, job, experience}) => {
    return {id, name, job, experience};
};

async function getImpares(array) {
    return array
        .filter(soloNumeros)
        .filter(mayorQueCero)
        .filter(divisibleEntreDos);
}

async function getTotalFunctional(array) {
    return array
        .filter(soloNumeros)
        .filter(mayorQueCero)
        .reduce(suma);
}

async function getTotalMultiply(array) {
    return array
        .filter(soloNumeros)
        .filter(mayorQueCero)
        .reduce(multiplica);
}

async function getTotal(array) {
    let total = 0;
    for (const numero of array) {
        if (typeof numero === 'number' && numero > 0) {
            total += numero;
        }
    }
    return total;
}

async function parseUsers(array) {
    return array
        .map(parseJob)
        .map(parseUser)
        .map(cleanUser);
}

module.exports = {
    getImpares,
    getTotal,
    getTotalFunctional,
    soloNumeros,
    mayorQueCero,
    divisibleEntreDos,
    suma,
    getTotalMultiply,
    parseUsers
}