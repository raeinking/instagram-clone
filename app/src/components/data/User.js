// import React from 'react'
// import axios from 'axios'

// class User extends React.Component {
//   constructor(props){
//     super(props);
//         this.state = { users: []}
//   }

//     componentDidMount(){
//         //get request
//         axios.get('http://localhost/conndb.php').then(res => 
//         {
//         this.setState({users: res.data});
//         console.log(res)
//            }); 
//         }




//     render() {
//         return(

//             <div>
//                {this.state.users.map(result => {
//                    return(
//                        <div>
//                            <p>{result.user_Id}</p>
//                            <p>{result.user_name}</p>
//                            <p>{result.user_Pwd}</p>
//                            <p>{result.user_img}</p>
//                        </div>
//                     )
//                })}

//             </div>




//             )
//     }
// }

// export default User