function fetchHelloDataFromAPI() {
    fetch('http://localhost:3000/test/helloclient', { //tests endpoint with fixed value to verify server works
        method: 'GET',
        headers: new Headers({ //sends our headers to the server with the Headers() constructor object.
            'Content-Type': 'application/json'
        })
    })
        .then(function (response) {
            console.log("Fetch response:", response)
            return response.text(); //the value received is a string, not a JSON object, so .text() is used instead of .json()
        })
        .then(function (text) {
            console.log(text);
        });
}

/*************************
 * 2 POST long hand: /one
 *************************/

 function postToOne() {
     var url = 'http://localhost:3000/test/one';

     fetch(url, { //fetching the url
         method: 'POST', //the route in the server handles a POST request, so our method type is POST
         headers: new Headers({
             'Content-Type': 'application/json'
         })
     }).then(
         function(response){ //we pass the response into a Promise that returns the response as plain text
             return response.text()
         })
         .catch(
             function(error){
                 console.error('Error:', error)
             })
             .then(
                 function(response){ //prints the plain text response to the console
                     console.log('Success:', response);
                 }
             )
 }

 /************************
  * 3 POST /one : Arrow Function
  ************************/

  function postToOneArrow(){
      var url = 'http://localhost:3000/test/one';

      fetch(url, { //we're reaching out to an endpoint with a POST request and then add the appropriate headers
          method: 'POST',
          headers: new Headers({
              'Content-Type': 'application/json'
          })
      }).then(res => res.text()) // we ask for a plain text response
      .catch(error => console.error('Error:', error))
      .then(response => console.log('Success:', response)); //prints the data to the console
  }

  //the below function adds content to the database instead of just retrieving a response when we POST

  function postData() {
      let content = { testdata: {item: 'This was saved!' } }; //sets up an object (as if we did this in Postman).  We have a preset string as the value of the 'item' property

      let testDataAfterFetch = document.getElementById('test-data'); //these two elements will hold the value of the response that comes back after the post is stored.
      let createdAtAfterFetch = document.getElementById('created-at');

      fetch('http://localhost:3000/test/seven', {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json'
          },
          body: JSON.stringify(content) // we pass in our pre-defined object into the fetch call within the 'body' property.  Notice that the 'method' property is now POST instead of GET.
      })
      .then(response => response.json())
      .then(function (text) {
          console.log(text);
            
          testDataAfterFetch.innerHTML = text.testdata.testdata;
          createdAtAfterFetch.innerHTML = text.testdata.createdAt;
      });
  }

  /**********************
   * 4 GET FROM /ONE - Display Data
   **********************/

   function fetchFromOneDisplayData(){
    // the below sets up our URL into a variable and targets the 'data-one' id in the DOM in another variable
    let url = 'http://localhost:3000/test/one';
    let dataView = document.getElementById('display-one');

    //creates a fetch with headers the request method of GET.  Also contains chained promises that handle the data when it returns or error handles.
    fetch(url, {
        method: 'GET',
        headers: new Headers({
            'Content-Type': 'application/json'
        })
    }).then(
        function(response){
            return response.json()
        })
        .catch(
            function(error){
                console.error('Error:', error)
            })
        .then(
            function(results){
                let myList = document.querySelector('#getjson'); //Inside the final .then(), we are going to work towards showing the returned data int he DOM.  We start by targeting the 'getjson' id in the DOM and attaching the value to the myList variable

                for (r of results){ //sets up a For Of loop
                    console.log('Response:', r.testdata);
                    var listItem = document.createElement('li'); //this variable uses the createElement() method which uses the For Of loop to create an 'li' for each loop
                    listItem.innerHTML = r.testdata; //stores the value of r.testdata in each newly created 'li'
                    myList.appendChild(listItem); //puts the 'li' into the unordered list (ul) with each literate of the For Of loop
                }
            }
        )
   }