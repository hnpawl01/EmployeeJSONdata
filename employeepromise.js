
var setBanner = function (message)
{
	d3.select("#banner")
	.text(message);
}

var drawTable = function(employees)
{
var rows = d3.select("#employeeTable tbody")
	.selectAll("tr")
	.data(employees)
	.enter()
	.append("tr")
rows.append("td")
	.classed("one",true)
	.text(function(employee)
{
	
	return employee.firstName;
})
	
	rows.append("td")
	.classed("two",true)
	.text(function(employee)
{
	return employee.lastName;
})
	
	rows.append("td")
	.classed("three",true)
	.text(function(employee)
{
	return employee.bio;
})
	
	rows.append("td")
	.classed("four",true)
	.text(function(employee)
{
	return employee.email;
})
	
	rows.append("td")
	.classed("five",true)
	.text(function(employee)
{
	return employee.phone;
})
	rows.append("td")
	.classed("six",true)
	.text(function(employee)
{
	return employee.title;
})
	rows.append("td")
	.classed("seven",true)
	.text(function(employee)
{
	return employee.unit;
})
	
	rows.append("td")
	.append("img")
	.classed("eight",true)
	.attr("src", function (employee)
{
	return employee.photo;
		
})
	
};

//var shortListpromise = d3.json("employee.json")

	
	
	
	
	
	
	
	
	
	
	
	
	

var successFCN = function (employee)
{
	var shortList = employee.slice(0,2);
	console.log("employee", shortList);
	setBanner("Here are the Employees Information");
	drawTable(employee)
}
var failFCN = function (err)
{
	console.error("did not find file", err);
	setBanner("Employees Aren't Working");
}
var employeePromise = d3.json("employee.json")

employeePromise.then(successFCN, failFCN);