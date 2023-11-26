import './App.css';
import Header from './components/Header/Header';
import Offer from './components/Offer/Offer';
import Rental from './components/Rental/Rental';
import Services from './components/Services/Services';
import Slogan from './components/Slogan/Slogan';

function App() {
  const color1 = '#22356F';

  return (
    <div>
      <Header/>
      <Offer/>
      <Slogan text={'Приехав к нам однажды, многие наши клиенты становятся постоянными, а часть из них даже друзьями. А также в нашей мастерской можно отремонтировать электросамокат и электровелосипед.'} />
      <Services/>
      <Rental/>

    </div>
  );
}

export default App;
