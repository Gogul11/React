/* Props is a arguments passed into reacct components and 
it read only the properties that are shared between components.
    <component key=value> */

import PropTypes from 'prop-types'

function Detail(props){

    return(
        <div id="pro">
            <p>Name = {props.name}</p>
            <p>Age = {props.age}</p>
        </div>
    )

}

/* Proptypes is mechanism that ensures thar the passed value is of the correct datatype*/

Detail.PropTypes={
    name: PropTypes.string, //The name is string datatype and age is nnumber numbertype
    age : PropTypes.number
};

/* Defaultprops uses default values for props in case they are
not passed from the parent component*/

Detail.defaultProps = {
    name : "user", //Teh default value for name is user and age is 0
    age : 0
}
export default Detail;