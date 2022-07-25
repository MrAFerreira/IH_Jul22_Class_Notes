//API
//Application Programming Interface
// REST API's

// fetch

/* fetch('https://api.spacexdata.com/v4/launches')
  .then((response) => {
    return response.json();
  })
  .then((data) => {
    //looping trough the array of objects
    data.forEach((launch) => {
      console.log(launch);
      //get the img link from each object
      const patchImage = launch.links.patch.small;
      const launchName = launch.name;
      const wiki = launch.links.wikipedia;

      // Create an h2 with the name of the launch, and link it to the wikipedia article

      const h2 = document.createElement('h2');
      h2.innerHTML = `<a href=${wiki}> ${launchName} </a>`;

      //Creating the image with DOM
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);

      //Inserting into the html
      document.body.appendChild(h2);
      document.body.appendChild(imgElement);
    });
  })
  .catch((err) => console.log(err)); */

//JSON - Javascript Object Notation

const displayMissions = async (limit = 10) => {
  try {
    const response = await fetch('https://api.spacexdata.com/v4/launches');
    const data = await response.json();
    const slicedData = data.slice(0, limit);
    slicedData.forEach((launch) => {
      console.log(launch);
      //get the img link from each object
      const patchImage = launch.links.patch.small;
      const launchName = launch.name;
      const wiki = launch.links.wikipedia;

      // Create an h2 with the name of the launch, and link it to the wikipedia article

      const h2 = document.createElement('h2');
      h2.innerHTML = `<a href=${wiki}> ${launchName} </a>`;

      //Creating the image with DOM
      const imgElement = document.createElement('img');
      imgElement.setAttribute('src', patchImage);
      imgElement.setAttribute('width', 200);

      //Inserting into the html
      document.body.appendChild(h2);
      document.body.appendChild(imgElement);
    });
  } catch (error) {
    console.log('Something broke!', error);
  }
};

displayMissions(50);
