import './App.css'
import CommentSection from './comments';
import RestaurantStyle from './restaurant.jsx';

function SizzlingLunch() {
  return (
    <>
    <div>
      <style> {restaurantStyle()} </style>
      <h1> Sizzling Lunch </h1>
       <img className="sizzling-img" src='https://tb-static.uber.com/prod/image-proc/processed_images/fa09af95581cbb0b1e61cd673079d96d/3ac2b39ad528f8c8c5dc77c59abb683d.jpeg'/>
      <p className = 'my-element'> Sizzling Lunch on Telegraph Ave is a great place to watch your food cook in front of you.
        They're a great choice to take your parents when they come for the weekend or just for a dinner with friends. 
        If you want to avoid awkward social interactions with wait staff, this is the place for you. 
ChatGPT
Sizzling Lunch in Berkeley is a local treasure that consistently delivers delicious and satisfying sizzling dishes. Nestled in the heart of this vibrant city, the restaurant offers an array of tempting options that sizzle and pop with flavor. From sizzling teriyaki to mouthwatering fajitas, their skillful preparation and welcoming ambiance make it a go-to spot for both locals and visitors. With each sizzle and every bite, Sizzling Lunch in Berkeley embodies the essence of a satisfying and savory dining experience that's quintessentially Berkeley.
            </p>

            <h2>Menu</h2>
    <div className="menu">
      <div className="menu-item">
        <div className="menu-description">
          <h4>Beef Pepper Rice</h4>
          <p> Sizzling Lunch's Beef Pepper Rice is an absolute standout. The dish marries perfectly seared beef with a symphony of aromatic peppers, creating a delightful flavor fusion that's both savory and subtly spicy. As the sizzling platter arrives at your table, the sound and scent alone are enough to tantalize the senses. The tender slices of beef, combined with the fragrance of the peppers, offer a mouthwatering experience that's hard to forget. Served on a bed of fragrant rice, every bite is a harmony of textures and taste. It's the kind of dish that leaves you craving more, making it a must-try for anyone looking to savor the sizzle and spice of a truly memorable meal at Sizzling Lunch.</p>
        </div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/EzYa_EoVKPLOHQ4l0ACoig/o.jpg"></img>
      </div>
      <div className="menu-item">
        <div className="menu-description">
          <h4>Kurabuta Pork Belly Pepper Rice</h4>
          <p> Sizzling Lunch's Kurabuta Pork Belly Pepper Rice is an absolute delight. This dish takes sizzle to the next level with its succulent and perfectly seared Kurabuta pork belly. Each bite of this premium pork delivers a burst of rich, savory flavor that's further enhanced by the aromatic peppers. As the sizzling platter lands on your table, it's impossible not to be captivated by the sensory experience. The sizzle, the scent, and the visual appeal all come together to create a truly memorable dining moment. Served atop a bed of fragrant rice, this dish offers a harmonious blend of textures and tastes that's both indulgent and satisfying. If you're looking to elevate your culinary experience, the Kurabuta Pork Belly Pepper Rice at Sizzling Lunch is an exceptional choice that's sure to leave a lasting impression.</p>
        </div>
        <img src="https://img.cdn4dd.com/cdn-cgi/image/fit=cover,width=600,height=400,format=auto,quality=80/https://doordash-static.s3.amazonaws.com/media/store/header/adbacba4-1435-4bbe-b124-f1fb3b2454f8.jpg"></img>
      </div>
      <div className="menu-item">
        <div className="menu-description">
          <h4>Garlic Beef Pepper Rice</h4>
          <p>Sizzling Lunch's Garlic Beef Pepper Rice is a flavor-packed delight. The dish combines tender slices of beef with the robust aroma and taste of garlic and peppers. As the sizzling platter arrives, the sizzle and scent create a mouthwatering anticipation. The beef is cooked to perfection, with just the right amount of sear and tenderness, while the garlic and peppers add layers of savory complexity. Served on a generous bed of fragrant rice, every forkful is a delightful blend of textures and tastes. It's a dish that embodies the essence of sizzle and satisfaction, making it a top choice for those seeking a flavorful and fulfilling dining experience at Sizzling Lunch.</p>
        </div>
        <img src="https://www.hwcmagazine.com/wp-content/uploads/2017/02/Pepper-Lunch-Beef-Rice-Sizzle_IMG_7792.jpg"></img>
      </div>
    </div>
    </div>
    <CommentSection/>
    </>
  )
}
export default SizzlingLunch;
