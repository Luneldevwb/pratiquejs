// JSON формат передачи данных

// let options = {
//     width: 1366,
//     height: 768,
//     background: 'red',
//     font: {
//         size: '16px',
//         color: '#fff'
//     }
// };
// console.log(JSON.parse(JSON.stringify(options))); // On utilise la methode parse  afin de faire l'operation contraire. 
// console.log(JSON.stringify(options)); // On utilise la methode stringfy afin de transformer les elet js au format json(les elts sont tjrs entre "" ).

let inputRub = document.getElementById('rub'),
    inputUsd = document.getElementById('usd');

inputRub.addEventListener('input', () => {
    let request = new XMLHttpRequest();

    //Methods Ajax
    //request.open(method(POST,GET), url, async, login,pass )

    request.open('GET', '../lesson11/current.json');
    request.setRequestHeader('Content-type', 'application/json; charset=utf-8');
    request.send();

    //Proprietes Ajax
    //Status( ca peut 404 ou autre)
    //StatusText(contient la reponse par expl ok ou not found)
    // responseText (contient le texte et la reponse du serveur) / response
    //readyState(l'etat actuel de la demande);

    request.addEventListener('readystatechange', function() {
        if(request.readyState === 4 && request.status == 200) {
            let data = JSON.parse(request.response);

            inputUsd.value = inputRub.value / data.usd;
        } else inputUsd.value = 'Something was wrong!';
    });

});