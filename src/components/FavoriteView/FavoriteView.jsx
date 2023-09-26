// import React, { useEffect } from 'react';
// import { useDispatch, useSelector } from 'react-redux';
// import './FavoriteView.css'



// function FavoriteView() {

//     const dispatch = useDispatch();

//     const plantList = useSelector(store => store.plantList);

//     useEffect(() => {
//         console.log('component did mount');
//         dispatch({ type: 'FETCH_FAVORITES' });
//     }, []);

//     const removeFavorite = (id) => {
//         dispatch({ type: 'REMOVE_PLANT', payload: id });

//     }

//     return (

//         <>

//             <h3 style={{ textAlign: 'center', fontWeight: 'bold', fontSize: '25px' }}> Favorite View </h3>
       

//                 <div style={{ display: 'flex', flexDirection: 'row' }}>
//                     {
//                         plantList.map(plant => (
//                             <favoriteItem key={plant.id}>
//                                 <p> {} </p>

//                                 <button onClick={() => removeFavorite(plant.id)}>
//                                     Remove
//                                 </button>

//                             </favoriteItem>
//                         ))
//                     }
//                 </div>
//         </>

//     );
// }

// export default FavoriteView;