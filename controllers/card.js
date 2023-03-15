const fetch = (...args) => import('node-fetch').then(({default: fetch}) => fetch(...args));

const key = "d6b69bfea5df78e21d4f57e2bc7a790d";
const token = "ATTA031fb371acc38991053e4ae4fd06343ac8b1f273958ac6e6ee0c9c9f1a82486cF8031E0E";
const idList = "6410af38a32b6adf75abba4c";

exports.createCard = (req, res) => {
    var requestData = req.body;
    
    const card = { ...requestData, key : key, token : token, idList : idList};

    let trelloRequestSuccess = false;
    
    // make the Trello API request
    fetch(`https://api.trello.com/1/cards`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json'
      },
      body : JSON.stringify(card)
    })
    .then(response => {
        console.log(
          `Response: ${response.status}`
        );
        // return response.json();
    })
    .then(json => {
        // process the Trello API response as needed
        trelloRequestSuccess = true;
    })
    .catch(err => {
        console.error(err);
    })
    .finally(() => {
        // send the response to the client
        if (trelloRequestSuccess) {
          res.status(200).json({ message: 'Success' });

        } else {
          res.status(500).json({ message: 'Error' });
        }
    });
};



  