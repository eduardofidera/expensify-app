import React from 'react';

const EditExpensePage = (props) => {
    console.log(props);
    return (
        <div>
            Edit page of id {props.match.params.id}
        </div>
    )
}

export default EditExpensePage;