import Planet from './components/planets/planet';

function App() {
  return (
    <div>
      <Planet url="https://upload.wikimedia.org/wikipedia/commons/thumb/d/d9/Mercury_in_color_-_Prockter07-edit1.jpg/280px-Mercury_in_color_-_Prockter07-edit1.jpg"
              description="Mercúrio é o menor e mais interno planeta do Sistema Solar, orbitando o Sol a cada 87,969 dias terrestres."
              name="Mercúrio"
              wiki="https://pt.wikipedia.org/wiki/Merc%C3%BArio_(planeta)"/>
      <hr/>
      <Planet url="https://upload.wikimedia.org/wikipedia/commons/thumb/2/2b/Jupiter_and_its_shrunken_Great_Red_Spot.jpg/300px-Jupiter_and_its_shrunken_Great_Red_Spot.jpg"
              description="Júpiter é o maior planeta do Sistema Solar, tanto em diâmetro quanto em massa, e é o quinto mais próximo do Sol."
              name="Júpiter"
              wiki="https://pt.wikipedia.org/wiki/J%C3%BApiter_(planeta)#:~:text=J%C3%BApiter%20%C3%A9%20o%20maior%20planeta,com%20Saturno%2C%20Urano%20e%20Netuno."/>
      <hr/>
      <Planet url="https://upload.wikimedia.org/wikipedia/commons/thumb/0/02/OSIRIS_Mars_true_color.jpg/280px-OSIRIS_Mars_true_color.jpg"
              description="Marte é o quarto planeta a partir do Sol, o segundo menor do Sistema Solar."
              name="Marte"
              wiki="https://pt.wikipedia.org/wiki/Marte_(planeta)"/>
    </div>
  );
}

export default App;
