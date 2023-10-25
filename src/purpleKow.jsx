import './App.css'
import CommentSection from './comments';
import restaurantStyle from './restaurant';

function purpleKow() {
  return (
    <div> 
      <style> {restaurantStyle()} </style>
      <h1> Purple Kow </h1>
      <img src = 'https://www.google.com/url?sa=i&url=https%3A%2F%2Fpurplekow.com%2F&psig=AOvVaw0MtKjESp4xrBjgEMc34dqW&ust=1698306116530000&source=images&cd=vfe&opi=89978449&ved=0CBAQjRxqFwoTCLCwlLjZkIIDFQAAAAAdAAAAABAE'
            />
     <p className="my-element"> Purple Kow is a bubble tea shop in Berkeley with locations all around the bay area. 
       They are special because of their cup sizes, with a small that looks like a large and a large that looks like a xxl. 
       Purple Kow has a good black milk tea with boba and delicious fruit slushes. 
       They are a good place to spend 5 dollars and get a giant cup to carry in your hand.  
            </p>
    </div>
       <CommentSection/>
       
  )
}
export default purpleKow;
