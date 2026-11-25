import Greeting from "./component/Greeting";
import DonationButton from "./component/DonationButton";
const App = () =>{
  const donateFn = () => {
        alert("Thank you for donating");
    }
  return (
    <div>
      <Greeting name="Alex" message="Good morning" age = "20 years"/>
      <Greeting name="John" message="Good Afternoon" age = "21 years"/>
      <Greeting name="Smith" message="Good evening" age = "22 years"/>
      <DonationButton onDonate = {donateFn}/>

    </div>
  );
};

export default App;