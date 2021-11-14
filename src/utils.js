export const addItemsToFirebase = (item, rollId) => {
  fetch(`https://koifish-21741-default-rtdb.europe-west1.firebasedatabase.app/${rollId}.json`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(item)
  })
};

export const addOrderToFirebase = (order) => {
  return fetch(`https://koifish-21741-default-rtdb.europe-west1.firebasedatabase.app/orders.json`, {
    method: 'POST',
    headers:{
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(order)
  })
};

export const getRollFromFirebase = (rollId) => {
  return fetch(`https://koifish-21741-default-rtdb.europe-west1.firebasedatabase.app/${rollId}.json`);
}


