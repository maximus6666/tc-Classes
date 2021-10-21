export default async function fetchData(url) {
  const loader = document.createElement('div');
    const title = document.createElement('h3');
    title.innerText = 'Loading...';
    loader.append(title);
    
    loader.classList.add('loader');
  
  try {
    document.body.append(loader);
    const res = await fetch(url);
    const data = await res.json();

    return data
  }
  catch(err) {
    console.error(err);
    alert('Something went wrong, please try again later.')
  }
  finally {
    const loader = document.querySelector('.loader');
    loader.remove();
  }
}

export const createCounter = function() {
  //closure
  let counter = 0; 

  return function() {
   return ++counter;
  }
}
