import './App.css'
import CommentSection from './comments';
import restaurantStyle from './restaurant';

function TopDog() {

  return (
    <div>
      <style>{restaurantStyle()}</style>
      <h1>Relishing the Legacy: Top Dog's Iconic Culinary Journey</h1>
      <img src="http://ww2.kqed.org/bayareabites/wp-content/uploads/sites/24/2014/02/topdog3.jpg" width="1000px"/>

      <p className="my-element">
      Top Dog Berkeley is an iconic and beloved institution nestled in the heart of the vibrant city of Berkeley, California. With its humble beginnings dating back to 1966, this renowned hot dog joint has become a cherished part of the local culture. Known for its mouthwatering array of hot dog offerings, including the classic, jumbo-sized franks, and an assortment of toppings and condiments, Top Dog offers a delectable experience that caters to diverse tastes. It's not just the delicious food that draws patrons; it's also the laid-back, welcoming atmosphere and the sense of community that prevails within its walls. Whether you're a student, a local resident, or a curious visitor, a visit to Top Dog Berkeley promises a memorable culinary adventure with a dash of Berkeley's unique character.
      </p>

      <h2>Menu</h2>
    <div className="menu">
    <div className="menu-item">
        <div className="menu-description">
          <h4>Kielbasa</h4>
          <h6>2/3 pork, 1/3 beef - hearty</h6>
          <p>Indulging in a comforting serving of kielbasa after a challenging CS61B midterm at Berkeley can be a bittersweet solace for students who didn't perform as expected. While the test might not have gone as planned, this Polish sausage provides a momentary respite, offering a flavorful escape from the disappointment. The smoky and robust taste of kielbasa can serve as a small consolation, allowing a temporary distraction from the academic stress. It's an opportunity to regroup, reflect, and perhaps even seek support from peers, all while savoring a delicious meal. </p>
        </div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/adKkD5SQh2zJFLYiH30IPw/348s.jpg"></img>
      </div>

      <div className="menu-item">
        <div className="menu-description">
          <h4>Top Dog Frankfurter</h4>
          <h6>All beef - kosher style</h6>
          <p>
Enjoying a frankfurter after a lively frat party at UC Berkeley is a cherished tradition for many college students. As the night's festivities wind down and the energy of the party subsides, a frankfurter, with its simple, familiar flavors, provides the ideal late-night indulgence. This unpretentious sausage offers comfort and sustenance, helping to ease the effects of a night filled with fun and revelry</p>
        </div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/9uRD1LoQUaB9XYzqWXDJMw/o.jpg"></img>
      </div>
      
      <div className="menu-item">
        <div className="menu-description">
          <h4>Hot Link</h4>
          <h6>Beef and four kinds of pepper — h-h-hottt</h6>
          <p>The star of the menu is undoubtedly the hot link, a zesty and flavorful sausage that has stood the test of time with its timeless recipe. Nestled within a freshly baked bun, it offers a tantalizing blend of smokiness, savoriness, and just the right amount of heat, making it a beloved Berkeley classic. </p>
        </div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/ap9mYxMS5zrQ2yzwYD0KSg/o.jpg"></img>
      </div>
      <div className="menu-item">
        <div className="menu-description">
          <h4>Bockwurst</h4>
          <h6>1/2 pork, 1/2 veal, milk, eggs</h6>
          <p>Indulging in a steaming bockwurst at 2 a.m. during Dead Week at UC Berkeley is a time-honored tradition that encapsulates the intense yet communal atmosphere of college life. As the campus quiets down and students hunker down for late-night study sessions and paper-writing marathons, a comforting meal becomes a welcome reprieve. The delicate blend of flavors in a bockwurst, often served in a warm bun, provides a satisfying interlude during those late hours of academic stress. </p>
        </div>
        <img src="https://s3-media0.fl.yelpcdn.com/bphoto/8SSBs1Htk4ZcDL0ZCYy83w/o.jpg"></img>
      </div>
     
      <CommentSection pageId="topdog"/> 
    </div>
    </div>
  );
}

export default TopDog
