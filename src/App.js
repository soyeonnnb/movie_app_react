function Food({fav}){
  console.log(fav)
  return (
    <h1>I like {fav}</h1>
  )
}


function App() {
  return (
    <div>
      <h1>Hello</h1>
      <Food fav="치킨" />
      <Food fav="라면" />
      <Food fav="삼겹살" />
      <Food fav="족발" />
    </div>
  );
}

export default App;
