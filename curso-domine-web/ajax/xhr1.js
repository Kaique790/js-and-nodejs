function ajax (config){
    const xhr = new XMLHttpRequest();
    xhr.open(config.method, config.url);

    xhr.onload = e => {
        if (xhr.status === 200) {
            config.success(xhr.response);
        } else if (xhr.status >= 400) {
            config.error({
                code: xhr.status,
                text: xhr.statusText
            });
        };
    };

    xhr.send()
};

function createTable(states) {
    const rows = states.map(state => {
        const tdId = document.createElement('td');
        tdId.innerHTML = state.id;

        const tdName = document.createElement('td');
        tdName.innerHTML = state.nome;

        const tdAcronym = document.createElement('td');
        tdAcronym.innerHTML  = state.sigla;

        const tr = document.createElement('tr');

        tr.appendChild(tdId);
        tr.appendChild(tdName);
        tr.appendChild(tdAcronym);
        
        return tr;
    });

    const table = document.createElement('table');
    rows.forEach(row => table.appendChild(row));
    document.body.appendChild(table);
};


ajax({
    method: "GET",
    url: "./dados/estados.json",
    success(response) {
        const states = JSON.parse(response);
        createTable(states);
    },
    error(e) {
        const msg = document.createTextNode(`${e.code}: ${e.text}`);
        document.body.appendChild(msg);
    }
});