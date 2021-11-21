
const URL = 'https://fakestoreapi.com/products';

let data = await fetch(URL);
data = await data.json();
console.log(data);

let sortUp = document.querySelector('#sortUp');
let sortDown = document.querySelector('#sortDown');

sortUp.addEventListener('click', function() {
    data.sort((a, b) => a.price - b.price);
    renderList();       
})

sortDown.addEventListener('click', function() {
    data.sort((a, b) => b.price - a.price);
    renderList();           
})

renderList();
        
function renderList(){
        cardPlace.innerHTML = data.map(item => `

                <div class='p-2 card-group'>
                    <div class="card shadow shadow-lg" >
                        <img src="${item.image}" class="card-img-top p-2" alt="...">
                        <div class="card-body">
                            <h5 class="card-title">
                               ${item.title}
                            </h5>
                            <p class="card-text">
                               ${item.description}
                            </p>
                        </div>
                        <div class="card-footer">
                            <p class="text-end fw-bold fs-4">$${item.price}</p>
                        </div>
                    </div>
                </div>
    `).join('');
}
