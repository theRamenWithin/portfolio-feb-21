export default function Link(props) {
  return (
    <a href={props.url} target="_blank" rel="noreferrer" className="text-blue-600 hover:underline">
      {props.view}
    </a>
  );
}
