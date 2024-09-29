import "./index.css";
import "./corners";
import "./margins";
export default function Lab2() {
  return (
    <div id="wd-lab2">
      <h2>Lab 2 - Cascading Style Sheets</h2>
      <h3>Styling with the STYLE attribute</h3>
      <p>
        Style attribute allows configuring look and feel right on the element.
        Although it's very convenient it is considered bad practice and you
        should avoid using the style attribute
      </p>
      <p>
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor facilis
        id nulla consequuntur quam, autem quia error, atque repellat reiciendis
        placeat itaque harum commodi fuga. Recusandae, modi neque. Aliquid,
        reprehenderit!
      </p>
      <h2>Colors</h2>
      <h3 className="wd-fg-color-blue">Foreground color</h3>
      <p className="wd-fg-color-red">
        The text in this paragraph is red but
        <span className="wd-fg-color-green">this text is green</span>
      </p>
      <h3 className="wd-bg-color-blue wd-fg-color-white">Background color</h3>
      <p className="wd-bg-color-red wd-fg-color-black">
        This background of this paragraph is red but
        <span
          className="wd-bg-color-green
                     wd-fg-color-white"
        >
          the background of this text is green and the foreground white
        </span>
      </p>
      <h1
        style={{
          backgroundColor: "yellow",
        }}
      >
        Block vs inline elements
      </h1>
      <p
        style={{
          backgroundColor: "blue",
          color: "white",
          padding: "10px",
          marginTop: "50px",
        }}
      >
        Headings ... width
      </p>
      Normal text renders inline
      <br />
      <br />
      <span
        style={{
          backgroundColor: "red",
          color: "white",
          borderStyle: "solid",
          borderBottomWidth: "10px",
          borderTopWidth: "20px",
          borderLeftWidth: "30px",
          borderRightWidth: "40px",
          borderColor: "green",
        }}
      >
        Span elements
      </span>
      <span
        style={{
          backgroundColor: "red",
          color: "white",
        }}
      >
        render inline
      </span>
      with the rest of the content
      <p
        className="wd-border-fat wd-border-red
                wd-border-solid"
      >
        Solid fat red border
      </p>
      <p
        className="wd-border-thin wd-border-blue
                wd-border-dashed"
      >
        Dashed thin blue border
      </p>
      {/* #slides 15 */}
      <div id="wd-css-margins">
        <h2>Margins</h2>
        <div
          className="wd-margin-bottom wd-padded-top-left 
      wd-border-fat wd-border-red wd-border-solid 
      wd-bg-color-yellow"
        >
          Margin bottom{" "}
        </div>
        <div
          className="wd-margin-right-left wd-padded-bottom-right 
      wd-border-fat wd-border-blue  wd-border-solid 
      wd-bg-color-yellow"
        >
          Margin left right{" "}
        </div>
        <div
          className="wd-margin-all-around 
      wd-padding-fat wd-border-fat 
      wd-border-yellow wd-border-solid 
      wd-bg-color-blue wd-fg-color-white"
        >
          Margin all around{" "}
        </div>
      </div>
      <h3>Rounded Corners</h3>
      <p className="rounded-corners-top botder-thin border-blue border-solid padding-fat">
        Rounded corners on the top
      </p>
    </div>
  );
}
