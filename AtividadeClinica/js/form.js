let botaoAdicionar = document.querySelector('#add-paciente')
botaoAdicionar.addEventListener('click', function (evento){
    evento.preventDefault()

    let form = document.querySelector('#form-add')

    let paciente = obtemPacienteDoForm(form)

    console.log(paciente)

    adicionaPacienteNaTabela(paciente)
})

function obtemPacienteDoForm(form) {
    let paciente = {
        nomeP: form.nomeP.value,
        nomeM: form.nomeM.value,
        horario: form.horario.value,
        data: form.data.value
    }
    return paciente
}

function adicionaPacienteNaTabela(paciente) {
    let pacienteTr = montarTr(paciente)
    let tabela = document.querySelector('#tabela-pacientes')
    tabela.appendChild(pacienteTr)
}

function montarTr (paciente) {
    let PacienteTr = document.createElement('tr')
    PacienteTr.classList.add('paciente')

    PacienteTr.appendChild(montarTd(paciente.nomeP, "info-nomeP"))
    PacienteTr.appendChild(montarTd(paciente.nomeM, "info-nomeM"))
    PacienteTr.appendChild(montarTd(paciente.horario, "info-horario"))
    PacienteTr.appendChild(montarTd(paciente.data, "info-data"))

    return PacienteTr
}

function montarTd (dado, classe) {
    let td = document.createElement('td')
    td.textContent = dado
    td.classList.add(classe)

    return td
}