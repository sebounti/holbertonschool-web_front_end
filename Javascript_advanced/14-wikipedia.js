function queryWikipedia(callback) {
  let request = new XMLHttpRequest();
  request.open(
    "GET",
    "https://en.wikipedia.org/w/api.php?format=json&action=query&prop=extracts&exintro&explaintext&redirects=1&titles=Stack%20Overflow&origin=*",
  );
  request.send();
  request.onload = () => {
    if (request.status === 200) {
      const response = JSON.parse(request.responseText);
      const pageId = Object.keys(response.query.pages)[0]; // Get the page ID
      const extract = response.query.pages[pageId].extract; // Get the extract text
      callback(extract); // Call the callback function with the extracted text
    } else {
      console.error("Error: Request failed with status " + request.status);
    }
  };
}

// Call queryWikipedia with createElement as the callback function
queryWikipedia(createElement);
