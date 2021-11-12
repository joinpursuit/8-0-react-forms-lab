const ResultSection = (props) => {
    console.log(props)
    return (
        <section id="result">
            <p>{props.result}</p>
        </section>
    )
}
export default ResultSection;