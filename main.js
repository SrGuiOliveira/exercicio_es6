const alunos = [
    {
        nome: 'Guilherme',
        nota: 6
    },
    {
        nome: 'Pedro',
        nota: 5
    },
    {
        nome: 'Lorena',
        nota: 4
    },
    {
        nome: 'Cadu',
        nota: 9
    },
    {
        nome: 'Miguel',
        nota: 6
    },
    {
        nome: 'Heloisa',
        nota: 5
    },
    {
        nome: 'Helena',
        nota: 6
    }
];

console.log(alunos);

function filtrarNotas() {
    const alunosAprovados = alunos.filter(function(itemAtual){
        return itemAtual.nota >= 6;
    });

    return alunosAprovados;
}

console.log('Os alunos aprovados são:', filtrarNotas());
