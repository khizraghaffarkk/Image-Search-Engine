const formid =document.getElementById("search-form");
const inputfield=document.getElementById("inputfield");
const searchresultdiv =document.getElementById("search-result");
const showmorebtn= document.getElementById("show-more-btn");

let keyword="";
let page=1;
const accesskey="kyAcxwq_s_7KnSvg2afBB6k0d6oANl9oyu4TuTDNdl8";

async function fetchImages(){
    keyword=inputfield.value;
    const api_url=`https://api.unsplash.com/search/photos?page=${page}&query=${keyword}&client_id=${accesskey}&per_page=12`;
    const response= await fetch(api_url);
    const data= await response.json();
    console.log(data);
    
    if(page===1){
        searchresultdiv.innerHTML="";
    }
    
    const results =data.results;

    results.map((result)=>{
        const image= document.createElement("img");
        image.src=result.urls.small;
        const imageHTMLLink= document.createElement("a");
        imageHTMLLink.href=result.links.html;
        imageHTMLLink.target="_blank";
        imageHTMLLink.appendChild(image);
        searchresultdiv.appendChild(imageHTMLLink);
    })
    showmorebtn.style.display="block";
}

formid.addEventListener("submit", (e)=>{
    e.preventDefault();
    page=1;
    fetchImages();
})

showmorebtn.addEventListener("click",()=>{
    page++;
    fetchImages();
})