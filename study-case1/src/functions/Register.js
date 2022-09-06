import axios from 'axios';

function revision(user) {
    console.log(user.email);
    console.log("hello");
}   

function show(products){
    console.log(products.data);
}

const getproducts = async(state) => {
    const peticion = await axios.get('http://localhost:1234/product');
    state(peticion.data);
}

const getorders = async(state) => {
    const peticion = await axios.get('http://localhost:1234/orders');
    state(peticion.data);
}

export{
    getproducts
}
export{
    getorders
}