import './App.css'
import CommentSection from './comments';
import restaurantStyle from './restaurant';

function BerkeleyThaiHouse() {
  return (
    <>
    <div> 
      <style> {restaurantStyle()} </style>
      <h1> Berkeley Thai House </h1>
      <img src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.tripadvisor.com%2FRestaurant_Review-g32066-d547241-Reviews-Berkeley_thai_House-Berkeley_California.html&psig=AOvVaw1v01lMSUDPBuvn5sbzHgwN&ust=1698294109111000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCJiyy9qskIIDFQAAAAAdAAAAABAE'
            alt = ''
            />
     <p className="my-element"> Berkeley Thai House on Channing Ave is the epitome of middle tier thai food. 
            You can get a 17 dollar meal that comes with mini appitizers, a plate of noodles or rice, and a drink. 
            It is not an everyday type place, but somewhere you can go with friends to have a dinner outing once and a while. 
            Their patio is nice, when its not freezing in Berkeley. 
            </p>
    </div>
       <CommentSection id="thaihouse"/>
    </>   
  )
}
export default BerkeleyThaiHouse;
