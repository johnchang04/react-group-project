import './App.css'
import CommentSection from './comments';
import restaurantStyle from './restaurant.jsx';

function BerkeleyThaiHouse() {
  return (
    <>
    <div> 
      <style> {restaurantStyle()} </style>
      <h1> Berkeley Thai House </h1>
      <img className="sizzling-img" src='https://media-cdn.tripadvisor.com/media/photo-s/1b/d9/89/4e/thai-house.jpg'
            alt = ''
            />
     <p className="my-element"> Berkeley Thai House is a charming Thai restaurant in the heart of Berkeley. The menu boasts an array of authentic Thai dishes, like their famous Pad Thai, all expertly prepared with a perfect balance of flavors. The warm ambiance and friendly staff make it a delightful dining destination in Berkeley.Berkeley Thai House on Channing Ave is the epitome of middle tier thai food. 
            You can get a 17 dollar meal that comes with mini appitizers, a plate of noodles or rice, and a drink. 
            It is not an everyday type place, but somewhere you can go with friends to have a dinner outing once and a while. 
            Their patio is nice, when its not freezing in Berkeley. 
            </p>
            <h2>Menu</h2>
    <div className="menu">
      <div className="menu-item">
        <div className="menu-description">
          <h4>Spicy Catfish</h4>
          <p>The Spicy Catfish at Berkeley Thai House is an unforgettable Thai culinary experience. Tender catfish is expertly cooked to perfection, then bathed in a spicy, aromatic sauce that's a harmonious blend of heat and flavor. The dish is a symphony of textures, with the crispy catfish offering a delightful crunch that contrasts with the luscious sauce. It's a true standout on the menu, perfect for those seeking a thrilling flavor adventure. Berkeley Thai House's Spicy Catfish is a must-try that embodies the essence of Thai cuisine.</p>
        </div>
        <img src="https://lemoosecrepecafe.com/wp-content/uploads/2018/08/Spicy-catfish.jpg"></img>
      </div>
      <div className="menu-item">
        <div className="menu-description">
          <h4>Satay Chicken</h4>
          <p>At Berkeley Thai House, the Satay Chicken is a delicious Thai classic that never disappoints. Tender skewers of marinated chicken are grilled to perfection, and served with a delectable peanut sauce that's a harmonious blend of sweet and savory. Each bite is a flavorful delight, and the succulent chicken pairs beautifully with the rich, nutty sauce. It's a fantastic appetizer or main course for those who appreciate the authentic taste of Thai cuisine. Berkeley Thai House's Satay Chicken is a mouthwatering choice that embodies the essence of Thai culinary tradition.</p>
        </div>
        <img src="https://hips.hearstapps.com/hmg-prod/images/190418-chicken-satay-horizontal-300-1556573740.jpg?crop=0.8891228070175439xw:1xh;center,top&resize=1200:*"></img>
      </div>
      <div className="menu-item">
        <div className="menu-description">
          <h4>Yellow Curry</h4>
          <p>Berkeley Thai House's Yellow Curry is a true Thai delight. This creamy and aromatic curry dish offers a gentle heat that's balanced with rich and complex flavors. The vibrant yellow hue is a testament to the bold spices and turmeric that infuse every bite. Served with a choice of protein and fresh vegetables, the dish offers a satisfying and comforting Thai dining experience. It's the perfect blend of sweet, savory, and spicy that showcases the authenticity and excellence of Thai cuisine at Berkeley Thai House.</p>
        </div>
        <img src="https://nutritiousminimalist.com/wp-content/uploads/2019/12/IMG_3390-800w-min.jpg"></img>
      </div>
    </div>
    </div>
       <CommentSection/>
    </>   
  )
}
export default BerkeleyThaiHouse;
