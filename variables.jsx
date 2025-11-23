//project 3 use map,filter and ternary operatorc
function userlist(){
    const users=["Saumya","Manu","Sara"];
    return{
        <div>
        <ul>{users.map((user, index) => (
      <li key={index}>{user}</li>
    ))}
        </ul>
        </div>
}
    //use filter code
    const data = [1, 2, 3, 4, 5];
const evenNumbers = data.filter(num => num % 2 === 0);

return{
 <div>
 {evenNumbers.map(n => <p>{n}</p>)}
}
 </div>;

//use ternary operator
const isLoggedIn = true;

export (
  <div>
    {isLoggedIn ? <h1>Welcome User</h1> : <h1>Please Login</h1>}
  </div>
);



    
    

