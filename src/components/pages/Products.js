import React, { useEffect, useState } from "react";
import { getAllUsers } from "../../services/UsersService";
import { Link } from "react-router-dom";
import "./Products.scss";

const Products = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    getAllUsers().then((users) => {
      setUsers(users);
    });
  }, []);

  console.log(users);

  return (
    <>
    <h1 className="py-4">
    <b>Find your interests!</b>
    </h1>
    <div className="container-products">
        {users.map((user, i) => {
          return (
            <div key={user._id}>
              <div className="single-card-products" key={user._id}>
                  <div className="card-img-products ">
                    <img src={user.avatar} />
                  </div>
                  <div className="content-products">
                    
                    <p>{user.genre}</p>
                    <Link to={`/users/${user.id}`} className="btn btn-primary">
                      View posts
                    </Link>
                  </div>
                  <div>
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
