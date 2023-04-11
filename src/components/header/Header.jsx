import "./header.css";

export default function Header() {
  return (
    <div className="header">
      <div className="headerTitles">
        <span className="headerTitleSm">React JS</span>
        <span className="headerTitleLg">CAR BLOG</span>
      </div>
      <img
        className="headerImg"
        src="https://c4.wallpaperflare.com/wallpaper/888/180/935/range-rover-suv-evoque-hd-wallpaper-preview.jpg
        "
        alt=""
      />
    </div>
  );
}
