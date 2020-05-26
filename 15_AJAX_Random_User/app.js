let fetchPerson = () => {
    $.ajax({
        url: 'https://randomuser.me/api/',
        dataType: 'json',
        success: function(data) {
            let person = data.results[0];
            console.log(person);
            displayPerson(person);
        }
    });
};

setInterval(fetchPerson,1000);



let displayPerson = (person) => {
    let personCard = `<div class="col-md-3">
                        <div class="card mt-4">
                            <div class="card-body text-center bg-success text-white">
                                <img src="${person.picture.large}" class="img-fluid img-thumbnail animated jackInTheBox">
                                <h3 class="mt-2">${person.name.first} ${person.name.last}</h3>
                                <p class="lead">${person.email}</p>
                                <p class="lead">${person.dob.age} yrs</p>
                                <ul class="list-group text-dark animated slideInUp">
                                    <li class="list-group-item">
                                        Street : ${person.location.street.number} , ${person.location.street.name}
                                    </li>
                                    <li class="list-group-item">
                                        City : ${person.location.city}
                                    </li>
                                    <li class="list-group-item">
                                        State : ${person.location.state}
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </div>`;
    $('#card-row').append(personCard);
};
