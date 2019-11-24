var trash = document.getElementsByClassName("trash");
var button1 = document.getElementsByClassName("button1")
var calorie = document.getElementsByClassName("calorie")
var calculate = document.getElementById("calculate")
var total = document.getElementsByClassName("total")

console.log(total)


// Array.from(button1).forEach(function(element) {
//       element.addEventListener('click', function(){
//         const food = this.parentNode.parentNode.childNodes[1].innerText
//         console.log("food", food)
//         const calorie = this.parentNode.parentNode.childNodes[3].innerText
//         console.log("calorie", calorie)
//         const date = this.parentNode.parentNode.childNodes[5].innerText
//         console.log("date", date)
//         fetch('messages', {
//           method: 'put',
//           headers: {'Content-Type': 'application/json'},
//           body: JSON.stringify({
//             'food': food,
//             'calorie': calorie,
//             'date':date
//           })
//         })
//         .then(response => {
//           if (response.ok) return response.json()
//         })
//         .then(data => {
//           console.log(data)
//           // window.location.reload(true)
//         })
//       });
// });

 calculate.addEventListener('click', function(){
   fetch("/getCalorieTotal")
   .then(res => res.json())
   .then(response => {
     results.innerHTML = response.calorieTotal
   })
   .catch(err => console.log(err))
      results.innerHTML = total
  })

Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        console.log(trash)
        const food = this.parentNode.childNodes[1].innerText;
        const calorie = this.parentNode.childNodes[3].innerText;
        // const date = this.parentNode.parentNode.childNodes[5].innerText
        console.log(element)
        fetch("yummy", {
          method: 'delete',
          headers: {
            "Content-Type": "application/json"
          },
          body: JSON.stringify({
            'food': food,
            'calorie': calorie,
            // 'date': date
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});
