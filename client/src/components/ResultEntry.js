import React from "react";

const getPokemonTypes = (typeArray) => {
  return typeArray.length === 1 ? (
    <span className={`type ${typeArray[0].toLowerCase()}`}>{typeArray[0]}</span>
  ) : (
    <>
      <span className={`type ${typeArray[0].toLowerCase()}`}>
        {typeArray[0]}{" "}
      </span>
      <span className={`type ${typeArray[1].toLowerCase()}`}>
        {typeArray[1]}
      </span>
    </>
  );
};

export const ResultEntry = ({ rank, result }) => {
  const { natDex, name, types, stats } = result;
  return (
    <tr key={`${rank}-${name}`}>
      <td className="rank">{rank}</td>
      <td className="natDex">{natDex}</td>
      <td className="name">{name}</td>
      <td className="typeHolder">{getPokemonTypes(types)}</td>
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
