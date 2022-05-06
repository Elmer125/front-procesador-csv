import { FaSpinner } from "react-icons/fa";
import styles from "./Spinner.module.css";
export function Spinner() {
  return (
    <tr>
      <td></td>
      <td>
        <div className={styles.spinner}>
          <FaSpinner className={styles.spinning} size={60} />
        </div>
      </td>
      <td></td>
    </tr>
  );
}
