React props : 
    Props refers properties.Props is a argument passed into react cpmponents.It read only properties that are shared between components.

        <component key=value />

  Use curlybraces for integer and doublequotes for string values.
  
  PropTypes is a mechanism that ensures thar the passed value is of the correct datatype

      <componentName>.PropTypes = {
              key : PropTypes.<datatype>
          }
  This method checks the datatype of the key and if there is a datatype mismatch it will indicate an error in console window and makesure to import "PropTypes" from "prop-types".

  Defaultprops assigns default values for props in case they are not passed to parent component

      <componentName>.defaultprops{
              key : "value"
          }

  
