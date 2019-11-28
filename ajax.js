// document.getElementById('localGet').addEventListener('submit', localGet);
// document.getElementById('localPost').addEventListener('submit', localPost);
document.getElementById('postUser').addEventListener('submit', newFetch);
// document.getElementById('postData').addEventListener('submit', postData);


async function newFetch(event) {
  event.preventDefault();

  const user_object = JSON.stringify({"user":{"name":"Safari Hammond","phone":"07854217123","email":"safari.hammond65615@ralphandrusso.com","user_fields":{"user_title":"Mr","user_firstname":"Matt","user_secondname":"Hammond","preferred_contact_method":"preferred_contact_method_whatsapp"}}});
  const ticket_object = JSON.stringify({"request":{"subject":"Ralph & Russo Enquiry - Ready To Wear Enquiry","requester":{"name":"Matt Hammond","email":"matthew.hammond@ralphandrusso.com"},"comment":{"body":"Button Test"},"via":{"channel":"Shopify Zendesk API"},"custom_fields":[{"id":"360001047117","value":"contactus:ready_to_wear_enquiry"},{"id":"360001038377","value":"United Kingdom"},{"id":"360001172498","value":"preferred_contact_method_whatsapp"},{"id":"360001345777","value":"enquiry_source_contact_us_form"}]}});

  try {
    const user = await postData('https://ralphandrussoclientcare.zendesk.com/api/v2/users/create_or_update.json', user_object);
    console.log(user);
    const ticket = await postData('https://ralphandrussoclientcare.zendesk.com/api/v2/requests.json', ticket_object);
    console.log(ticket);
  } catch (error) { 
    console.error(error);
  }

  async function postData(url = '', post_object = '') {
    const response = fetch(url, {
      "method": "POST",
      "mode": "cors",
      "headers": {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer *******************************"
      },
      "body": post_object
    });
  
    return await response;
  }
}


























function localGet(event) {
  event.preventDefault();

  fetch("http://127.0.0.1:3000/url", {
    "method": "GET",
    "mode": "cors",
    "headers": {
      "Content-Type": "application/json; charset=utf-8"
    }
  })
  .then(response => response = response.json())
  .then(function(data) {
    document.getElementById('response').value = JSON.stringify(data.body);
  })
  .catch(err => {
    console.log(err);
  });
}

function localPost(event) {
  event.preventDefault();

  fetch("http://127.0.0.1:3000/users", {
    "method": "POST",
    "mode": "cors",
    "crossDomain": true,      
    "processData": false,
    "headers": {
      "content-type": "text/plain",
      "authorization": "Basic cGhpbGxpcC5tYXh3ZWxsQHJhbHBoYW5kcnVzc28uY29tOkZhc2hpb24xMjM0"
    },
    "body": 1
  })
  .then(response => response = response.json())
  .then(function(data) {
    document.getElementById('response').value = JSON.stringify(data.body);
  })
  .catch(err => {
    console.log(err);
  });
}

function postUser(event) {
  event.preventDefault();
  
  const user_object = {"user":{"name":"Safari Hammond","phone":"07854217123","email":"safari.hammond65615@ralphandrusso.com","user_fields":{"user_title":"Mr","user_firstname":"Matt","user_secondname":"Hammond","preferred_contact_method":"preferred_contact_method_whatsapp"}}};
  const ticketRequest = postRequest();

  function postRequest() {
    console.log("Begin Request");
  
    fetch("https://ralphandrussoclientcare.zendesk.com/api/v2/users/create_or_update.json", {
      "method": "POST",
      "mode": "cors",
      "headers": {
        "Content-Type": "application/json; charset=UTF-8",
        "Authorization": "Bearer 617f74522c2d8e9f595f038a6baca0076ccc8e1b12895d92f9e91cb118a4f7d2"
      },
      "body": JSON.stringify(user_object)
    })
    .then(response => response = response.json())
    .then(data => {
      document.getElementById('response').value = JSON.stringify(data);
      postData();
    })
    .catch(err => {
      console.log(err);
    });
  }
}

function postData(event){

  const ticket_object = {"request":{"subject":"Ralph & Russo Enquiry - Ready To Wear Enquiry","requester":{"name":"Matt Hammond","email":"matthew.hammond@ralphandrusso.com"},"comment":{"body":"Button Test"},"via":{"channel":"Shopify Zendesk API"},"custom_fields":[{"id":"360001047117","value":"contactus:ready_to_wear_enquiry"},{"id":"360001038377","value":"United Kingdom"},{"id":"360001172498","value":"preferred_contact_method_whatsapp"},{"id":"360001345777","value":"enquiry_source_contact_us_form"}]}};
  const ticketRequest = postRequest();

  function postRequest() {
    console.log("Begin Request");

    fetch("https://ralphandrussoclientcare.zendesk.com/api/v2/requests.json", {
      "method": "POST",
      "mode": "cors",      
      "headers": {
        "content-type": "application/json",
        "authorization": "Basic 685b6b433740b36ca8300b4f6cac64024847c8cfb64a6a91584cfdd50ad030a5"
      },
      "body": JSON.stringify(ticket_object)
    })
    .then(response => response = response.json())
    .then(data => {
      document.getElementById('response').value = JSON.stringify(data);
    })
    .catch(err => {
      console.log(err);
    });
    
  }
};

// "authorization": "Basic cGhpbGxpcC5tYXh3ZWxsQHJhbHBoYW5kcnVzc28uY29tOkZhc2hpb24xMjM0"

