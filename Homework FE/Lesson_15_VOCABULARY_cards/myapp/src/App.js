import './App.css';
import AddCardForm from './components/AddCardForm/AddCardForm';
import CardsContainer from './components/CardsContainer/CardsContainer';
import Triggers from './components/Triggers/Triggers';
import { words_data } from './data/words_data';
import { useState } from 'react'

function App() {

  const [words, setWords] = useState(words_data)

  const chang_to_eng = () => {
    let wordsen = [...words]
    wordsen.map(el => el.language = 'en')
    setWords(wordsen)
  }

  const chang_to_rus = () => {
    setWords(words.map(el => ({...el, language: 'rus'})))
  }

  const chang_card = (event) => {
    const a = event
    // let new = [...words]
    // new.map(el => el.id === id ? el.language = 'en' : el.language = 'rus')
    console.log(a);
  }

//   function resetPriceProduct (id) {
//     const newPrice = [...products]
//     newPrice.map(el => el.id === id ? el.price = 0 : el.price)
//     setProducts(newPrice)
// }

  return (
    <div>
      <AddCardForm/>
      <CardsContainer words_data={words} chang_card={chang_card}/>
      <Triggers chang_to_eng={chang_to_eng} chang_to_rus={chang_to_rus}/>
    </div>
  );
}

export default App;
