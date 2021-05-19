import { useState } from 'react'


const schoolItem = {
    bag: 1,
    books: 17,
    pens: 24
}

const workItem = {
    laptop: 1,
    toolbox: 1,
    work_id: 1
}

const List = () => {
    const [item, setItems ] = useState({})

    return (
        <div>
            <h2>Current Item: </h2>
            <button onClick={ () => setItems(schoolItem)}>
                School Items
            </button>
            <button onClick={ () => setItems(workItem)}>
                Work Items
            </button>

            <ul>
                { Object.keys(item).map((name) => {
                    return (
                        <li key={name}>
                            {name}: {item[name]}
                        </li>
                    )
                }) }
            </ul>
        </div>
    )
}

export default List