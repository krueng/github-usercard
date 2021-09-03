import axios from 'axios';

/*
  STEP 1: using axios, send a GET request to the following URL
    (replacing the placeholder with your Github name):
    https://api.github.com/users/<your name>
*/
const entryPoint = document.querySelector('.cards');

const getGithub = async (arrFollowers) => {
  try {
    const res = await axios.get(`https://api.github.com/users/krueng`)

    const githubData = res.data;
    const githubNode = githubCard(githubData);
    entryPoint.appendChild(githubNode);

    arrFollowers.forEach(async name => {
      const res = await axios.get(`https://api.github.com/users/${name}`)
      const githubData = res.data;
      const githubNode = githubCard(githubData);
      entryPoint.appendChild(githubNode);
    })
  } catch (error) {
    const errTxt = document.createElement('p');
    errTxt.textContent = 'Please try again!'
    entryPoint.appendChild(errTxt);
  } finally {
    console.log('All good!')
  }
}

// const getGithub = async () => {
//   try {
//     const res = await axios.get(`https://api.github.com/users/krueng`)

//     const githubData = res.data;
//     // console.log(githubData);
//     const githubNode = githubCard(githubData);
//     entryPoint.appendChild(githubNode);

//     const followers = await axios.get(githubData.followers_url);
//     console.log(followers);
//     const followersData = followers.data;

//     followersData.forEach(async follower => {
//       const res = await axios.get(`https://api.github.com/users/${follower.login}`)
//       const githubData = res.data;
//       const githubNode = githubCard(githubData);
//       entryPoint.appendChild(githubNode);
//     })
//   } catch (error) {
//     const errTxt = document.createElement('p');
//     errTxt.textContent = 'Please try again!'
//     entryPoint.appendChild(errTxt);
//   } finally {
//     console.log('All good!')
//   }
// }

// axios.get(`https://api.github.com/users/krueng`).then(res => {
//   const githubData = res.data;
//   const githubNode = githubCard(githubData);
//   entryPoint.appendChild(githubNode);

//   followersArray.forEach(name => {
//     const entryPoint = document.querySelector('.cards');
//   axios.get(`https://api.github.com/users/${name}`).then(res => {
//     const githubData = res.data;
//     const githubNode = githubCard(githubData);
//     entryPoint.appendChild(githubNode);
//   })
//   })
// })

//  console.log(axiosGet);
// 
/*
  STEP 2: Inspect and study the data coming back, this is YOUR
    github info! You will need to understand the structure of this
    data in order to use it to build your component function

    Skip to STEP 3 (line 34).
*/

/*
  STEP 4: Pass the data received from Github into your function,
    and append the returned markup to the DOM as a child of .cards
*/

/*
  STEP 5: Now that you have your own card getting added to the DOM, either
    follow this link in your browser https://api.github.com/users/<Your github name>/followers,
    manually find some other users' github handles, or use the list found at the
    bottom of the page. Get at least 5 different Github usernames and add them as
    Individual strings to the friendsArray below.

    Using that array, iterate over it, requesting data for each user, creating a new card for each
    user, and adding that card to the DOM.
*/

const followersArray = ['BrityHemming', 'CRHarding', 'tetondan', 'dustinmyers', 'justsml', 'luishrd', 'bigknell'];

function githubCard({ avatar_url, name, login, location, html_url, followers, following, bio }) {

  //Init
  const divCard = document.createElement('div');
  const img = document.createElement('img');
  const divCardInfo = document.createElement('div');
  const hName = document.createElement('h3');
  const pUserName = document.createElement('p');
  const pLocation = document.createElement('p');
  const pProfile = document.createElement('p');
  const aGhUrl = document.createElement('a');
  const pFollowers = document.createElement('p');
  const pFollowing = document.createElement('p');
  const pBio = document.createElement('p');

  //classes
  divCard.classList.add('card');
  divCardInfo.classList.add('card-info');
  hName.classList.add('name');
  pUserName.classList.add('username');

  //Assigning
  img.src = avatar_url
  hName.textContent = name;
  pUserName.textContent = login;
  pLocation.textContent = `Location: ${location}`;
  aGhUrl.href = html_url;
  aGhUrl.textContent = html_url;
  pProfile.textContent = `Profile: `
  pFollowers.textContent = `Followers: ${followers}`;
  pFollowing.textContent = `Following: ${following}`;
  pBio.textContent = `Bio: ${bio}`;

  //structure like HTML
  divCard.appendChild(img);
  divCard.appendChild(divCardInfo);
  divCardInfo.appendChild(hName);
  divCardInfo.appendChild(pUserName);
  divCardInfo.appendChild(pLocation);
  divCardInfo.appendChild(pProfile);
  divCardInfo.appendChild(pFollowers);
  divCardInfo.appendChild(pFollowing);
  divCardInfo.appendChild(pBio);
  pProfile.appendChild(aGhUrl);


  return divCard;
}
getGithub(followersArray);
/*
  STEP 3: Create a function that accepts a single object as its only argument.
    Using DOM methods and properties, create and return the following markup:

    <div class="card">
      <img src={image url of user} />
      <div class="card-info">
        <h3 class="name">{users name}</h3>
        <p class="username">{users user name}</p>
        <p>Location: {users location}</p>
        <p>Profile:
          <a href={address to users github page}>{address to users github page}</a>
        </p>
        <p>Followers: {users followers count}</p>
        <p>Following: {users following count}</p>
        <p>Bio: {users bio}</p>
      </div>
    </div>
*/

/*
  List of LS Instructors Github username's:
    tetondan
    dustinmyers
    justsml
    luishrd
    bigknell
*/
