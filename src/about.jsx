import './App.css'
import './index.css'

function About() {

    const aboutStyles = `
        p {
            text-align: left;
        }
        h1 {
            padding: 30px;
        }
        `
    

  return (

    <div>
        <style>{aboutStyles}</style>
        <h1>Berkeley Eats and Reviews (BEAR) </h1>
        <p>Hello! We are Berkeley Eats and Reviews, affectionately known as BEAR. We are your culinary compass through the vibrant and diverse dining scene of Berkeley, California. With a passion for all things food, our website is dedicated to uncovering the city's hidden culinary gems, sharing honest and mouthwatering reviews, and guiding you to the finest eateries, from cozy neighborhood bistros to globally-inspired culinary destinations. Whether you're a local foodie or a visitor seeking gastronomic adventures, BEAR is your trusted source for navigating Berkeley's delectable dining landscape. Join us on a flavorful journey where every bite tells a story, and let BEAR be your go-to destination for savoring the very best of Berkeley's culinary offerings.</p>
        <img className="img" src="https://ca-times.brightspotcdn.com/dims4/default/4c25c90/2147483647/strip/true/crop/3000x1944+0+0/resize/1200x778!/quality/75/?url=https%3A%2F%2Fcalifornia-times-brightspot.s3.amazonaws.com%2Ff2%2F10%2Fc8c60a3c4c9daa11f4b1f2c2a0f5%2Fla-photos-freelance-contract-463919-me-adulting-class-uc-berkeley16-je.jpg"/>
    </div>

  );
}

export default About;