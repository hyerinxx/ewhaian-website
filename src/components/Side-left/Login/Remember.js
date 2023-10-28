export default function Remember(name) {
    const nameValue = name;
    return(
        <span>
            <input name={nameValue} type="checkbox"></input>
        </span>
    );
}