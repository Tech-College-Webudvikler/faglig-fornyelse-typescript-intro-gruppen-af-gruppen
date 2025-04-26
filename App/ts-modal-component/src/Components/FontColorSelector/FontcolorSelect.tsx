import { FontColorSelectorProps } from "../../Interfaces/props";
import styles from "./font.module.scss"

function FontColorSelect ({ value, onChange, label }: FontColorSelectorProps) {
    return (
        <label className={styles.fontContainer}>
            {label}{" "}
            <select value={value} onChange={(e) => onChange(e.target.value)}>
                <option value="black">Sort</option>
                <option value="white">Hvid</option>
                <option value="#f6cc23">Gul</option>
                <option value="#0993ef">Blå</option>
                <option value="#f53aa4">Rosa</option>
                <option value="#23f554">Grøn</option>
            </select>
        </label>
    )
}
export default FontColorSelect;