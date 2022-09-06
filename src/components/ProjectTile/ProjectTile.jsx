import Icon from '../Icon/Icon';
import LinkContainer from '../Link/LinkContainer';

export default function ProjectTile(props) {
  return (
    <div className="xl:max-w-1/2 mb-6 xl:pr-12">
      <section className="flex">
        <p className="font-bold text-gray-800 bg-opacity-80 bg-white rounded">{props.title}</p>
      </section>
      <section className="flex mt-4">
        {props.icons.map((icon, i) => {
          return <Icon key={i} icon={icon} />;
        })}
      </section>
      <section>
        {props.paragraphs.map((paragraph, i) => {
          return (
            <p key={i} className="mt-2 bg-opacity-80 bg-white rounded">
              {paragraph}
            </p>
          );
        })}
      </section>
      <section className="mt-2">
        <LinkContainer links={props.links} />
      </section>
    </div>
  );
}
