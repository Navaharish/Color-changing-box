import { useState } from 'react';
import BoxColor from './ColorComponent/BoxColor';
import BoxInput from './ColorComponent/BoxInput';


function App() {
  const [Color, setColor] = useState('')

  const [isItDark, setisItDark] = useState(true)

  const handleToggle = () => {
    setisItDark(!isItDark)
  }
  return (
    <div className="App">
      <BoxColor
        Color={Color}
        isItDark={isItDark}
      />
      <BoxInput Color={Color}
        isItDark={isItDark}
        setColor={setColor}
        handleToggle={handleToggle} />


    </div>
  );
}

export default App;
