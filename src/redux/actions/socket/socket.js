// import { addCards, logIn, addActiveRooms, setSocket } from '../';

// export default (socket, dispatch) => {
//   socket.on('roomCreated', (data) => {
//     dispatch(addCards(data.cards))
//     dispatch(logIn(data.username, data.roomname, socket))
//   })
//   socket.on('roomCreationError', (data) => {
//     console.log(data);
//   })
//   socket.on('roomJoined', (data) => {
//     dispatch(addCards(data.cards))
//     dispatch(logIn(data.username, data.roomname, socket))
//   })
//   socket.on('activeRooms', (data) => {
//     // console.log(data)
//     dispatch(addActiveRooms(data))
//   })
//   dispatch(setSocket(socket));
// }
