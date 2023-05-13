import {FC} from "react";
import styles from './FormControls.module.css'


export const Textarea: FC<any> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <textarea {...input} {...props}></textarea>
            </div>
            {
                hasError && <span>{meta.error}</span>
            }

        </div>
    )
}

export const Input: FC<any> = ({input, meta, ...props}) => {

    const hasError = meta.touched && meta.error
    return (
        <div className={styles.formControl + ' ' + (hasError ? styles.error : '')}>
            <div>
                <input {...input} {...props}/>
            </div>
            {
                hasError && <span>{meta.error}</span>
            }

        </div>
    )
}