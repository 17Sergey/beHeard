import styles from './FormsControls.module.css';


// export const FormControls = ({input, meta, ...props}) => {
    
//     const hasError = meta.error && meta.touched;

//     return (
//         <div className={styles.formControl + " " + (hasError && styles.error) }>
//             {/* <textarea {...input} {...props}/> */}
//             { hasError && <span className={styles.error}>{meta.error}</span>}
//         </div>
//     );
// }

export const TextArea = ({input, meta, ...props}) => {
    
    const hasError = meta.error && meta.touched;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error) }>
            <textarea {...input} {...props}/>
            { hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    );
}

export const Input = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error) }>
            <input {...input} {...props}/>
            { hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    );
}

export const Checkbox = ({input, meta, ...props}) => {

    const hasError = meta.error && meta.touched;

    return (
        <div className={styles.formControl + " " + (hasError && styles.error) }>
            <input {...input} {...props} type="checkbox"/> {props.label}
            { hasError && <span className={styles.error}>{meta.error}</span>}
        </div>
    );
}