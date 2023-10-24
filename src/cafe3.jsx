import './App.css'

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
      <style>{cafe3}</style>
      <h1>Campus Eats: Cafe 3's Flavorful Adventures</h1>
      <img src="https://www.food-management.com/sites/food-management.com/files/styles/article_featured_retina/public/uploads/2016/11/cafe-3-promo_0.png?itok=dIJJs-JZ" width="1100px"/>
      <p className="my-element">
      Cafe 3 in Berkeley is a cherished dining establishment located within the University of California campus. It's a bustling and lively spot that holds a special place in the hearts of students and locals alike. The cafe's diverse menu is a testament to its commitment to culinary excellence, offering a wide array of options that cater to various tastes and dietary preferences. The atmosphere at Cafe 3 is warm and inviting, with communal seating arrangements that encourage social interaction and camaraderie. From international dishes to comforting classics, the menu provides something for everyone, whether you're in search of a quick and satisfying meal, a place to connect with friends, or a cozy corner for relaxation and study. Cafe 3 in Berkeley encapsulates the vibrant and inclusive spirit of this renowned university town, making it a favorite dining destination for many.
      </p>
    </div>
  );
}

export default Cafe3; 
