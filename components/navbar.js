function navbar () {
    return `
    <div>
        <h1><a href="index.html">News App</a></h1>
      </div>
      <div>
        <input type="text" placeholder="Search News" id="search_input" >
      </div>`;
}

function catagory () {
  return `
      <h3 id="in">India</h3>
      <h3 id="ch">China</h3>
      <h3 id="us">USA</h3>
      <h3 id="uk">United Kingdom</h3>
      <h3 id="nz">New Zealand</h3>
    `;
}

export { navbar };

export { catagory }