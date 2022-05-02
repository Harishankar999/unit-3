// Ude Import export (MANDATORY)
import { navbar } from "../components/navbar.js";
document.getElementById("navbar").innerHTML=navbar();


import {searchNews,append} from "./fetch.js"

let search = (e) => {
    if(e.key ==="Enter"){
        let query = document.getElementById("search_input").value;
        searchNews(query).then((data)=>{
            let container = document.getElementById("results");
            container.innerHTML = null;
            append(data.articles,container)
        })
    }
}

// let searchNews = async () =>{
//     try{
//         let query = document.getElementById("search_input").value;
//         let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
//         let data =await res.json();
//         console.log(data.articles)
//     }catch(err){
//         console.log(err);
//     }
// }

document.getElementById("search_input").addEventListener("keydown",search);
