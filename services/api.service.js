
const API_URL = 'https://api.ingrid.study/graphql';

export const registerUser = async (username, password) => {
  const query = JSON.stringify({
    query: `
      mutation Mutation {
        registerUser(username: "${username}", password: "${password}")
      }
  `})

  return fetch(API_URL, { method: 'POST', body: query, headers: { 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(err => err);
}

export const loginUser = async (username, password) => {
  const query = JSON.stringify({
    query: `
      mutation Mutation {
        loginUser(username: "${username}", password: "${password}")
      }
  `})

  return fetch(API_URL, { method: 'POST', body: query, headers: { 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(err => err);
}

export const getHeatMaps = async (username) => {
  const query = JSON.stringify({
    query: `
      query Query {
        getUserProfile(username: "${username}") {
          heatmaps {
            provider,
            heatmapItems {
              date,
              weight
            }
          }
        }
      }
  `});

  return fetch(API_URL, { method: 'POST', body: query, headers: { 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(err => err);
}


export const getMyHeatMaps = async () => {
  const query = JSON.stringify({
    query: `
      query Query {
        getUserProfile {
          heatmaps {
            provider,
            heatmapItems {
              date,
              weight
            }
          }
        }
      }
  `});

  return fetch(API_URL, { method: 'POST', body: query, headers: { 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(err => err);
}

export const setExtensions = async (extensionList) => {
  const JSONextensionList = JSON.stringify(extensionList)
  console.log(extensionList);
  const query = JSON.stringify({
    query: `
      mutation Mutation {
        updateUserExtensions(extensionList: ${JSONextensionList})
      }
  `});
  console.log(query);
  return fetch(API_URL, { method: 'POST', body: query, headers: { 'Content-Type': 'application/json' } })
    .then(res => res.json())
    .catch(err => err);
}

