import { WidthSelectorProps } from "../../Interfaces/props";
import styles from "./width.module.scss"

function WidthSelect ({ value, onChange, label }: WidthSelectorProps) {
    return (

        <label className={styles.widthContainer}>
                {label}{" "}
                <select value={value} onChange={(e) => onChange(e.target.value)}>
                    <option value="100px">100px</option>
                    <option value="200px">200px</option>
                    <option value="300px">300px</option>
                    <option value="400px">400px</option>
                    <option value="500px">500px</option>
                    <option value="600px">600px</option>
                    <option value="700px">700px</option>
                    <option value="800px">800px</option>
                </select>
        </label>
    )
}

export default WidthSelect;