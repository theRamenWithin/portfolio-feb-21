export default function ProjectTileHeading({ heading }) {
  return (
    <div className="flex font-mono sm:text-xl text-lg">
      <p className="bg-opacity-80 bg-white rounded">{heading}</p>
    </div>
  );
}
