function LargeText(props) {
    console.log(props);
    const content = [];

    content.push(<h2>Keys - Values</h2>);
    for(const [key, value] of Object.entries(props)){
        console.log(key);
        content.push(
            <p>
                {key} -  {value}
            </p>,
            <br />
        );

    }

    return <div>{content}</div>
}

export default LargeText
