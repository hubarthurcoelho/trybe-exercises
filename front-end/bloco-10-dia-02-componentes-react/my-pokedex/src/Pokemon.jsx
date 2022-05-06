import React from "react";

class Pokemon extends React.Component {
  render() {
    const { name, type, image, averageWeight } = this.props.pokemons;
    const { value, measurementUnit } = averageWeight;
          return (
        <article>
          <div>
          <p>{name}</p>
          <p>{type}</p>
          <p>
            Average Weigth {value} {measurementUnit}
          </p>
          </div>
          <img src={image} alt={name}></img>
        </article>
      );
  }
};

export default Pokemon;
