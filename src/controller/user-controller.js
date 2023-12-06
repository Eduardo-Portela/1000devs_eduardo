const calculaIdade = (req, res) => {
    const hoje = new Date(Date.now())
    const nascimento = new Date("1994-05-26")
    const idade = hoje.getFullYear() - nascimento.getFullYear()

    res.json({
        "Nome": "Eduardo",
        "Cidade": "Caruaru",
        "Profissão": "Programador",
        "Nascimento": idade
    })
}

module.exports = {
    calculaIdade
}