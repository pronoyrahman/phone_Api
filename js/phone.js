const loadPhone=async(searchText)=>{
    const res=await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`);
    const data=await res.json();
    const phones=data.data;
    // console.log(phone);
    displayPhones(phones);
}


// ekta ekta kore data pawa jay
const displayPhones = phones => {
    //  console.log(phones);
    // step 1
    const phoneContainer = document.getElementById('phone-container');
    //clear phone container card before adding new cards
     phoneContainer.innerHTML ='';

    //  proti ta phn ke niyar jnno forEach but alada kore kuthaw use hobe na
     phones.forEach(phone =>{
         console.log(phone)
        //  2 create div
        const phoneCard = document.createElement('div');
        phoneCard.classList = `card p-4 bg-gray-100 shadow-xl`;
        // step 3 set inner html
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="Shoes" /></figure>
        <div class="card-body">
        <h2 class="card-title">${phone.phone_name} </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div class="card-actions justify-end">
        <button class="btn btn-primary">Buy Now</button>
        </div>
        </div>
      </div>
        `;
        // step 4 append child
        phoneContainer.appendChild(phoneCard);
     })
}

// handle search button
const handleSearch = ()=>{

    const searchField = document.getElementById('search-fields');
    const searchText = searchField.value;
    console.log(searchText);
    loadPhone(searchText)
}

// loadPhone();