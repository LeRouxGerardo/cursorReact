import CartWidget from "./CartWidget/CartWidget"


const NavBar = () => {
  return (
    <nav>
        <div>
            <h1>Da Capo Tienda</h1>
            <button>Indumentaria</button>
            <button>Accesorios</button>
            <button>Musica</button>
            <button>Entradas</button>
        </div>
        <CartWidget />
    </nav>
  )
}

export default NavBar