console.log('here!');
//banner
var height = 450;
var width = 2750;
var dim = 50;

var svg = d3.select("body").append("svg")
            .attr("width", 3000)
            .attr("height", 1400);
var svg = d3.select('svg');

rect = svg.append("rect")
                .attr("x", dim)
                .attr("y", dim)
                .attr('width', width)
                .attr('height', height)
                // .attr('fill','blue');
rect.append("text")
    .attr("x", dim+20)
    .attr("y", dim+30)
    .text(function(d) {return "test"})

// //Make square
// var text = "<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque nec tortor semper, tincidunt velit ut, elementum lorem. In imperdiet molestie dui vel mattis. Mauris sit amet sapien fermentum, tincidunt justo vitae, accumsan lacus. Quisque ullamcorper blandit ligula, at convallis ante tincidunt id. Sed accumsan pretium neque vel iaculis. Nulla facilisi. Ut ultricies lacinia libero. Fusce ac nisl ut sapien pellentesque fermentum. Morbi non elit nunc. Praesent tempor leo in massa eleifend, eget luctus felis auctor. Nulla quis est faucibus, pellentesque massa et, finibus lacus. Mauris ac mollis arcu. Donec blandit tempor nisl, sit amet ullamcorper nisl efficitur in. Aliquam magna quam, interdum quis convallis nec, tempus id ipsum.</span>";
// var height = 450;
// var width = 700;
// var dim = 10;

// // var svg = d3.select("body").append("svg")
// //             .attr("width", 1400)
// //             .attr("height", 1400);
// var svg = d3.select('svg');

// svg.append("rect")
//                 .attr("x", dim)
//                 .attr("y", dim)
//                 .attr('width', width)
//                 .attr('height', height)
//                 .attr('fill','blue');
// // // var rectText1 = svg.append('rect')
// // //                 .attr('x', width + dim)
// // //                 .attr('y', dim)
// // //                 .attr('width', width)
// // //                 .attr('height', height)
// // //                 .attr('fill','white');
// //                 // .html("<span>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</span>");
// // var div = svg.append('div')
// //             .attr('class', 'container')
// //             .attr('x',width +dim)
// //             .attr('y',dim)
// //             .attr('width', width)
// //             .attr('height', height)
// //             .attr('fill', 'red');
// //                 // var text1 = svg.append('text')
// //                 // .attr('x', width + dim +50)
// //                 // .attr('y', dim+50)
// //                 // .attr('width', width)
// //                 // .attr('height', height)
// //                 // .attr('fill','black');
// // // var words1 = text1.append('tspan')
// // //                 .attr('x', width + dim +50)
// // //                 .attr('y', dim+50)
// //                 // .text(text);
// //                 // .html("Lorem ipsum dolor sit amet, consectetur adipiscing elit.");
// // var rectPic2 = svg.append('rect')
// //                 .attr('x', width + dim)
// //                 .attr('y', height + dim)
// //                 .attr('width', width)
// //                 .attr('height', height)
// //                 .attr('fill', 'blue');
// // var rectText2 = svg.append('rect')
// //                 .attr('x', dim)
// //                 .attr('y', height + dim)
// //                 .attr('width', width)
// //                 .attr('height', height)
// //                 .attr('fill','white');
// // var rectPic3 = svg.append('rect')
// //                 .attr('x', dim)
// //                 .attr('y', dim + (height*2))
// //                 .attr('width', width)
// //                 .attr('height', height)
// //                 .attr('fill','blue');
// // var rectText3 = svg.append("rect")
// //                 .attr("x", width + dim)
// //                 .attr("y", dim + (height*2))
// //                 .attr('width', width)
// //                 .attr('height', height)
// //                 .attr('fill','white');
