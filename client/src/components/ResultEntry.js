import React from "react";

const getPokemonTypes = (typeArray) => {
  return typeArray.length === 1
    ? typeArray[0]
    : `${typeArray[0]} ${typeArray[1]}`;
};

export const ResultEntry = ({ props }) => {
  const { name, types, stats } = props;
  return (
    <tr key={name}>
      <td>{name}</td>
      <td>{getPokemonTypes(types)}</td>
      <td className="stat">{stats.hp}</td>
      <td className="stat">{stats.attack}</td>
      <td className="stat">{stats.defence}</td>
      <td className="stat">{stats.specialAttack}</td>
      <td className="stat">{stats.specialDefence}</td>
      <td className="stat">{stats.speed}</td>
      <td className="stat">{stats.total}</td>
    </tr>
  );
};
