import { styled } from "@stitches/react";

const Button = styled('button', {
    paddingInline:"1rem",
    paddingBlock:"0.875rem",

    variants:{
        variant:{
            primary: {
                backgroundColor:"$yellow900",
                color:"white",
            }
        }
    },

    defaultVariants:{
        variant:"primary"
    }
})

export default Button