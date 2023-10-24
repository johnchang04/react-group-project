import './App.css'

function TopDog() {

  const topdog = `
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
      <style>{topdog}</style>
      <h1>Relishing the Legacy: Top Dog's Iconic Culinary Journey</h1>
      <img src="https://s.hdnux.com/photos/24/52/27/5416426/4/rawImage.jpg"/>

      <p className="my-element">
      Top Dog Berkeley is an iconic and beloved institution nestled in the heart of the vibrant city of Berkeley, California. With its humble beginnings dating back to 1966, this renowned hot dog joint has become a cherished part of the local culture. Known for its mouthwatering array of hot dog offerings, including the classic, jumbo-sized franks, and an assortment of toppings and condiments, Top Dog offers a delectable experience that caters to diverse tastes. It's not just the delicious food that draws patrons; it's also the laid-back, welcoming atmosphere and the sense of community that prevails within its walls. Whether you're a student, a local resident, or a curious visitor, a visit to Top Dog Berkeley promises a memorable culinary adventure with a dash of Berkeley's unique character.
      </p>
    </div>
  );
}

export default TopDog
