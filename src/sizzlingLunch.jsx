import './App.css'
import CommentSection from './comments';
import restaurantStyle from './restaurant';

function sizzlingLunch() {
  return (
    <>
    <div>
      <style> {restaurantStyle()} </style>
      <h1> Sizzling Lunch </h1>
       <img src = 'https://www.visitberkeley.com/imager/files_idss_com/C199/ecd694e0-2439-4c8b-b180-e9478ace9153_930104bc5592b0f48aa7a928055610d9.jpg'
            />
      <p className = 'my-element'> Sizzling Lunch on Telegraph Ave is a great place to watch your food cook in front of you.
        They're a great choice to take your parents when they come for the weekend or just for a dinner with friends. 
        If you want to avoid awkward social interactions with wait staff, this is the place for you. 
            </p>
    </div>
    <CommentSection/>
    </>
  )
}
export default sizzlingLunch;
