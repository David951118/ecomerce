function App() {
    const [menuVisible, setMenuVisible] = useState(false);
  
    const toggleMenu = () => {
      setMenuVisible(!menuVisible);
    };
  
    return (
      <div>
        <button id="hamburguer" onClick={toggleMenu}>
          Hamburguesa
        </button>
        <div id="Menu" className={menuVisible ? '' : 'hidden'}>
          {/* Contenido del menú */}
          <ul>
            <li>Enlace 1</li>
            <li>Enlace 2</li>
            <li>Enlace 3</li>
          </ul>
        </div>
      </div>
    );
  }
  
  export default App;