import './App.css'
import CommentSection from './comments';
import restaurantStyle from './restaurant';

function sizzlingLunch() {
  return (
    <>
    <div>
      <style> {restaurantStyle()} </style>
      <h1> Sizzling Lunch </h1>
       <img src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.visitberkeley.com%2Fdirectory%2Fsizzling-lunch%2F&psig=AOvVaw00Sd4XPWLFiOn1uTRsqy2g&ust=1698305312898000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCICOk7nWkIIDFQAAAAAdAAAAABAE'
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
