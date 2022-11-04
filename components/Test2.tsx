import React, { useState } from 'react'
import styles from '../styles/Home.module.css'



function Test2() {
  // The content of the target box
  const [content, setContent] = useState<string>("Drop Something Here");

  // This function will be triggered when you start dragging
  const dragStartHandler = (
    event: React.DragEvent<HTMLDivElement>,
    data: string
  ) => {
    event.dataTransfer.setData("text", data);
  };

  // This function will be triggered when dropping
  const dropHandler = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
    const data = event.dataTransfer.getData("text");
    setContent(data);
  };

  // This makes the third box become droppable
  const allowDrop = (event: React.DragEvent<HTMLDivElement>) => {
    event.preventDefault();
  };

  return (
    <div className={styles.container}>
      <div
        className={styles.box1}
        onDragStart={(event) => dragStartHandler(event, "Hiyouhi")}
        draggable={true}
      >
        <h2>Hiyouhi</h2>
      </div>

      <div
        className={styles.box2}
        onDragStart={(event) => dragStartHandler(event, "Kindacode.com")}
        draggable={true}
      >
        <h2>Kindacode.com</h2>
      </div>

      <div className={styles.box3} onDragOver={allowDrop} onDrop={dropHandler}>
        {content.endsWith(".jpeg") ? <img src={content} /> : <h2>{content}</h2>}
      </div>
    </div>
  );
}

export default Test2