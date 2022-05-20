//import logo from './logo.svg';
import './App.css';
import React , {Component} from 'react'

const item = {
  brand: 'Tiger of Sweden',
  title: 'Leonard coat',
  description: 'Minimalistic coat in cotton-blend',
  descriptionFull: 'Men\'s minimalistic overcoat in cotton-blend. Features a stand-up collar, concealed front closure and single back vent. Slim fit with clean, straight shape. Above-knee length.',
  price: 399,
  currency: '£'
}

class ShopItemClass extends Component {
  render() { 
    const {item} = this.props;
    
    return <ul>
      <h2>{item.brand}</h2>  
      <h1>{item.title}</h1>
      <h3>{item.description}</h3>
      <div class="description">
        {item.descriptionFull}
      </div>
      <div class="highlight-window mobile"><div class="highlight-overlay"></div></div>
      <div class="divider"></div>
      <div class="purchase-info">
      <div class="price">{item.currency}{item.price}</div>
        <button>Добавить в корзину</button>
      </div>
    </ul>

  }
}

function App() {
  return (
    <div className="container">
      <div className="background-element">
      </div>
      <div className="highlight-window">
        <div className='highlight-overlay'></div>
      </div>
      <div className="window">
        <ShopItemClass item={item} />
      </div>
    </div>
  );
}
export default App;
