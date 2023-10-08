// import { useState, useEffect } from 'react';
// import axios from 'axios';
// import { useSelector } from 'react-redux';
// import './FavoriteView.css'



// function FavoriteView() {


//   const user = useSelector((store) => store.user);

//   const [favoriteList, setFavoriteList] = useState([]);


//   useEffect(() => {
//     fetchFavoriteList();
//   }, []);

//   const fetchFavorite = () => {
//     axios.get('/api/favorite').then((response) => {
//       setFavoriteList(response.data);
//     }).catch((error) => {
//       console.log(error);
//       alert('Something went wrong.');
//     });
//   }


//     const removeFavorite = (id) => {
//         dispatch({ type: 'REMOVE_PLANT', payload: id });

//     }

//     return (

//         <>

//             <h3 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}> Favorite View </h3>

//  <p>All of the available items can be seen here.</p>
// {
//   shelfList.length === 0 && (
//     <div>No items on the shelf</div>
//   )
// }
// {
//   shelfList.map(item => {
//     return <div className="responsive" key={item.id}>
//               <div className="gallery">
//                   <img src={item.image_url} alt={item.description} />
//                   <br />
//                   <div className="desc">{item.description}</div>
//                   <div style={{textAlign: 'center', padding: '5px'}}>
//                     <button style={{cursor: 'pointer'}}>Delete</button>
//                   </div>
//               </div>
//            </div>
//   })
// }
        


//         </>

//     );
// }

// export default FavoriteView;