console.log("js linked");

const distanceEl = document.getElementById("distance");
const age_rangeEl = document.getElementById("age_range");
const price_calcEl = document.getElementById("price_calc");

price_calcEl.addEventListener("click", function() {
    const price_per_km = 0.21;
    let ticket_cost = (price_per_km * distanceEl.value).toFixed(2);
    let discount = 0;
    let discount_msg = "";
    console.log(`Km: ${distanceEl.value} | Età: ${age_rangeEl.value}`);
    if (age_rangeEl.value < 18) {
        discount = ticket_cost * 0.2;
        discount = discount.toFixed(2);
        discount_msg = "20%";
    } else if (age_rangeEl.value > 65) {
        discount = ticket_cost * 0.4;
        discount = discount.toFixed(2);
        discount_msg = "40%";
    } else if (age_rangeEl.value >= 18 && age_rangeEl.value <= 65) {
        discount = 0;
        discount_msg = "0%";
    }
    let final_price = (ticket_cost - discount).toFixed(2);
    console.log(`Costo Finale: ${final_price} | Sconto: ${discount_msg}`);
})