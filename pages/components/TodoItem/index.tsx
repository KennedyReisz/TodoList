// Asset's
import Image from "next/image";
import styles from "./Style.module.css";
import trashIcon from "../../../assets/images/trashIcon.png";

type props = {
  todoName: String;
  id: number;
  todos: string[];
  setRemovedTodos: Function;
};

const TodoItem = (props: props) => {
  return (
    <div className={styles.todoArea}>
      <h3 className={styles.todoItem}>{props.todoName}</h3>

      <Image
        style={{ cursor: "pointer" }}
        src={trashIcon}
        width={30}
        height={30}
        alt=""
        onClick={() => {
          const tmpList = [...props.todos];
          tmpList.splice(props.id, 1);
          props.setRemovedTodos(tmpList);
        }}
      />
    </div>
  );
};

export default TodoItem;
