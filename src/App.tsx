import { Ban, Bell, CheckCheck, Info,TriangleAlert } from "lucide-react";
import Alert from "./componet/alert/Alert";
function App() {
  return (
    <>
      <div>
        <Alert
          type={"alert-Default"}
          icon={<Bell />}
          title={"upgrade your plan"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, obcaecati cum doloremque iusto aliquam rem deleniti quasi possimus itaque pariatur consectetur? Deserunt saepe blanditiis fuga mollitia quo qui molestias ab!"
          }
        />
        <Alert
          type={"alert-info"}
          icon={<Info />}
          title={"Note"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, obcaecati cum doloremque iusto aliquam rem deleniti quasi possimus itaque pariatur consectetur? Deserunt saepe blanditiis fuga mollitia quo qui molestias ab!"
          }
        />
        <Alert
          type={"alert-warning"}
          icon={< TriangleAlert/>}
          title={"your message has been processed"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, obcaecati cum doloremque iusto aliquam rem deleniti quasi possimus itaque pariatur consectetur? Deserunt saepe blanditiis fuga mollitia quo qui molestias ab!"
          }
        />
        <Alert
          type={"alert-Error"}
          icon={<Ban />}
          title={"Something was wrong"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, obcaecati cum doloremque iusto aliquam rem deleniti quasi possimus itaque pariatur consectetur? Deserunt saepe blanditiis fuga mollitia quo qui molestias ab!"
          }
        />
        <Alert
          type={"alert-Success"}
          icon={<CheckCheck />}
          title={"your message is saved"}
          description={
            "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempora, obcaecati cum doloremque iusto aliquam rem deleniti quasi possimus itaque pariatur consectetur? Deserunt saepe blanditiis fuga mollitia quo qui molestias ab!"
          }
        />
      </div>
    </>
  );
}

export default App;
