export default function Show({items}) {
    return (
        <>
        {items.map((i) => console.log(i.host))}
        </>
    )
}