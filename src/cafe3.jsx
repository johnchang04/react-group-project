import './App.css'
import restaurantStyle from './restaurant';
import CommentSection from './comments';

function Cafe3() {

  const cafe3 = `
    .my-element {
        margin: 20px;
        text-align: left;
    }
    h1 {
      padding: 30px;
      font-size: 40px; 
    }
  `

  return (
    <div>
      <style>{restaurantStyle()}</style>
      <h1>Campus Eats: Cafe 3's Flavorful Adventures</h1>
      <img src="https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/uploads/2016/11/cafe-3-promo_0.png?itok=dIJJs-JZ" width="1100px"/>
      <p className="my-element">
      Cafe 3 in Berkeley is a cherished dining establishment located within the University of California campus. It's a bustling and lively spot that holds a special place in the hearts of students and locals alike. The cafe's diverse menu is a testament to its commitment to culinary excellence, offering a wide array of options that cater to various tastes and dietary preferences. The atmosphere at Cafe 3 is warm and inviting, with communal seating arrangements that encourage social interaction and camaraderie. From international dishes to comforting classics, the menu provides something for everyone, whether you're in search of a quick and satisfying meal, a place to connect with friends, or a cozy corner for relaxation and study. Cafe 3 in Berkeley encapsulates the vibrant and inclusive spirit of this renowned university town, making it a favorite dining destination for many.
      </p>

      <h2>Menu</h2>
      <div className="menu">
      <div className="menu-item">
        <div className="menu-description">
          <h4>Chicken Tikka Masala</h4>
          <p>For a UC Berkeley EECS major, dining on Cafe 3's chicken tikka masala is a savory pause in the whirlwind of electrical engineering and computer science. This beloved Indian dish, served on campus, provides not just a satisfying meal but a moment of solace amid the complexities of circuits and coding. The tender, marinated chicken, bathed in the aromatic tomato sauce, offers a welcome break and a chance to relish diverse flavors. Shared with peers at Cafe 3, it becomes a space to connect with fellow EECS enthusiasts, discuss projects, and unwind. </p>
        </div>
        <img src="https://hips.hearstapps.com/hmg-prod/images/chicken-tikka-masala1-1663341991.jpg?crop=0.9057777777777778xw:1xh;center,top&resize=1200:*"></img>
      </div>

      <div className="menu-item">
        <div className="menu-description">
          <h4>Rockfish</h4>
          <p> The sight of Oski, UC Berkeley's beloved mascot, indulging in a plate of rockfish at Cafe 3 is a heartwarming and memorable experience for all. Oski, often the center of attention at any campus gathering, takes a break from the usual fanfare to enjoy a meal that embodies the diverse and vibrant culture of Berkeley. The tender and flaky rockfish, accompanied by a medley of sides and sauces, offers a refreshing contrast to the mascot's spirited appearances at sporting events and campus festivities. Oski's enjoyment of this meal mirrors the inclusive and welcoming atmosphere that Berkeley is known for, demonstrating that even amidst the spirited cheers and celebrations, there is always time for a satisfying, communal dining experience that unites the entire campus community.</p>
        </div>
        <img src="https://bigoven-res.cloudinary.com/image/upload/t_recipe-1280/grilled-rockfish-with-garlic-and-ba-2.jpg"></img>
      </div>

      <div className="menu-item">
        <div className="menu-description">
          <h4>Chocolate Milk</h4>
          <p> For Justin Yokota, UC Berkeley's bustling Cafe 3 chocolate milk is more than just a beverage; it's a comforting companion on his academic journey. This classic drink, with its rich, velvety texture and sweet, chocolaty flavor, serves as a source of respite and energy for this ambitious student. Whether sipped while tackling challenging programming assignments or grabbed as a quick pick-me-up during busy days, Cafe 3's chocolate milk is a reliable source of delight amidst the rigors of UC Berkeley's demanding curriculum. It's a taste of familiarity and nostalgia, a welcome treat that complements Justin's dedication to his studies and highlights the importance of those small moments of enjoyment in the life of a dedicated UC Berkeley student.</p>
        </div>
        <img src="https://hips.hearstapps.com/hmg-prod/images/delish-2021-chocolatemilk-036-1615340969.jpg?crop=0.8891228070175439xw:1xh;center,top&resize=1200:*"></img>
      </div>

      <div className="menu-item">
        <div className="menu-description">
          <h4>Halal Beef Tandoori</h4>
          <p> Savoring halal beef tandoori at Cafe 3 is a delightful and flavorful experience that captures the essence of UC Berkeley's diverse and inclusive campus culture. The tender and well-seasoned beef, cooked to perfection in a tandoor, delivers a blend of mouthwatering spices and smoky flavors that tantalize the taste buds. Whether enjoyed as a quick lunch or a leisurely dinner, this dish reflects the variety and richness of the culinary offerings at Berkeley. Shared among students from different backgrounds, it represents the campus's inclusive atmosphere, where diverse traditions and cuisines come together. Cafe 3's halal beef tandoori is more than a meal; it's a celebration of Berkeley's multicultural tapestry, reminding everyone that, amid the rigorous academic pursuits, there's always time for a taste of unity and appreciation for the world's flavors.</p>
        </div>
        <img src="https://i.pinimg.com/originals/24/7f/82/247f824c4687fcbafae6ca3a8d719ca1.png"></img>
      </div>

      <CommentSection pageId="cafe3"/>

      </div>
      

      
    </div>

    
  );
}

export default Cafe3; 
