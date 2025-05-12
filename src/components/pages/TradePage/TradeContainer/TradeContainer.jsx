import React from 'react';
import './TradeContainer.css';
import ItemCardHorizontal from './ItemCardHorizontal/ItemCardHorizontal';
export default function TradeContainer() {
  return (
    <div className="trade-container">
      <div className="left-panel">

        <div className="item-section">
          <h2>What I Take:</h2>
          <div className="item-card-wrapper">
            <ItemCardHorizontal category="Furniture" name="Cozy Armchair"
            imageUrl="https://m.media-amazon.com/images/I/91Tg9-1qRvL._AC_UF894,1000_QL80_.jpg"
            description="A comfortable armchair perfect for reading."
            size="large"
            />
          </div>
        </div>

        <div className="item-section">
          <h2>What I Give:</h2>
          <div className="item-card-wrapper">
            <ItemCardHorizontal
              name="Summer Dress"
              category="Clothing"
              imageUrl="https://luxferity.com/up/shop-news/content/dior-haute-couture-spring-summer-2024-collection-look-27-1200x1500.jpg"
              description="Light and breezy dress for summer days."
              size="large"
            />
          </div>
          <button className="bid-button">Make a Bid</button>
        </div>

      </div>

      <div className="right-panel">
        <h2>My Items:</h2>


        <div className="my-items">
        <div className="item-row">
          <input type="checkbox" /> <ItemCardHorizontal name="IKEA lamp" category="Furniture"
                    imageUrl="https://www.ikea.com/ca/en/images/products/fado-table-lamp-white__1061714_ph177857_s5.jpg" /> </div>
          <div className="item-row">
          <input type="checkbox" /> <ItemCardHorizontal  name="Blue T-shirt" category="Clothing"
                    imageUrl="data:image/jpeg;base64,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" /> </div>
          </div>
          <div className="item-row">
          <input type="checkbox" /> <ItemCardHorizontal name="Vintage Camera" category="Electronics"
          imageUrl="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSUCG1-dHpneIZMS0_pmAvMz-vzefq2wJrb6A&s" />
          </div>  
    </div>
    </div>
  );
}

