import Link from './Link';

export default function LinkContainer(props) {
  return (
    <>
      {props.links.map((link, i) => {
        return (
          <>
            <Link key={i} url={link.url} view={link.view} /> {i + 1 < props.links.length && <>/ {''}</>}
          </>
        );
      })}
    </>
  );
}
