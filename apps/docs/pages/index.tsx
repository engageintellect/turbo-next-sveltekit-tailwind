import { Button } from "ui";
import { Contain } from "ui";

export default function Web() {
  return (
    <div className="">
      <Contain>
        <div>Docs</div>

        <Button label="click me" url="https://google.com" />
      </Contain>
    </div>
  );
}
