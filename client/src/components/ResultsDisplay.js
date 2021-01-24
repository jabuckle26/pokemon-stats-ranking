import React, { useContext } from 'react';
import { GlobalContext } from '../context/GlobalState';
import { ResultEntry } from './ResultEntry';

const tableHeadings = ['Pokemon', 'Type', 'HP', 'Attack', 'Defence', 'Sp. Attack', 'Sp. Defence', 'Speed', 'Total'];

export const ResultsDisplay = () => {
    const { isLoading, results } = useContext(GlobalContext);

    React.useEffect(() => {
        console.log('In RESULTS DISPLAY use effect');
        console.log(results);
    }, [results]);

    return (
        <div className='resultsDisplay'>
            {!isLoading ? 
                <table>
                    <thead>
                        <tr>
                            {tableHeadings.map((heading) => <th key={heading}>{heading}</th>)}
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((result) => {
                            return (<ResultEntry props={result}/>)
                        })}
                    </tbody>
                </table> :
                'LOADING.....'
                }
        </div>
    )
}
