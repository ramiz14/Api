if (localStorage.getItem('products')===null) {
    localStorage.setItem('products',JSON.stringify([]))
}


function Fetch() {
    fetch('https://fakestoreapi.com/products')
            .then(res=>res.json())
            .then(products=>
                products.forEach(pr => {
                    document.querySelector('.all-products').innerHTML+=`
                    <div class="col-lg-3 mt-5">
                    <div class="card" style="width: 18rem;">
                            <img src=${pr.image} class="card-img-top" alt="...">
                            <div class="card-body">
                            <h5 class="card-title">${pr.title.length>20?pr.title.slice(0,20)+"...":pr.title}</h5>
                            <p class="card-text">${pr.description.length>40?pr.description.slice(0,40)+"...":pr.description}</p>
                            <p class="prc"><span class="num">${pr.price}</span>$</p>
                            </div>
                        </div>
                    `
                })
            )
           
}
Fetch()
