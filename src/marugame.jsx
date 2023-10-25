import './App.css'

function Marugame() {

  const marugameStyle = `
    h1 {
      padding: 30px;
    }
    
    p {
      text-align: left;
    }

    img {
      padding: 30px;
    }

    .menu {
      display: flex;
      flex-direction: column;
      padding: 30px;
    }

    .menu-item {
      display: flex;
      flex-direction: row;
      justify-content: center;
      
    }

    .menu-item > img {
      width: 300px;
    }

    .menu-description {
      display: flex;
      flex-direction: column;
      justify-content: center;
    }
  `

  return (
    <div>
    <style>{marugameStyle}</style>
    <h1>Marugame</h1>
    <p>Marugame Udon is a culinary delight that transcends the boundaries of a simple noodle dish. This Japanese fast-casual restaurant chain has carved a special place in the hearts of food enthusiasts with its commitment to delivering authentic, handmade udon noodles prepared right before your eyes. Each visit to Marugame Udon is a sensory experience, from the tantalizing aroma of freshly cooked noodles to the mesmerizing sight of udon craftsmen expertly kneading and cutting the dough. The menu is a testament to versatility, offering a variety of udon soups, tempura dishes, and customizable options to cater to every palate. It's a place where the simplicity of udon meets the complexity of flavor, and where tradition and innovation unite to create a memorable dining adventure. Marugame Udon truly embodies the essence of Japanese cuisine, making it a must-visit for those seeking an authentic and delightful culinary journey.</p>
    <img src="https://s3.amazonaws.com/secretsaucefiles/photos/images/000/228/117/large/Marugame_Food_Overhead.jpg?1571626851"></img>

    <h2>Menu</h2>
    <div className="menu">
      <div className="menu-item">
        <div className="menu-description">
          <h4>Tan Tan</h4>
          <p> Here is Marugame's Description: "Sanuki-Style Udon served in our spicy Japanese-style sesame chili broth with ground spicy soy meat and bok choy." The broth, the heart and soul of any Tan Tan Men, was a masterpiece in flavor balancing. It held a delightful combination of creamy sesame, rich miso, pungent soy sauce, and a hint of chili oil, creating a robust and spicy concoction that warmed the palate. The broth was velvety and comforting, yet it had a fiery kick that kept us coming back for more. What truly set this dish apart was the way it encapsulated a harmonious union of textures and flavors. The umami-rich broth, the hearty noodles, the tender pork, and the crisp greens all came together in each spoonful, creating a symphony of taste and texture.</p>
        </div>
        <img src="https://marugameudon.b-cdn.net/wp-content/uploads/2022/10/Tan_Tan_Udon-280x280-1.png"></img>
      </div>
      <div className="menu-item">
        <div className="menu-description">
          <h4>Nikutama</h4>
          <p> Here is Marugame's Description: "Our Sanuki-style Udon served in our Umami-rich (flavor-packed) sauce. Can be enjoyed hot or cold. Nikutama's star attraction is the tender and thinly sliced meat, often pork or beef, gently seared to perfection. The meat brought a savory richness that paired beautifully with the umami depth of the broth. The poached egg, with its creamy yolk, was an exquisite addition, adding a luscious and velvety quality to the dish. As the runny yolk mingled with the noodles and meat, it created a luxurious sauce that enveloped each bite.</p>
        </div>
        <img src="https://marugameudon.b-cdn.net/wp-content/uploads/2020/08/Nikutama_Udon-1-280x280.png"></img>
      </div>
      <div className="menu-item">
        <div className="menu-description">
          <h4>Tonkotsu</h4>
          <p> Here is Marugame's Description: "Our Sanuki-Style Udon served in our creamy and savory pork broth. Marugame Udon's Tonkotsu ramen is a culinary treasure, defined by its velvety, slow-cooked pork bone broth. This creamy elixir envelops springy ramen noodles, creating a harmonious balance of flavors and textures. Topped with tender chashu pork, green onions, and a soft-boiled egg, each bite is a symphony of savory delight. Whether you're a ramen enthusiast or seeking a soul-warming meal, Marugame Udon's Tonkotsu ramen is a masterpiece in a bowl.</p>
        </div>
        <img src="https://marugameudon.b-cdn.net/wp-content/uploads/2020/08/Tonkotsu_Udon-1-280x280.png"></img>
      </div>
    </div>
    </div>
    
  );
}

export default Marugame;