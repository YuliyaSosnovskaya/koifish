export const addItemsToFirebase = (item, rollId) => {
  fetch(`https://koifish-21741-default-rtdb.europe-west1.firebasedatabase.app/${rollId}.json`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
};
