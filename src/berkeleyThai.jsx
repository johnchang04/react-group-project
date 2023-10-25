import './App.css'
import CommentSection from './comments';
import restaurantStyle from './restaurant';

function berkeleyThaiHouse() {
  return (
    <>
    <div> 
      <style> {restaurantStyle()} </style>
      <h1> Berkeley Thai House </h1>
      <img src = 'https://media-cdn.tripadvisor.com/media/photo-s/1b/c3/94/8b/berkeley-thai-house.jpg'
            alt = ''
            />
     <p className="my-element"> Berkeley Thai House on Channing Ave is the epitome of middle tier thai food. 
            You can get a 17 dollar meal that comes with mini appitizers, a plate of noodles or rice, and a drink. 
            It is not an everyday type place, but somewhere you can go with friends to have a dinner outing once and a while. 
            Their patio is nice, when its not freezing in Berkeley. 
            </p>
    </div>
       <CommentSection/>
    </>   
  )
}
export default berkeleyThaiHouse;
