import { ColorSelectorProps } from "../../Interfaces/props";
import styles from "./bckg.module.scss"

function ColorSelect ({ value, onChange, label }: ColorSelectorProps) {
    return (

        <label className={styles.bckgContainer}>
                {label}{" "}
                <select value={value} onChange={(e) => onChange(e.target.value)}>
                    <option value="white">Hvid</option>
                    <option value="#fef3c7">Gul</option>
                    <option value="#e0f2fe">Blå</option>
                    <option value="#fce7f3">Rosa</option>
                    <option value="#cbffd7">Lys Grøn</option>
                </select>
        </label>

    )
} 

export default ColorSelect;