function signIn(e) {
    e.preventDefault();
    let form = document.getElementById("form");
    // console.log(form)

    // console.log(form);
    let email = form.email.value;
    let password = form.password.value;
    // console.log(email,password);
    let all_users = JSON.parse(localStorage.getItem("Users_cart"));
    // console.log(all_users);
    all_users.forEach(function(user){
      if(email === user.email && password === user.password){
        //   alert("valid")
        // window.location.href = "onlinestore.html"e
        
      }else{
          alert("Invalid email or password")
      }
        
// console.log(user.email,user.password);
    })
}