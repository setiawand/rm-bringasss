import Image from "next/image";

export default function FavoriteGrid() {
  const items = [
    { title: "Ayam", src: "/images/box-ayam.png" },
    { title: "Ayam Kampung", src: "/images/box-ayam-kampung.png" },
    { title: "Bebek", src: "/images/box-bebek.png" },
    { title: "Ikan", src: "/images/box-ikan.png" },
  ];

  return (
    <div className="grid">
      {items.map((item, i) => (
        <article key={i} className="card" aria-label={item.title}>
          <div className="card-image">
            <Image src={item.src} alt={item.title} fill sizes="(max-width: 560px) 100vw, (max-width: 900px) 50vw, 25vw" />
          </div>
          <div className="card-body">
            <h3 className="card-title">{item.title}</h3>
          </div>
        </article>
      ))}
    </div>
  );
}
