function Message() {
    const name = 'Anela';
    if (name)
        return <h1> Hello {name} World</h1>;
    return <h1> Hello World</h1>;
}

export default Message;