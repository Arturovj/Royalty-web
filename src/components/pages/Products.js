import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UsersService";
import { Link } from "react-router-dom";
import "./Products.scss";
import verifiedpng from './Blue_Badge.png'
import ClipLoader from "react-spinners/ClipLoader";


const Products = () => {
  const [users, setUsers] = useState([]);

    const [loading, setLoading] = useState(true);



  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    })
    .finally(() => {
      setLoading(false)
    })
  }, []);

  console.log(users);

  return (
    <>
    
    <h1 className="py-4" >
    <b style={{ color: 'white'}}>ROYAL<i class="fas fa-dice-d6"></i>Y USERS</b>
    </h1>
    { loading ? (
    <div className="cliploader" >
    <ClipLoader  size={200} color={"#fff"}/>
    </div>
   ):(
    <div className="container-products">
        {users.map((user, i) => {
          if(user.verified) {
            console.log('email', user.email)
          }
          return (
            <div key={user._id}>
              
              <div className="single-card-products" key={user._id}>
              {user.verified && <img className="verifiedpng" src={verifiedpng}/>}
              
                  <div className="card-img-products ">
                    <img src={user.avatar} />
                  </div>
                 
                  <div className="content-products">
                    <p>{user.genre}</p>
                    <div className="title-products">{user.name}</div>
                    <Link to={`/users/${user.id}`} className="btn btn-primary">
                      View posts
                    </Link>
                  </div>
                  <div className="container-info">
                    <div className="title-products">{user.name}</div>
                    <div>
                      <p className="card-text">{user.posts.length} Posts</p>
                    </div>
                    <div className="card-footer text-muted">
                      Last update {i + 1} days ago
                    </div>
                </div>
              </div>
            </div>
          );
        })}
      
    </div>
    )}
    </>
  );
};

export default Products;

{
  /* <div class="single-card">
  <div class="card-img ">
    <img src={user.avatar}/>
  </div>
  <div class="content">
    <div class="title">{user.name}</div>
    <p>{user.genre}</p>
  </div>
</div>

<div class="single-card">
  <div class="card-img ">
    <img src="https://images.squarespace-cdn.com/content/v1/57a88fd229687fc5a27e6cc9/1550589610645-9K6W3XT6XFR7DUVF68TN/ke17ZwdGBToddI8pDm48kIgp7GElXMh4-SI34RhNQQ4UqsxRUqqbr1mOJYKfIPR7LoDQ9mXPOjoJoqy81S2I8N_N4V1vUb5AoIIIbLZhVYxCRW4BPu10St3TBAUQYVKcPu1vjgtapbSeVJaFFpVL9g2w53smuO-pTTrV2JyYSPIFox20tTbdaQJickEwn0_f/Kindnessrevisedlow.jpg?format=2500w">
  </div>
  <div class="content">
    <div class="title">KINDNESS</div>
    <p>It costs nothing - means everything</p>
  </div>
</div>

<div class="single-card">
  <div class="card-img ">
    <img src="https://thumbs.dreamstime.com/b/cartoon-dog-cat-show-love-vector-illustration-together-forever-cute-pets-characters-115176064.jpg">
  </div>
  <div class="content">
    <div class="title">LOVE</div>
    <p>You gain when you give love</p>
  </div>
</div>
 */
}
