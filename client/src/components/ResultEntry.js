import React from 'react'

const getPokemonTypes = (typeArray) => {
    return typeArray.length === 1 ? typeArray[0] : `${typeArray[0]} ${typeArray[1]}`
}

export const ResultEntry = ({props}) => {
    const { name, types, stats} = props;
    return (
        <tr key={name}>
            <td>{name}</td>
            <td>{getPokemonTypes(types)}</td>
            <td>{stats.hp}</td>
            <td>{stats.attack}</td>
            <td>{stats.defence}</td>
            <td>{stats.specialAttack}</td>
            <td>{stats.specialDefence}</td>
            <td>{stats.speed}</td>
            <td>Total</td>
        </tr>
    )
}
