import React from 'react';
import Button from '@material-ui/core/Button';

// export default class SquareButton extends Component{
//     render(){
//         const{variant,color,className,buttonText,onClick}= this.props;
//         return(
//             <Button variant={variant} color={color} className={className} onClick={onClick}>
//                 {buttonText}{this.props.children}
//             </Button>
//         )
//     }
// }



const SquareButton = props => {
    const { variant,color,className,buttonText,onClick } = props;
  
    return (
        <Button variant={variant} color={color} className={className} onClick={onClick}>
        {buttonText}{props.children}
    </Button>
    );
  };
  
  export default SquareButton;