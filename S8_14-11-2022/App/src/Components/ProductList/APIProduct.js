import { useState, useEffect } from "react";
import "./APIProduct.css";

function APIProduct(props) {
  const [state, setState] = useState([]); //  updating or replacing with new array

  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    //API : https://randomuser.me/api/?results=1

    fetch("https://randomuser.me/api/?results=1")
      .then((res) => {
        return res.json();
      })
      .then((data) => {
        console.log(data);

        setState(data.results); // we are replacing the old array(empty) with new Array(data)
      });
  };

  return (
    <div className="api">
      <h2>Product Details</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Numquam, maxime
        animi, vel rerum cupiditate eligendi recusandae temporibus rem assumenda
        perspiciatis ea cumque quos commodi a tenetur eius ex est! Perspiciatis
        deserunt quibusdam minus consequatur sunt officiis dicta incidunt
        aliquam rem laudantium, quis expedita sit consequuntur accusantium optio
        odit? Cupiditate, eaque, ipsa excepturi est tenetur pariatur architecto
        tempore rem vel, harum maxime adipisci ab. Ducimus, dolorum est
        temporibus aspernatur similique totam voluptate aut eius facere enim
        aliquam eveniet ullam, numquam quae ad tempore fuga cumque perspiciatis
        nesciunt hic et quis illo, repellat quo? Dicta explicabo aperiam saepe
        repellat doloribus, obcaecati, at illum quod minus rerum pariatur alias
        facere nostrum, nihil perferendis voluptas. Facere cum quis eum quo,
        alias illum eos? Tempore asperiores beatae temporibus, deleniti ipsum
        totam doloremque magnam, nam autem laudantium cupiditate vel placeat?
        Vel exercitationem omnis officia cum provident nobis qui, deserunt quae
        consectetur perspiciatis quibusdam consequuntur molestias nam culpa
        doloribus adipisci esse, suscipit, laborum sequi est! Ea illum id ipsam
        dolore quae ratione, laudantium, debitis adipisci suscipit impedit
        dignissimos repellat quis voluptatibus quia quos odit voluptatem
        explicabo tenetur numquam nemo inventore aperiam molestiae odio?
        Voluptas, culpa soluta modi magni sit provident velit natus
        reprehenderit, ipsam, ea placeat ducimus!
      </p>

      <button onClick={getData}>Get Data</button>

      <div>
        {state.length > 0 ? (
          <div className="card">
            <img src={state[0].picture.medium} width="100%" height="200" />
            <h3>{state[0].name.first}</h3>
            <p>{state[0].gender}</p>
            <p>{state[0].email}</p>
          </div>
        ) : (
          <div style={{ textAlign: "center", color: "red" }}>
            <h2>Data is Not Avaliable</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default APIProduct;
