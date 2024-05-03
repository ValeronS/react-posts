import "./styles/App.css";
import { useRef, useState } from "react";
import PostList from "./components/PostList";
import BaseButton from "./components/UI/button/BaseButton";
import BaseInput from "./components/UI/input/BaseInput";

function App() {
  const bodyInputRef = useRef();

  const [posts, setPosts] = useState([
    { id: 0, title: "Hello World!", body: "Description" },
    { id: 1, title: "Hello World!", body: "Description" },
    { id: 2, title: "Hello World!", body: "Description" },
    { id: 3, title: "Hello World!", body: "Description" },
    { id: 4, title: "Hello World!", body: "Description" },
    { id: 5, title: "Hello World!", body: "Description" },
  ]);

  const [post, setPost] = useState({ title: "", body: "" });

  const addPost = (e) => {
    e.preventDefault();
    setPosts([...posts, { ...post, id: Date.now() }]);
    setPost({ title: "", body: "" });
  };

  return (
    <div className="App">
      <form>
        <BaseInput
          type="text"
          placeholder={"Название поста"}
          value={post.title}
          onChange={(e) => setPost({ ...post, title: e.target.value })}
        />
        <BaseInput
          type="text"
          placeholder={"Описание поста"}
          value={post.body}
          onChange={(e) => setPost({ ...post, body: e.target.value })}
        />
        <BaseButton onClick={addPost}>Сохранить пост</BaseButton>
      </form>
      <PostList posts={posts} title={"Список постов 1"} />
    </div>
  );
}

export default App;
