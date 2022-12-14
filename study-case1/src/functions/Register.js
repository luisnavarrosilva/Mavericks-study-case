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
const getuser = async(state) => {
    const peticion = await axios.get("http://localhost:1234/user");
    state(peticion);
    
}
const getlogin = async(state,name) => {
    const cadena = "http://localhost:1234/user/" + name;
    const peticion = await axios.get(cadena);
    state(peticion);
}
const product = (product) => {
    console.log(product);
}
export{
    getproducts, getlogin, product
}
export{
    getorders
}
export{
    getuser
}
