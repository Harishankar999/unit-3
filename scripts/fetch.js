// https://masai-mock-api.herokuapp.com/news/top-headlines?country=in

// https://masai-mock-api.herokuapp.com/news/top-headlines?country={country code}

// https://masai-mock-api.herokuapp.com/news?q={query}


let searchNews = async (query) =>{
    try{
        let res = await fetch(`https://masai-mock-api.herokuapp.com/news?q=${query}`);
        let data =await res.json();
        return data;
    }catch(err){
        console.log(err);
    }
}

let append = (data,container) => {
    console.log(data);
    data.forEach(({description,urlToImage,title})=>{
        //console.log(description,urlToImage,title);
        let box1 = document.createElement("div");
        box1.setAttribute("id","box1");
        
        let box2 = document.createElement("div");
        box2.setAttribute("id","box2");

        let image = document.createElement("img");
        image.src = urlToImage;
        image.setAttribute("class","img")

        let des = document.createElement("p");
        des.innerText = description;

        let tit = document.createElement("b");
        tit.innerText = title;

        box1.append(image,box2);
        box2.append(tit,des);
        container.append(box1);
        
    })
}



export {searchNews,append}

// let append = (data,container) => {
//     data.forEach()
// }