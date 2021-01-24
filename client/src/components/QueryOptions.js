import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import axios from 'axios';

const allStats = ['HP', 'Attack', 'Defence', 'Sp. Attack', 'Sp. Defence', 'Speed', 'Total'];
const allTypes = ['Normal', 'Grass', 'Fire', 'Water', 'Electric', 'Flying', 'Ground', 'Fighting', 'Bug', 'Pyschic', 'Ghost', 'Fairy', 'Poison', 'Dark', 'Dragon', 'Rock', 'Ice', 'Steel'];

export const QueryOptions = () => {
    const { selectedType, selectedStats, setResults, setSelectedStats, setSelectedType, setIsLoading } = useContext(GlobalContext);

    const handleSearchClick = async () => {
        setIsLoading(true);
        const result = await axios.get(
            `/api/pokemon/statSort?stat=${selectedStats.toLowerCase()}&type=${selectedType}`
        );
        console.log('got response');
        setResults(result.data);
        setIsLoading(false);
    }
    
    return (
        <div className='queryOptions'>
            <div className='container'>
                {allTypes.map((theType) => {
                    return <p className={`typeButton ${theType.toLowerCase()} ${selectedType === theType ? 'selected' : ''}`} onClick={(e) => setSelectedType(selectedType === e.target.textContent ? '' : e.target.textContent)}>{theType}</p>
                })}
            </div>
            <br/>
            <div className='container'>
                {allStats.map((stat) => {
                    return <p className={`statQuery ${selectedStats === stat ? 'selected' : ''}`} onClick={(e) => setSelectedStats(selectedStats === e.target.textContent ? '' : e.target.textContent)}>{stat}</p>
                })}
            </div>
            <p className="runQuery" onClick={handleSearchClick}>SEARCH</p>
        </div>
    )
}
