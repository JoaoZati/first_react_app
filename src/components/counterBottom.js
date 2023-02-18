function CounterBottom(props) {
    console.log("Component was re-rendered")
    return <p>The Couter Button above was clicled {props['counter']} times</p>
}

export default CounterBottom
