import React, { useState } from "react";
import "../index.css";

function RenderFoods(props) {
  const data = [
    {
      img: "https://i.imgur.com/eTmWoAN.png",
      name: "Pizza",
      calories: "266",
      qty: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1617235278398-c8497b232429?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1152&q=80",
      name: "Apple",
      calories: "52",
      qty: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1587735243615-c03f25aaff15?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Orange",
      calories: "47",
      qty: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1602948750761-97ea79ee42ec?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Almonds",
      calories: "7",
      qty: 0,
    },
    {
      img: "https://images.unsplash.com/photo-1586190848861-99aa4a171e90?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1180&q=80",
      name: "Burger",
      calories: "295",
      qty: 0,
    },
  ];
  const [d, setData] = useState(data);
  const listItems = d.map((element, i) => {
    if (props.query.toLowerCase() == element.name.toLowerCase())
      return (
        <div className="container">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={element.img} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{element.name}</strong> <br />
                  <small>{element.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={element.qty} />
                </div>
                <div className="control">
                  <button
                    onClick={increase}
                    name={element.name}
                    id={i}
                    className="button is-info"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
          <div className="media-outter">
            <h4>
              {element.qty} {element.name} = {element.qty * element.calories}{" "}
              Calories
            </h4>
            <button id={i} onClick={reset} className="reset">
              RESET
            </button>
          </div>
        </div>
      );
    else if (props.query == "")
      return (
        <div className="container">
          <article className="media">
            <div className="media-left">
              <figure className="image is-64x64">
                <img src={element.img} />
              </figure>
            </div>
            <div className="media-content">
              <div className="content">
                <p>
                  <strong>{element.name}</strong> <br />
                  <small>{element.calories} cal</small>
                </p>
              </div>
            </div>
            <div className="media-right">
              <div className="field has-addons">
                <div className="control">
                  <input className="input" type="number" value={element.qty} />
                </div>
                <div className="control">
                  <button
                    onClick={increase}
                    name={element.name}
                    id={i}
                    className="button is-info"
                  >
                    +
                  </button>
                </div>
              </div>
            </div>
          </article>
          <div className="media-outter">
            <h4>
              {element.qty} {element.name} = {element.qty * element.calories}{" "}
              Calories
            </h4>
            <button id={i} onClick={reset} className="reset">
              RESET
            </button>
          </div>
        </div>
      );
  });

  function reset(e) {
    let i = e.target.id;
    d[i].qty = 0;
    setData([...d]);
  }
  function increase(e) {
    let i = e.target.id;
    d[i].qty++;
    setData([...d]);
  }

  return <div className="content">{listItems}</div>;
}

export default function FoodBox() {
  const [q, setQ] = useState("");
  function handleChange(e) {
    setQ(e.target.value);
  }
  return (
    <div className="box">
      <div>
        <h2>Search</h2>
        <datalist id="list">
          <option value="Pizza">Pizza</option>
          <option value="Apple">Apple</option>
          <option value="Orange">Orange</option>
          <option value="Almonds">Almonds</option>
          <option value="Burger">Burger</option>
        </datalist>
        <input type="search" name="" list="list" onChange={handleChange} />
        <button className="search">Search</button>
        <hr />
      </div>
      <RenderFoods query={q}></RenderFoods>
    </div>
  );
}