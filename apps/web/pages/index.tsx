import { Button, Contain } from "ui";

export default function Web() {
  return (
    <div>
      <Contain>
        <h1>Web</h1>
        <Button label="click me" url="https://google.com" />
      </Contain>
    </div>
  );
}
