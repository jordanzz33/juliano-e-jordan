const consultas = [
  ["Juliano Moraes", "Dr. Murilo Jordan", "Cardiologia", "15/10/2025", "09:00", "Agendada"],
  ["Otavio Benedeti", "Dr. Francisco Souza", "Nutrição", "08/11/2025", "14:30", "Pendente"],
  ["Itálo Mozer", "Dr. Miguel Gerbi", "Pediatria", "06/11/2025", "10:00", "Pendente"],
  ["Larissa Gomes", "Dra. Amanda Reis", "Dermatologia", "12/11/2025", "13:00", "Agendada"]
];

function mostrarConsultas(filtro = "") {
  const tabela = document.getElementById("tabela");

  while (tabela.rows.length > 1) {
    tabela.deleteRow(1);
  }

  for (let i = 0; i < consultas.length; i++) {
    const [paciente, medico, especialidade, data, hora, status] = consultas[i];

    if (filtro && !especialidade.toLowerCase().includes(filtro.toLowerCase())) {
      continue;
    }

    const linha = tabela.insertRow();
    linha.insertCell(0).textContent = paciente;
    linha.insertCell(1).textContent = medico;
    linha.insertCell(2).textContent = especialidade;
    linha.insertCell(3).textContent = data;
    linha.insertCell(4).textContent = hora;
    linha.insertCell(5).textContent = status;
  }
}

function buscarConsulta() {
  const filtro = document.getElementById("campoBusca").value;
  mostrarConsultas(filtro);
}

mostrarConsultas();