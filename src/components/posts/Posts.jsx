import Post from "../post/Post";
import "./posts.css";

export default function Posts() {
  return (
    <div className="posts">
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfmwFWkd7HSMq9jOp8KDaPnoyS7ScKag7ceQ&usqp=CAU" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTZN8bahGoLIAn80sv-HKw7pO70vP1lBqkPnTf3eUjlmD8xQG1QNupusLFO3BtT_Sd9Hgc&usqp=CAU" />
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT_lkfqIqWEhPwwqpRY08oO-vnnUow_yZtUSw&usqp=CAU"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRCvjE6U_d890IA_Ph5oKg1pmzs8BS6iL94Q&usqp=CAU"/>
      <Post img="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRl1C5_aioUzgnpZoJXrcODKId7-9I5W0M6rA&usqp=CAU"/>
    </div>
  );
}
