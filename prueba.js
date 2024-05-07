"use strict";

function LikeButton() {
  const [liked, setLiked] = React.useState(false);
  if (liked) {
    return 'hola como estamos';
  }
  return React.createElement(
    "button",
    {
      onClick: () => setLiked(true),
    },
    "me gusta"
  );
}

const container = document.getElementById("likeButton");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(LikeButton));