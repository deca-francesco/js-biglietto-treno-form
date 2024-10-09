console.log("js linked");

const full_nameEl = document.getElementById("full_name");
const distanceEl = document.getElementById("distance");
const age_rangeEl = document.getElementById("age_range");
const price_calcEl = document.getElementById("price_calc");

price_calcEl.addEventListener("click", function(e) {
    e.preventDefault();
    const price_per_km = 0.21;
    let ticket_cost = (price_per_km * distanceEl.value).toFixed(2);
    let discount = 0;
    let discount_msg = "0%";
    console.log(`Km: ${Number(distanceEl.value).toFixed(0)} | Età: ${Number(age_rangeEl.value).toFixed(0)}`);
    if (age_rangeEl.value < 18) {
        discount = ticket_cost * 0.2;
        discount = discount.toFixed(2);
        discount_msg = "20%";
    } else if (age_rangeEl.value > 65) {
        discount = ticket_cost * 0.4;
        discount = discount.toFixed(2);
        discount_msg = "40%";
    }
    let final_price = (ticket_cost - discount).toFixed(2);
    console.log(`Costo Finale: ${final_price} | Sconto: ${discount_msg}`);

    document.getElementById("return_box").classList.remove("d-none")

    document.querySelector(".traveler_data").innerHTML = (`
        <h4>Nome e Cognome</h4>
        <p>${full_nameEl.value}</p>
        <h4>Età</h4>
        <p>${Number(age_rangeEl.value).toFixed(0)}</p>
        `);

    document.querySelector(".ticket_data").innerHTML = (`
        <h4>Kilometri</h4>
        <p>${Number(distanceEl.value).toFixed(0)}</p>
        <h4>Prezzo</h4>
        <p>${final_price}€</p>
        `);
})
