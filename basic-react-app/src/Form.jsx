function pp(event) {
  event.preventDefault();

  console.log(event);

  console.log("Button clicked k dear!");
}

export default function Form() {
  return (
    <div>
      <form>
        <input type="text" placeholder="Enter some message" />
        <button onClick={pp}>Submit</button>
      </form>
    </div>
  );
}
