import Icon from '../Icon/Icon';
import Link from '../Link/Link';

export default function ProjectTile(props) {
  return (
    <div className="xl:max-w-1/2 mb-6 xl:pr-12">
      <p className="font-bold mb-2 text-gray-800">{props.title}</p>
      <section className="flex mt-2">
        {props.icons.map((icon) => {
          return <Icon icon={icon} />;
        })}
      </section>
      <section>
        {props.paragraphs.map((paragraph) => {
          return <p className="mt-2">{paragraph}</p>;
        })}
      </section>
      <section className="mt-2">
        {props.links.map((link, i) => {
          return (
            <>
              <Link url={link.url} view={link.view} /> {i + 1 < props.links.length && <>/ {''}</>}
            </>
          );
        })}
      </section>
    </div>
  );
}
