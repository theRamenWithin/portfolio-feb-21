import Icon from '../Icon/Icon';
import LinkContainer from '../Link/LinkContainer';

export default function ProjectTile(props) {
  return (
    <div className="xl:max-w-1/2 mb-6 xl:pr-12">
      <p className="font-bold mb-2 text-gray-800">{props.title}</p>
      <section className="flex mt-2">
        {props.icons.map((icon, i) => {
          return <Icon key={i} icon={icon} />;
        })}
      </section>
      <section>
        {props.paragraphs.map((paragraph, i) => {
          return (
            <p key={i} className="mt-2">
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
