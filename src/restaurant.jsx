import './App.css'

function restaurantStyle() {

    return ( `
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
    )
    }  

export default restaurantStyle; 