

function List(props){

        const obj = props.item;

        const list = obj.map(o => <li>{o}</li>)
        return(
            <>
            <h1>{props.type}</h1>
                <ul>
                    {list}
                </ul>
            </>
        )
}

List.defaultProps = {
    item : [],
    type : "Type",
}

export default List;