import Icon from '../Icon/Icon';
import Link from '../Link/Link';

export default function ProjectTile(props) {
  return (
    <div className="xl:max-w-1/2 mb-6 xl:pr-12">
      <p className="font-bold mb-2 text-gray-800">{props.title}</p>
      <section className="flex mt-2">
        {props.icons.forEach((icon) => {
          return <Icon icon={icon} />;
        })}
      </section>
      <section>
        {props.paragraphs.forEach((paragraph) => {
          return <p className="mt-2">{paragraph.text}</p>;
        })}
      </section>
      <section className="mt-2">
        {props.links.forEach((link) => {
          return <Link url={link.url} view={link.view} />;
        })}
      </section>
    </div>
  );
}
