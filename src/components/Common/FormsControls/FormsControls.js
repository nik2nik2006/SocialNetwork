import React from "react";
import styles from './FormsControls.module.css';

export const FormControl = ({ input, meta, ...props }) => {
    let hasError = meta.touched && meta.error;
    return (
        <div className={hasError && styles.error}>
            <props.child {...props} {...input} {...meta} />
            {hasError && <span>{meta.error}</span>}
        </div>
    );
};

// const FormControl = ({input, meta, child, ...props}) => {
//     const  hasError = meta.touched && meta.error
//     return (
//         <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
//             <div>
//                 {props.children}
//             </div>
//             {hasError && <span>{meta.error}</span>}
//         </div>
//     )
// }

export const Textarea = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}><textarea {...input} {...restProps} /></FormControl> )
}

export const Input = (props) => {
    const {input, meta, child, ...restProps} = props;
    return (<FormControl {...props}> <input {...input} {...restProps} /></FormControl>  )
}



