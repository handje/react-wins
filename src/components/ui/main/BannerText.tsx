const BannerText = ({ title, desc }: { title: string; desc: string }) => {
  return (
    <div>
      <h3>{title}</h3>
      <p>{desc}</p>
    </div>
  );
};
export default BannerText;
