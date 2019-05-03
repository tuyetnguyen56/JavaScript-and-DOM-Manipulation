// from data.js
var tableData = data;

// Referencing table
var tbody = d3.select("tbody");
console.log(data);

//loop through and append data
data.forEach((ufoRecord) => {
    var row = tbody.append("tr");
    Object.entries(ufoRecord).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
  

// Selecting the submit button
var submit = d3.select("#filter-btn");

submit.on("click", function() {
  // prevents page from refreshing
  d3.event.preventDefault();
  d3.selectAll("td").remove();
  // Convert user inputs as html using #
  var inputElement = d3.select("#datetime");
  // Retrieve the value property
  var inputValue = inputElement.property("value");

  //filter the data
  var filterData = data.filter(dataFilter=> dataFilter.datetime === inputValue);

  // looping/displaying through filtered data
  filterData.forEach((filData) => {
    var row = tbody.append("tr");
    Object.entries(filData).forEach(([key, value]) => {
      var cell = tbody.append("td");
      cell.text(value);
    });
  });
});
